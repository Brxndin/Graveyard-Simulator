<?php

namespace Server\presentation\protocols;

use DomainException;
use Server\presentation\enums\ResponseStatusEnum;
use Throwable;

class Responses
{
    public static function ok(mixed $data): array
    {
        return [
            'status' => ResponseStatusEnum::OK->value,
            'body' => $data,
        ];
    }

    public static function created(mixed $data): array
    {
        return [
            'status' => ResponseStatusEnum::CREATED->value,
            'body' => $data,
        ];
    }

    public static function badRequest(string $message): array
    {
        return [
            'status' => ResponseStatusEnum::BAD_REQUEST->value,
            'body' => [
                'message' => $message
            ]
        ];
    }

    public static function unauthorized(string $message): array
    {
        return [
            'status' => ResponseStatusEnum::UNAUTHORIZED->value,
            'body' => [
                'message' => $message,
            ]
        ];
    }

    public static function forbidden(string $message): array
    {
        return [
            'status' => ResponseStatusEnum::FORBIDDEN->value,
            'body' => [
                'message' => $message,
            ]
        ];
    }

    public static function notFound(string $message): array
    {
        return [
            'status' => ResponseStatusEnum::NOT_FOUND->value,
            'body' => [
                'message' => $message,
            ]
        ];
    }

    public static function serverError(string $message)
    {
        return [
            'status' => ResponseStatusEnum::SERVER_ERROR->value,
            'body' => [
                'message' => $message,
            ]
        ];
    }

    public static function validaErro(Throwable $error): array
    {
        error_log($error->getMessage());

        if ($error instanceof DomainException) {
            return self::badRequest($error->getMessage());
        }

        return self::serverError('Ocorreu um erro interno. Tente novamente mais tarde ou contate o suporte.');
    }
}
