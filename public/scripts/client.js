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
            getList();              // call here to make sure task added before getList ran
        }
    });
} // end addTask funct


function appendTasks(taskArray) {
    $('#container').empty();
    for (var i in taskArray) {
        var $row = $('#container').append('<tr></tr>');
        $row.append('<td>' + taskArray[i].task + '</td>');
        $row.append('<td><button class="completeButton">Complete</button></td>');
        $row.append('<td><button class="deleteButton" data-id=' + taskArray[i].id + '>Delete</button></td>');
        $('#container').append($row);        
    }
}   // end appendTasks funct

function completeTask(){
    // ajax PUT call?
} // end completeTask funct

function deleteTask(){              // send id of task to be deleted to server
    var taskId = $(this).data('id');     // grab id of deleted button/row, store as INT
    $.ajax({
        method: 'DELETE',
        url: '/tasks/' + taskId,
        data: taskId,
        success: function(res){
            console.log(res);
            getList();
        }
    });
} // end deleteTask funct