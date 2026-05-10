<?php

require __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;
use Server\main\Server;

$dotenv = Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

Server::run();
