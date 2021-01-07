<?php

/*
 * This file is part of alterbyte/offer-field.
 *
 * Copyright (c) 2020 Alterbyte.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Alterbyte\OfferField;

use Alterbyte\OfferField\Policies\PostPolicy;
use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__ . '/resources/locale'),

    new Extenders\DiscussionAttributes(),
    new Extenders\ForumAttributes(),
    new Extenders\PostAttributes(),
    new Extenders\SaveRating(),
    
    function(Dispatcher $events) {
        $events->subscribe(PostPolicy::class);
    }
];
