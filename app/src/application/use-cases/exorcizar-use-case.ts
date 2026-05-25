import type { Jogador } from "../../domain/entities/jogador";
import type { JogadorRepository } from "../../domain/repositories/jogador-repository";

export class ExorcizarUseCase {
    private repository: JogadorRepository;

    constructor(repository: JogadorRepository) {
        this.repository = repository;
    }

    async execute(jogador: Jogador) {
        const mensagem = jogador.exorcizar();

        if (!jogador.id) {
            throw new Error('Erro ao buscar o id do Jogador!');
        }

        const atualizou = await this.repository.exorcizar(jogador.id);

        if (!atualizou) {
            throw new Error('Ocorreu um erro ao tentar exorcizar!');
        }

        return {
            jogadorAtualizado: jogador,
            mensagem: mensagem,
        };
    }
}
