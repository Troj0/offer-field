<?php
namespace Alterbyte\OfferField\Policies;

use Flarum\Post\Post;
use Flarum\User\AbstractPolicy;
use Flarum\User\User;

class PostPolicy extends AbstractPolicy
{
    protected $model = Post::class;
    public function alterbyteBiddingEdit(User $actor, Post $post) {
        return  ($actor->id === $post->user_id && $actor->hasPermission('alterbyteBidding.submit')) || $actor->hasPermission('alterbyteBidding.moderate');
    }
}