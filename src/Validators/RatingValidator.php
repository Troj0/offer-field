<?php

namespace Alterbyte\OfferField\Validators;

use Flarum\Foundation\AbstractValidator;

class RatingValidator extends AbstractValidator
{
    protected $rules = [
        'bid' => 'nullable|integer|min:1|max:500000',
    ];
};