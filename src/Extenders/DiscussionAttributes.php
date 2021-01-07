<?php

namespace Alterbyte\OfferField\Extenders;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Extend\ExtenderInterface;
use Illuminate\Contracts\Container\Container;
use Flarum\Extension\Extension;

class DiscussionAttributes implements ExtenderInterface
{
    public function extend(Container $container, ?Extension $extension = null)
    {
        $container['events']->listen(Serializing::class, [$this, 'serializing']);
    }


    public function serializing(Serializing $event)
    {
        if ($event->isSerializer(DiscussionSerializer::class) && $event->actor->hasPermission("alterbyteBidding.view")) {
            $event->attributes['alterbyteBidding'] = $event->model->alterbyte_bid; // Transform rating from 10 to 5
            //$event->model->alterbyte_Dis_rating = $event->model->alterbyte_bid;
        }
    }

}