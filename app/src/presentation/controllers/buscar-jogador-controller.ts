import type { BuscarJogadorUseCase } from '../../application/use-cases/buscar-jogador-use-case';
import type { Jogador } from '../../domain/entities/jogador';
import type { Controller } from '../protocols/controller';

interface BuscarJogadorInput {
    id: number;
}

interface BuscarJogadorOutput {
    jogador: Jogador;
}

export class BuscarJogadorController implements Controller<BuscarJogadorInput, BuscarJogadorOutput> {
    private useCase: BuscarJogadorUseCase;

    constructor(useCase: BuscarJogadorUseCase) {
        this.useCase = useCase;
    }

    async handle({ id }: BuscarJogadorInput): Promise<BuscarJogadorOutput> {
        const jogador = await this.useCase.execute(id);

        if (!jogador) {
            throw new Error('Não foi possível encontrar o Jogador!');
        }

        return {
            jogador: jogador
        };
    }
}
