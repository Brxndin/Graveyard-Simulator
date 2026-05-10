<?php

namespace Server\presentation\protocols;

interface Controller
{
    public function handle(array $request);
}
