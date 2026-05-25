import type { ExorcizarUseCase } from "../../application/use-cases/exorcizar-use-case";
import type { Jogador } from "../../domain/entities/jogador";
import type { Controller } from "../protocols/controller";

interface ExorcizarInput {
    jogador: Jogador;
}

interface ExorcizarOutput {
    jogadorAtualizado: Jogador;
    mensagem: string;
}

export class ExorcizarController implements Controller<ExorcizarInput, ExorcizarOutput> {
    private readonly useCase: ExorcizarUseCase;
    
    constructor(useCase: ExorcizarUseCase) {
        this.useCase = useCase;
    }

    async handle(input: ExorcizarInput): Promise<ExorcizarOutput> {
        if (!input.jogador) {
            throw new Error('Jogador não encontrado para exorcizar.');
        }

        return await this.useCase.execute(input.jogador);
    }
}
