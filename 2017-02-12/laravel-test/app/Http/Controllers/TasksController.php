<?php

namespace LaravelTest\Http\Controllers;

use Illuminate\Http\Request;
use LaravelTest\Task;
use Illuminate\View\View;

class TasksController extends Controller
{

    /**
     * Browse all tasks.
     *
     * @param LaravelTest\Task $task
     *
     * @return Illuminate\View\View
     */
    public function browseAction(Task $task): View
    {
        return view('tasks.browse', ['tasks' => $task->all()]);
    }
}
