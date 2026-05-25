import type { Jogador } from "../../domain/entities/jogador";
import type { JogadorRepository } from "../../domain/repositories/jogador-repository";

export class ResetarUseCase {
    private repository: JogadorRepository;

    constructor(repository: JogadorRepository) {
        this.repository = repository;
    }

    async execute(jogador: Jogador) {
        jogador.resetar();

        if (!jogador.id) {
            throw new Error('Erro ao buscar o id do Jogador!');
        }

        const atualizou = await this.repository.resetar(jogador.id);

        if (!atualizou) {
            throw new Error('Ocorreu um erro ao tentar resetar! Verifique se o jogador já está com os valores iniciais.');
        }

        return {
            jogadorAtualizado: jogador
        };
    }
}
