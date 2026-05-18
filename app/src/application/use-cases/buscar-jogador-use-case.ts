import type { Jogador } from "../../domain/entities/jogador";
import type { JogadorRepository } from "../../domain/repositories/jogador-repository";

export class BuscarJogadorUseCase {
    private repository: JogadorRepository;

    constructor(repository: JogadorRepository) {
        this.repository = repository;
    }

    async execute(id: number): Promise<Jogador | null> {
        return await this.repository.find(id);
    }
}
