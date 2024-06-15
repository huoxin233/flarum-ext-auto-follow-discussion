<?php

namespace Huoxin\AutoFollowDiscussion;

use Flarum\Discussion\Event\UserRead;

class FollowAfterRead
{
    public function handle(UserRead $event): void
    {
        // Get the UserState object from the event
        $userState = $event->state;

        // Get the actor (user) and discussion from the UserState object
        $actor = $userState->user;
        $discussion = $userState->discussion;

        if ($actor && $actor->exists && $actor->getPreference('followAfterRead')) {
            $actor->assertRegistered();

            $state = $discussion->stateFor($actor);

            $state->subscription = 'follow';
            $state->save();
        }
    }
}
