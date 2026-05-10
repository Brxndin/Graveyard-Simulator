<?php

namespace Server\infrastructure\repositories;

use PDO;
use Server\domain\entities\Mausoleu;
use Server\domain\repositories\MausoleuRepository;

class PDOMausoleuRepository implements MausoleuRepository
{
    private PDO $connection;

    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
    }

    public function get(): array
    {
        $query = $this->connection->prepare(
            <<<SQL
                SELECT
                    mausoleus.*,
                    (
                        SELECT COUNT(assombracoes.id)
                        FROM assombracoes
                        WHERE assombracoes.mausoleu_id = mausoleus.id
                    ) as lugares_ocupados
                FROM mausoleus
            SQL
        );

        $query->execute();

        $mausoleus = $query->fetchAll();

        $retorno = [];

        foreach ($mausoleus as $mausoleu) {
            $retorno[] = new Mausoleu(
                id: (int) $mausoleu['id'],
                nome: $mausoleu['nome'],
                lugares: $mausoleu['lugares'],
                lugaresOcupados: $mausoleu['lugares_ocupados'],
            );
        }

        return $retorno;
    }

    public function find(int $id): Mausoleu | null
    {
        $query = $this->connection->prepare(
            <<<SQL
                SELECT
                    mausoleus.*
                    (
                        SELECT COUNT(assombracoes.id)
                        FROM assombracoes
                        WHERE assombracoes.mausoleu_id = mausoleus.id
                    ) as lugares_ocupados
                FROM mausoleus
                WHERE mausoleus.id = :id
            SQL
        );

        $query->execute([
            'id' => $id
        ]);

        $mausoleu = $query->fetch();

        if (!$mausoleu) {
            return null;
        }

        return new Mausoleu(
            id: (int) $mausoleu['id'],
            nome: $mausoleu['nome'],
            lugares: $mausoleu['lugares'],
            lugaresOcupados: $mausoleu['lugares_ocupados'],
        );
    }

    public function insert(Mausoleu $mausoleu): Mausoleu
    {
        try {
            $this->connection->beginTransaction();

            $query = $this->connection->prepare(
                <<<SQL
                    INSERT INTO mausoleus
                    (nome, lugares)
                    VALUES (:nome, :lugares)
                SQL
            );

            $query->execute([
                'nome' => $mausoleu->nome,
                'lugares' => $mausoleu->lugares,
            ]);

            $id = (int) $this->connection->lastInsertId();

            $this->connection->commit();

            $mausoleu->id = $id;

            return $mausoleu;
        } catch (\Throwable $error) {
            $this->connection->rollBack();

            throw $error;
        }
    }

    public function update(Mausoleu $mausoleu): int
    {
        try {
            $this->connection->beginTransaction();

            $query = $this->connection->prepare(
                <<<SQL
                    UPDATE mausoleus
                    SET nome = :nome, lugares = :lugares
                    WHERE id = :id
                SQL
            );

            $query->execute([
                'nome' => $mausoleu->nome,
                'lugares' => $mausoleu->lugares,
                'id' => $mausoleu->id
            ]);

            $linhasAlteradas = $query->rowCount();

            $this->connection->commit();

            return $linhasAlteradas;
        } catch (\Throwable $error) {
            $this->connection->rollBack();

            throw $error;
        }
    }

    public function delete(int $id): int
    {
        try {
            $this->connection->beginTransaction();

            $query = $this->connection->prepare(
                <<<SQL
                    DELETE FROM mausoleus
                    WHERE id = :id
                SQL
            );

            $query->execute([
                'id' => $id
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
