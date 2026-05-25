import type { Jogador } from '../entities/jogador';

export interface JogadorRepository {
    buscar(id: number): Promise<Jogador | null>;
    varrer(id: number): Promise<boolean>;
    descansar(id: number): Promise<boolean>;
    acenderVelas(id: number): Promise<boolean>;
    exorcizar(id: number): Promise<boolean>;
    resetar(id: number): Promise<boolean>;
}
