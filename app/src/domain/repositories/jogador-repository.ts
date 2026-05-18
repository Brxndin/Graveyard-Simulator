import type { Jogador } from '../entities/jogador';

export interface JogadorRepository {
    find(id: number): Promise<Jogador | null>;
    update(jogador: Jogador): Promise<boolean>;
}
