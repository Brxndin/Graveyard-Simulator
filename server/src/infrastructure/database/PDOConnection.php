<?php

namespace Server\infrastructure\database;

use PDO;
use PDOException;

class PDOConnection
{
    public static function create(): PDO
    {
        // quando usamos docker no php, o host é o ip por conta de um socket que não encontra se for localhost
        $host = $_ENV['DB_HOST'] ?? '127.0.0.1';
        $port = $_ENV['DB_PORT'] ?? '3306';
        $db = $_ENV['DB_DATABASE'] ?? 'graveyard_simulator';
        $user = $_ENV['DB_USER'] ?? 'root';
        $pass = $_ENV['DB_ROOT_PASSWORD'] ?? '';
        $charset = 'utf8mb4';

        $dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";

        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ];

        try {
            return new PDO($dsn, $user, $pass, $options);
        } catch (PDOException $e) {
            throw new \RuntimeException('Erro ao conectar com o banco: ' . $e->getMessage());
        }
    }
}
