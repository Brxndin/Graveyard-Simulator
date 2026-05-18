import type { AxiosInstance } from 'axios';
import { Jogador } from '../../domain/entities/jogador';
import type { JogadorRepository } from '../../domain/repositories/jogador-repository';

export class AxiosJogadorRepository implements JogadorRepository {
    private api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    async find(id: number): Promise<Jogador | null> {
        const request = await this.api.get(`jogadores/${id}`);

        const result = request.data;

        if (!result.data.jogador) {
            return null;
        }

        const jogador = new Jogador({
            id: result.data.jogador.id,
            energia: result.data.jogador.energia,
            dinheiro: result.data.jogador.dinheiro,
            energiaMaxima: result.data.jogador.energiaMaxima,
        });

        return jogador;
    }

    async update(jogador: Jogador): Promise<boolean> {
        const request = await this.api.put(`jogadores/${jogador.id}`, {
            energia: jogador.energia,
            dinheiro: jogador.dinheiro,
            energiaMaxima: jogador.energiaMaxima,
        });

        if (request.status != 200) {
            return false;
        }

        return true;
    }
}
