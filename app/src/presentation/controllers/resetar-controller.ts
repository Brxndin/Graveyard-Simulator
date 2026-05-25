import type { ResetarUseCase } from "../../application/use-cases/resetar-use-case";
import type { Jogador } from "../../domain/entities/jogador";
import type { Controller } from "../protocols/controller";

interface ResetarInput {
    jogador: Jogador;
}

interface ResetarOutput {
    jogadorAtualizado: Jogador;
}

export class ResetarController implements Controller<ResetarInput, ResetarOutput> {
    private readonly useCase: ResetarUseCase;
    
    constructor(useCase: ResetarUseCase) {
        this.useCase = useCase;
    }

    async handle(input: ResetarInput): Promise<ResetarOutput> {
        if (!input.jogador) {
            throw new Error('Jogador não encontrado para resetar.');
        }

        return await this.useCase.execute(input.jogador);
    }
}
