<?
use Flarum\Database\Migration;
use Flarum\Discussion\Discussion;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasColumn('posts', 'alterbyte_rating')) {
            $schema->table('posts', function (Blueprint $table) {
                $table->tinyinteger('alterbyte_rating')->nullable();
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->dropColumn('posts', 'alterbyte_rating');
   },
];