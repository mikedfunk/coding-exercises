<h1>Tasks</h1>
@if(!$tasks)
  <p>no tasks!</p>
@else
  @foreach($tasks as $task)
  <li><input type="checkbox" @if($task->completed_at) checked @endif />{{ $task->title }}</li>
  @endforeach
@endif
