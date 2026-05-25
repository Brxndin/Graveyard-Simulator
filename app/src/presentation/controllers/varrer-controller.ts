import type { VarrerUseCase } from "../../application/use-cases/varrer-use-case";
import type { Jogador } from "../../domain/entities/jogador";
import type { Controller } from "../protocols/controller";

interface VarrerInput {
    jogador: Jogador;
}

interface VarrerOutput {
    jogadorAtualizado: Jogador;
    mensagem: string;
}

export class VarrerController implements Controller<VarrerInput, VarrerOutput> {
    private readonly useCase: VarrerUseCase;
    
    constructor(useCase: VarrerUseCase) {
        this.useCase = useCase;
    }

    async handle(input: VarrerInput): Promise<VarrerOutput> {
        if (!input.jogador) {
            throw new Error('Jogador não encontrado para varrer.');
        }

        return await this.useCase.execute(input.jogador);
    }
}
