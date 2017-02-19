<ul>
<?php
$db = new PDO("mysql:host=mysql;dbname=test", "root", "mypass");
$tasks = $db->query('select * from tasks');
foreach ($tasks as $task) {
    echo "<li>{$task['name']}</li>";
}
echo "</ul>";
