import { ExorcizarUseCase } from '../../application/use-cases/exorcizar-use-case';
import { axiosClient } from '../../infrastructure/http/config/axios-client';
import { AxiosJogadorRepository } from '../../infrastructure/repositories/axios-jogador-repository';
import { ExorcizarController } from '../../presentation/controllers/exorcizar-controller';

export const MakeExorcizarController = (): ExorcizarController => {
    const repository = new AxiosJogadorRepository(axiosClient);
    const useCase = new ExorcizarUseCase(repository);

    return new ExorcizarController(useCase);
};
