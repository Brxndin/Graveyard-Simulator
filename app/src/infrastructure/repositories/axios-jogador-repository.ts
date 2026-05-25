import type { AxiosInstance } from 'axios';
import { Jogador } from '../../domain/entities/jogador';
import type { JogadorRepository } from '../../domain/repositories/jogador-repository';

export class AxiosJogadorRepository implements JogadorRepository {
    private api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    async buscar(id: number): Promise<Jogador | null> {
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
            diaAtual: result.data.jogador.diaAtual,
            assombrometroAtual: result.data.jogador.assombrometroAtual,
        });

        return jogador;
    }

    async varrer(id: number): Promise<boolean> {
        const request = await this.api.post(`jogadores/varrer/${id}`);

        if (request.status != 200) {
            return false;
        }

        return true;
    }

    async acenderVelas(id: number): Promise<boolean> {
        const request = await this.api.post(`jogadores/acender-velas/${id}`);

        if (request.status != 200) {
            return false;
        }

        return true;
    }

    async exorcizar(id: number): Promise<boolean> {
        const request = await this.api.post(`jogadores/exorcizar/${id}`);

        if (request.status != 200) {
            return false;
        }

        return true;
    }

    async descansar(id: number): Promise<boolean> {
        const request = await this.api.post(`jogadores/descansar/${id}`);

        if (request.status != 200) {
            return false;
        }

        return true;
    }

    async resetar(id: number): Promise<boolean> {
        const request = await this.api.post(`jogadores/resetar/${id}`);

        if (request.status != 200) {
            return false;
        }

        return true;
    }
}
