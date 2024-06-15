<?php

/*
 * This file is part of huoxin/auto-follow-discussion.
 *
 * Copyright (c) 2024 huoxin.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Huoxin\AutoFollowDiscussion;

use Flarum\Extend;
use Flarum\Discussion\Event\Started;
use Flarum\Discussion\Event\UserRead;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
        
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
        
    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Settings())
        ->default('huoxin-auto-follow-discussion.defaultFollowAfterCreate', true)
        ->default('huoxin-auto-follow-discussion.defaultFollowAfterRead', false),

    (new Extend\Event())
        ->listen(Started::class, FollowAfterCreate::class)
        ->listen(UserRead::class, FollowAfterRead::class),
    
    (new Extend\User())
        ->registerPreference('followAfterCreate', 'boolval', (bool) resolve('flarum.settings')->get('huoxin-auto-follow-discussion.defaultFollowAfterCreate', true))
        ->registerPreference('followAfterRead', 'boolval', (bool) resolve('flarum.settings')->get('huoxin-auto-follow-discussion.defaultFollowAfterRead', false)),
];
