<?php

namespace Alterbyte\OfferField\Extenders;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\PostSerializer;
use Flarum\Extend\ExtenderInterface;
use Illuminate\Contracts\Container\Container;
use Flarum\Extension\Extension;

class PostAttributes implements ExtenderInterface
{
    public function extend(Container $container, ?Extension $extension = null)
    {
        $container['events']->listen(Serializing::class, [$this, 'serializing']);
    }

    public function serializing(Serializing $event)
    {
        if ($event->isSerializer(PostSerializer::class) && $event->actor->hasPermission("alterbyteBidding.view")) {
            $event->attributes['alterbyteBidding'] = $event->model->alterbyte_bid;
            //$event->model->alterbyte_Dis_rating = $event->model->alterbyte_bid;
            $event->attributes['alterbyteBiddingCanEdit'] = $event->actor->can('alterbyteBiddingEdit', $event->model);
        }
    }

}