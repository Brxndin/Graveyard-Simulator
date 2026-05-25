import { AcenderVelasUseCase } from '../../application/use-cases/acender-velas-use-case';
import { axiosClient } from '../../infrastructure/http/config/axios-client';
import { AxiosJogadorRepository } from '../../infrastructure/repositories/axios-jogador-repository';
import { AcenderVelasController } from '../../presentation/controllers/acender-velas-controller';

export const MakeAcenderVelasController = (): AcenderVelasController => {
    const repository = new AxiosJogadorRepository(axiosClient);
    const useCase = new AcenderVelasUseCase(repository);

    return new AcenderVelasController(useCase);
};
