<h1>Tasks</h1>
@if (!$tasks)
  <p>No tasks</p>
@else
  <ul>
  @foreach ($tasks as $task)
    <li><input type="checkbox" @if ($task->completed_at) checked @endif disabled>{{ $task->name }}</li>
  @endforeach
  </ul>
@endif
