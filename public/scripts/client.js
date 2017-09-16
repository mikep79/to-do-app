$(document).ready(onReady);

function onReady() {
    getList();
    $('#submitButton').on('click', addTask);
    $('#container').on('click', '.completeButton', completeTask);
    $('#container').on('click', '.deleteButton', deleteTask);
}

function getList() {
    $.ajax({
        method: 'GET',
        url: '/tasks',
        success: function (res) {
            console.log(res);
            appendTasks(res);
        }
    });
}   // end getList func


function addTask() {
    var $task = $('#taskIn').val();
    $('#taskIn').val('');
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: {
            task: $task
        },
        success: function (res) {
            console.log(res);
        }
    });
    getList();
} // end addTask funct


function appendTasks(taskArray) {
    $('#container').empty();
    for (var i in taskArray) {
        var $row = $('#container').append('<tr></tr>');
        $row.append('<td>' + taskArray[i].task + '</td>');
        $row.append('<td><button class="completeButton">Complete</button></td>');
        $row.append('<td><button class="deleteButton">Delete</button></td>');
        $('#container').append($row);
    }
}   // end appendTasks funct

function completeTask(){
    // ajax PUT call?
} // end completeTask funct

function deleteTask(){
    // ajax DELETE call
} // end deleteTask funct