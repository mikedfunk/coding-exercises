<ul>
<?php
$db = new PDO("mysql:host=mysql;dbname=test", "root", "mypass");
foreach ($db->query('select * from tasks') as $task) {
    echo "<li>{$task['name']}</li>";
}
echo "</ul>";
