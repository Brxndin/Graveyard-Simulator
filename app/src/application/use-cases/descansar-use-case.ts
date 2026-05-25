import type { Jogador } from "../../domain/entities/jogador";
import type { JogadorRepository } from "../../domain/repositories/jogador-repository";

export class DescansarUseCase {
    private repository: JogadorRepository;

    constructor(repository: JogadorRepository) {
        this.repository = repository;
    }

    async execute(jogador: Jogador) {
        // quando tiver a logica de assombrações, totalizar o medoCausado por elas
        // só vai contabilizar das que sobraram na funerária
        const medoCausado = 10;

        const mensagem = jogador.descansar(medoCausado);

        if (!jogador.id) {
            throw new Error('Erro ao buscar o id do Jogador!');
        }

        const atualizou = await this.repository.descansar(jogador.id);

        if (!atualizou) {
            throw new Error('Ocorreu um erro ao tentar descansar!');
        }

        return {
            jogadorAtualizado: jogador,
            venceu: jogador.isVencedor(),
            perdeu: jogador.isGameOver(),
            mensagem: mensagem,
        };
    }
}
