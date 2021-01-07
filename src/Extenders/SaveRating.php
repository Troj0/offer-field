<?php

namespace Alterbyte\OfferField\Extenders;

use Alterbyte\OfferField\Validators\RatingValidator;
use Flarum\Extend\ExtenderInterface;
use flarum\Extension\Extension;
use Flarum\Foundation\AbstractValidator;
use Flarum\Post\Event\Saving;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Contracts\Container\Container;
use Illuminate\Support\Arr;
use Illuminate\Support\Optional;
use Illuminate\Support\Facades\DB;

class SaveRating implements ExtenderInterface 
{
    use AssertPermissionTrait;

    public function extend(Container $container, Extension $extension = null )
    {
        $container['events']->listen(Saving::class, [$this, 'saving']);
    }
    public function saving(Saving $event) 
    {
        $attributes = Arr::get($event->data, 'attributes', []);
        if (array_key_exists('alterbyteBidding', $attributes))  {
            $this->assertCan($event->actor, 'alterbyteBiddingEdit', $event->post);

            /**
             * @var $validator RatingValidator
             */
            $validator = app(RatingValidator::class);
            $validator->assertValid([
                'bid' => $attributes['alterbyteBidding'],
            ]);

            //now we are calculating the average, but later will calculate the Biggest value in the whole discussion.
            $event->post->alterbyte_bid = $attributes['alterbyteBidding'];
            $bargId = $event->post->discussion->barg_init_post_id;
           // $bids = DB::table('posts')->pluck('alterbyte_bid', 'id');
            $id = (int) Arr::get($event->post->alterbyte_bid, 'id');
            
            //$event->post->discussion->alterbyte_Dis_rating = $event->post->discussion->barg_init_post_id->where() alterbyte_bid);
            //$event->post->discussion->alterbyte_Dis_rating = $attributes['alterbyteBidding'];
            //$event->post->afterSave(function() use($event) {
                //$averageRating = (new Optional($event->post->discussion->comments()
                //->selectRaw('AVG(alterbyte_bid) as avg')
                //->whereNotNull('alterbyte_bid')
                //->first()))->avg;
                //$event->post->discussion->alterbyte_rating = round($averageRating * 2); //saving the value on 10 so we keep half-rating but save as an integer
                
           // });
           //$event->post->discussion->save();
        }
    }
}