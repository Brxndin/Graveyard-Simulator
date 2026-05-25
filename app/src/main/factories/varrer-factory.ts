import { VarrerUseCase } from '../../application/use-cases/varrer-use-case';
import { axiosClient } from '../../infrastructure/http/config/axios-client';
import { AxiosJogadorRepository } from '../../infrastructure/repositories/axios-jogador-repository';
import { VarrerController } from '../../presentation/controllers/varrer-controller';

export const MakeVarrerController = (): VarrerController => {
    const repository = new AxiosJogadorRepository(axiosClient);
    const useCase = new VarrerUseCase(repository);

    return new VarrerController(useCase);
};
