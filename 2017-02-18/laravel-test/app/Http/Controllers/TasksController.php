<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TasksController extends Controller
{

    /**
     * Browse tasks.
     *
     * @return Illuminate\Http\Response
     */
    public function browseAction()
    {
        return view('tasks.browse', ['tasks' => \App\Task::all()]);
    }
}
