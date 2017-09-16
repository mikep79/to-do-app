$(document).ready(onReady);

function onReady(){
    getList();
    $('#submitButton').on('click', addTask);
}

function getList(){
    $.ajax({
        method: 'GET',
        url: '/tasks',
        success: function(res){
            console.log(res);
        }
    });
}

function addTask(){
    var $task = $('#taskIn').val();
    // clear value
    $('#taskIn').val('');
    // ajax post
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data : {
            task: $task
        },
        success: function(res){
            console.log(res);
        }
    });
}