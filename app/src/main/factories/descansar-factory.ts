import { DescansarUseCase } from '../../application/use-cases/descansar-use-case';
import { axiosClient } from '../../infrastructure/http/config/axios-client';
import { AxiosJogadorRepository } from '../../infrastructure/repositories/axios-jogador-repository';
import { DescansarController } from '../../presentation/controllers/descansar-controller';

export const MakeDescansarController = (): DescansarController => {
    const repository = new AxiosJogadorRepository(axiosClient);
    const useCase = new DescansarUseCase(repository);

    return new DescansarController(useCase);
};
