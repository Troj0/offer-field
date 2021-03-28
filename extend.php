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
use Flarum\Api\Serializer\PostSerializer;
use Flarum\Extend;
use Illuminate\events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__ . '/resources/locale'),

    // the below is used as a replacement for the old Extenders/PostAttributes
    (new Extend\ApiSerializer(PostSerializer::class))
        
        // Multiple modifications at once, more complex logic
        ->attributes(function($serializer, $posts, $attributes) {
            if ($serializer->getActor()->can('view')) {
                $attributes['alterbyteBidding'] = $posts->alterbyte_bid;
                $attributes['alterbyteBiddingCanEdit'] = $serializer->getActor()->can('alterbyteBiddingEdit');
            }
            if ($serializer->getActor()->can('alterbyteBidding.submit')) {
                $attributes['alterbyteBidding'] = $posts->alterbyte_bid;
                $attributes['alterbyteBiddingCanSubmit'] = true;
            }

            return $attributes;
        }),
    
    

    //new Extenders\DiscussionAttributes(),
    //new Extenders\ForumAttributes(),
    //new Extenders\PostAttributes(),
    new Extenders\SaveRating(),
    
    function(Dispatcher $events) {
        //$events->subscribe(PostPolicy::class);
    }
];