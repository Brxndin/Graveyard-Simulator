import type { AcenderVelasUseCase } from "../../application/use-cases/acender-velas-use-case";
import type { Jogador } from "../../domain/entities/jogador";
import type { Controller } from "../protocols/controller";

interface AcenderVelasInput {
    jogador: Jogador;
}

interface AcenderVelasOutput {
    jogadorAtualizado: Jogador;
    mensagem: string;
}

export class AcenderVelasController implements Controller<AcenderVelasInput, AcenderVelasOutput> {
    private readonly useCase: AcenderVelasUseCase;
    
    constructor(useCase: AcenderVelasUseCase) {
        this.useCase = useCase;
    }

    async handle(input: AcenderVelasInput): Promise<AcenderVelasOutput> {
        if (!input.jogador) {
            throw new Error('Jogador não encontrado para acender velas.');
        }

        return await this.useCase.execute(input.jogador);
    }
}
