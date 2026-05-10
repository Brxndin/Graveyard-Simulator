<?php

namespace Server\infrastructure\repositories;

use PDO;
use Server\domain\entities\Assombracao;
use Server\domain\entities\Mausoleu;
use Server\domain\enums\TipoAssombracaoEnum;
use Server\domain\repositories\AssombracaoRepository;

class PDOAssombracaoRepository implements AssombracaoRepository
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
                    assombracoes.*,
                    CASE
                        WHEN assombracoes.mausoleu_id IS NOT NULL THEN
                            JSON_OBJECT(
                                'id', mausoleus.id,
                                'nome', mausoleus.nome,
                                'lugares', mausoleus.lugares
                            )
                        ELSE
                            NULL
                    END as mausoleu
                FROM assombracoes
                LEFT JOIN mausoleus ON mausoleus.id = assombracoes.mausoleu_id
            SQL
        );

        $query->execute();

        $assombracoes = $query->fetchAll();

        $retorno = [];

        foreach ($assombracoes as $assombracao) {
            $mausoleu = null;
            
            $dadosMausoleu = json_decode($assombracao['mausoleu'], true);

            if (!empty($dadosMausoleu)) {
                $mausoleu = new Mausoleu(
                    id: (int) $dadosMausoleu['id'],
                    nome: $dadosMausoleu['nome'],
                    lugares: (int) $dadosMausoleu['lugares'],
                );
            }

            $retorno[] = new Assombracao(
                id: (int) $assombracao['id'],
                nome: $assombracao['nome'],
                tipo: TipoAssombracaoEnum::from($assombracao['tipo']),
                mausoleu: $mausoleu,
            );
        }

        return $retorno;
    }

    public function find(int $id): Assombracao | null
    {
        $query = $this->connection->prepare(
            <<<SQL
                SELECT
                    assombracoes.*,
                    CASE
                        WHEN assombracoes.mausoleu_id IS NOT NULL THEN
                            JSON_OBJECT(
                                'id', mausoleus.id,
                                'nome', mausoleus.nome,
                                'lugares', mausoleus.lugares
                            )
                        ELSE
                            NULL
                    END as mausoleu
                FROM assombracoes
                LEFT JOIN mausoleus ON mausoleus.id = assombracoes.mausoleu_id
                WHERE assombracoes.id = :id
            SQL
        );

        $query->execute([
            'id' => $id
        ]);

        $assombracao = $query->fetch();

        if (!$assombracao) {
            return null;
        }

        $mausoleu = null;
            
        $dadosMausoleu = json_decode($assombracao['mausoleu'], true);

        if (!empty($dadosMausoleu)) {
            $mausoleu = new Mausoleu(
                id: (int) $dadosMausoleu['id'],
                nome: $dadosMausoleu['nome'],
                lugares: (int) $dadosMausoleu['lugares'],
            );
        }

        return new Assombracao(
            id: (int) $assombracao['id'],
            nome: $assombracao['nome'],
            tipo: TipoAssombracaoEnum::from($assombracao['tipo']),
            mausoleu: $mausoleu,
        );
    }

    public function insert(Assombracao $assombracao): Assombracao
    {
        try {
            $this->connection->beginTransaction();

            $query = $this->connection->prepare(
                <<<SQL
                    INSERT INTO assombracoes
                    (nome, tipo, mausoleu_id)
                    VALUES (:nome, :tipo, :mausoleu_id)
                SQL
            );

            $query->execute([
                'nome' => $assombracao->nome,
                'tipo' => $assombracao->tipo->value,
                'mausoleu_id' => $assombracao->mausoleu->id ?? null
            ]);

            $id = (int) $this->connection->lastInsertId();

            $this->connection->commit();

            $assombracao->id = $id;

            return $assombracao;
        } catch (\Throwable $error) {
            $this->connection->rollBack();

            throw $error;
        }
    }

    public function update(Assombracao $assombracao): int
    {
        try {
            $this->connection->beginTransaction();

            $query = $this->connection->prepare(
                <<<SQL
                    UPDATE assombracoes
                    SET nome = :nome, tipo = :tipo, mausoleu_id = :mausoleu_id
                    WHERE id = :id
                SQL
            );

            $query->execute([
                'nome' => $assombracao->nome,
                'tipo' => $assombracao->tipo->value,
                'mausoleu_id' => $assombracao->mausoleu->id ?? null,
                'id' => $assombracao->id
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
                    DELETE FROM assombracoes
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

    public function findMausoleu(int $id): Mausoleu | null
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
}
