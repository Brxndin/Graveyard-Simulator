<?php

namespace Server\presentation\enums;

enum ResponseStatusEnum: string
{
    case OK = 'OK';
    case CREATED = 'CREATED';
    case BAD_REQUEST = 'BAD_REQUEST';
    case NOT_FOUND = 'NOT_FOUND';
    case UNAUTHORIZED = 'UNAUTHORIZED';
    case FORBIDDEN = 'FORBIDDEN';
    case SERVER_ERROR = 'SERVER_ERROR';
}
