<?php

namespace Server\infrastructure\repositories;

use PDO;
use Server\domain\entities\Jogador;
use Server\domain\repositories\JogadorRepository;

class PDOJogadorRepository implements JogadorRepository
{
    private PDO $connection;

    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
    }

    public function find(int $id): Jogador | null
    {
        $query = $this->connection->prepare(
            <<<SQL
                SELECT
                    jogadores.*
                FROM jogadores
                WHERE jogadores.id = :id
            SQL
        );

        $query->execute([
            'id' => $id
        ]);

        $jogador = $query->fetch();

        if (!$jogador) {
            return null;
        }

        return new Jogador(
            id: (int) $jogador['id'],
            energia: $jogador['energia'],
            dinheiro: $jogador['dinheiro'],
            energiaMaxima: $jogador['energia_maxima'],
            diaAtual: $jogador['dia_atual'],
            assombrometroAtual: $jogador['assombrometro_atual'],
        );
    }

    public function update(Jogador $jogador): int
    {
        try {
            $this->connection->beginTransaction();

            $query = $this->connection->prepare(
                <<<SQL
                    UPDATE jogadores
                    SET energia = :energia, dinheiro = :dinheiro, energia_maxima = :energia_maxima, dia_atual = :dia_atual, assombrometro_atual = :assombrometro_atual
                    WHERE id = :id
                SQL
            );

            $query->execute([
                'energia' => $jogador->energia,
                'dinheiro' => $jogador->dinheiro,
                'energia_maxima' => $jogador->energiaMaxima,
                'dia_atual' => $jogador->diaAtual,
                'assombrometro_atual' => $jogador->assombrometroAtual,
                'id' => $jogador->id
            ]);

            $linhasAlteradas = $query->rowCount();

            $this->connection->commit();

            return $linhasAlteradas;
        } catch (\Throwable $error) {
            $this->connection->rollBack();

            throw $error;
        }
    }
}
