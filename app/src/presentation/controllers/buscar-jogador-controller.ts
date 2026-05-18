import type { BuscarJogadorUseCase } from '../../application/use-cases/buscar-jogador-use-case';
import type { Jogador } from '../../domain/entities/jogador';
import type { Controller } from '../protocols/controller';

export class BuscarJogadorController implements Controller<number, Jogador> {
    private useCase: BuscarJogadorUseCase;

    constructor(useCase: BuscarJogadorUseCase) {
        this.useCase = useCase;
    }

    async handle(id: number): Promise<Jogador> {
        const jogador = await this.useCase.execute(id);

        if (!jogador) {
            throw new Error('Não foi possível encontrar o Jogador!');
        }

        return jogador;
    }
}
