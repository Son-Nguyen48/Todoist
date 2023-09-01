<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require('../../config/database.php');
include_once('../../model/Todo.php');

$todo = new Todo($connection);
$todos = $todo->readData();

$num = $todos->rowCount();
if ($num > 0) {
    $todolist = [];
    $todolist['todolist'] = [];

    while ($row = $todos->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $todolist_item = [
            'id' => $id,
            'title' => $title,
            'isCompleted' => $isCompleted,
            'isEditing' => $isEditing,
            'isModalOpen' => $isModalOpen,
            'idDuedate' => $idDuedate,
            'dueDate' => $dueDate
        ];
        array_push($todolist['todolist'], $todolist_item);
    }

    echo json_encode($todolist);
}
