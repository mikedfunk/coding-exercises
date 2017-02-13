<?php

namespace LaravelTest;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Task extends Model
{

    /**
     * Get the user for this task.
     *
     * @return App\User
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
