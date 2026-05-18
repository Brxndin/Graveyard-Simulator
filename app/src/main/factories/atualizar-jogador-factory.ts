import { AtualizarJogadorUseCase } from '../../application/use-cases/atualizar-jogador-use-case';
import { axiosClient } from '../../infrastructure/http/config/axios-client';
import { AxiosJogadorRepository } from '../../infrastructure/repositories/axios-jogador-repository';
import { AtualizarJogadorController } from '../../presentation/controllers/atualizar-jogador-controller';

export const MakeAtualizarJogadorController = (): AtualizarJogadorController => {
    const repository = new AxiosJogadorRepository(axiosClient);
    const useCase = new AtualizarJogadorUseCase(repository);

    return new AtualizarJogadorController(useCase);
};
