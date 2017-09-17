$(document).ready(onReady);

function onReady() {
    getList();
    $('#submitButton').on('click', addTask);
    $('#container').on('click', '.completeButton', completeTask);
    $('#container, #container2').on('click', '.deleteButton', deleteTask);
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
    $('#container2').empty();
    for (var i in taskArray) {
        var $row = $('#container').append('<tr></tr>');
        var $row2 = $('#container2').append('<tr></tr>');
        if (taskArray[i].completed) {                   // append completed tasks
            $row2.append('<td class="completed">' + taskArray[i].task + '</td>');
            $row2.append('<td><button class="deleteButton" data-id="' + taskArray[i].id + '">Delete</button></td>');
            $('#container2').append($row2);
        } else {                                    // append unfinished tasks
            $row.append('<td class="unfinished">' + taskArray[i].task + '</td>');
            $row.append('<td><button class="completeButton" data-id="' + taskArray[i].id + '"data-completed=' + taskArray[i].completed + '>Completed</button></td>');
            $row.append('<td><button class="deleteButton" data-id="' + taskArray[i].id + '">Delete</button></td>');
            $('#container').append($row);
        }
    }
}   // end appendTasks funct

function completeTask() {
    var taskId = $(this).data('id');
    var completed = $(this).data('completed');      // yields 'true' or 'false' string
    if (completed) {
        console.log('already completed!');      //  append 'already completed!' to DOM !!
        return;
    } else {
        console.log('false... need to run a PUT call!');
        // ajax PUT call
        $.ajax({
            method: 'PUT',
            url: '/tasks/' + taskId,
            data: taskId,
            success: function (res) {
                console.log(res);
                getList();
            }
        });
    }
} // end completeTask funct

function deleteTask() {              // send id of task to be deleted to server
    var confirmed = confirm('Are you sure you want to delete this item?');  //returns boolean
    if (confirmed) {
        var taskId = $(this).data('id');     // grab id of deleted button/row, store as INT
        $.ajax({
            method: 'DELETE',
            url: '/tasks/' + taskId,
            data: taskId,
            success: function (res) {
                console.log(res);
                getList();
            }
        });
    } else {
        return;
    }
} // end deleteTask funct