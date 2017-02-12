<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{

    /**
     * Browse all tasks.
     *
     * @return Illuminate\Http\Response
     */
    public function browse()
    {
        return view('task.browse', ['tasks' => Task::all()]);
    }
}
