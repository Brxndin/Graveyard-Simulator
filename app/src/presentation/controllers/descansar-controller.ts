import type { DescansarUseCase } from "../../application/use-cases/descansar-use-case";
import type { Jogador } from "../../domain/entities/jogador";
import type { Controller } from "../protocols/controller";

interface DescansarInput {
    jogador: Jogador;
}

interface DescansarOutput {
    jogadorAtualizado: Jogador;
    venceu: boolean;
    perdeu: boolean;
    mensagem: string;
}

export class DescansarController implements Controller<DescansarInput, DescansarOutput> {
    private readonly useCase: DescansarUseCase;
    
    constructor(useCase: DescansarUseCase) {
        this.useCase = useCase;
    }

    async handle(input: DescansarInput): Promise<DescansarOutput> {
        if (!input.jogador) {
            throw new Error('Jogador não encontrado para descansar.');
        }

        return await this.useCase.execute(input.jogador);
    }
}
