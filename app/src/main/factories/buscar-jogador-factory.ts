import { BuscarJogadorUseCase } from '../../application/use-cases/buscar-jogador-use-case';
import { axiosClient } from '../../infrastructure/http/config/axios-client';
import { AxiosJogadorRepository } from '../../infrastructure/repositories/axios-jogador-repository';
import { BuscarJogadorController } from '../../presentation/controllers/buscar-jogador-controller';

export const MakeBuscarJogadorController = (): BuscarJogadorController => {
    const repository = new AxiosJogadorRepository(axiosClient);
    const useCase = new BuscarJogadorUseCase(repository);

    return new BuscarJogadorController(useCase);
};
