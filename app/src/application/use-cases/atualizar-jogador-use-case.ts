import { Jogador } from "../../domain/entities/jogador";
import type { JogadorRepository } from "../../domain/repositories/jogador-repository";
import type { AtualizarJogadorInput } from "../dtos/atualizar-jogador-dto";

export class AtualizarJogadorUseCase {
    private repository: JogadorRepository;

    constructor(repository: JogadorRepository) {
        this.repository = repository;
    }

    async execute(id: number, dados: AtualizarJogadorInput): Promise<Jogador> {
        const jogadorAtualizado = new Jogador({
            id: id,
            dinheiro: dados.dinheiro,
            energia: dados.energia,
            energiaMaxima: dados.energiaMaxima,
        });

        const atualizou = await this.repository.update(jogadorAtualizado);

        if (!atualizou) {
            throw new Error('Não foi possível atualizar o Jogador!');
        }

        return jogadorAtualizado;
    }
}
