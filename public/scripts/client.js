$(document).ready(onReady);

function onReady() {
    getList();
    $('#submitButton').on('click', addTask);
}

// GET req to server to obtain array of tasks
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

// POST req to server to add a task
function addTask() {
    var $task = $('#taskIn').val();
    // clear value
    $('#taskIn').val('');
    // ajax post
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

// append info to DOM
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