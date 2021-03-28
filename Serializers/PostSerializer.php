<?php
use Flarum\Api\Serializer\AbstractSerializer;

Class PostSerializer extends AbstractSerializer {
    protected $type = 'posts';
    
    protected function getDefaultAttributes($posts)
    {
        return [
            'alterbyteBidding' = $posts->alterbyte_bid,
        ];
    }
}