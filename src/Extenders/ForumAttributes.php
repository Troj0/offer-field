<?php

namespace Alterbyte\OfferField\Extenders;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend\ExtenderInterface;
use Illuminate\Contracts\Container\Container;
use Flarum\Extension\Extension;

class ForumAttributes implements ExtenderInterface
{
    public function extend(Container $container, ?Extension $extension = null)
    {
        $container['events']->listen(Serializing::class, [$this, 'serializing']);
    }

    public function serializing(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['alterbyteBiddingCanSubmit'] = $event->actor->hasPermission('alterbyteBidding.submit');
        }
    }

}