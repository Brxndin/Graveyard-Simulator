import { ResetarUseCase } from '../../application/use-cases/resetar-use-case';
import { axiosClient } from '../../infrastructure/http/config/axios-client';
import { AxiosJogadorRepository } from '../../infrastructure/repositories/axios-jogador-repository';
import { ResetarController } from '../../presentation/controllers/resetar-controller';

export const MakeResetarController = (): ResetarController => {
    const repository = new AxiosJogadorRepository(axiosClient);
    const useCase = new ResetarUseCase(repository);

    return new ResetarController(useCase);
};
