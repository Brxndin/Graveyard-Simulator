import type { AtualizarJogadorUseCase } from '../../application/use-cases/atualizar-jogador-use-case';
import type { Jogador } from '../../domain/entities/jogador';
import type { Controller } from '../protocols/controller';

export interface Props {
     id: number;
     dinheiro: number;
     energia: number;
     energiaMaxima: number;
}

export class AtualizarJogadorController implements Controller<Props, Jogador> {
    private useCase: AtualizarJogadorUseCase;

    constructor(useCase: AtualizarJogadorUseCase) {
        this.useCase = useCase;
    }

    async handle(data: Props): Promise<Jogador> {
        return await this.useCase.execute(data.id, {
            dinheiro: data.dinheiro,
            energia: data.energia,
            energiaMaxima: data.energiaMaxima
        });
    }
}
