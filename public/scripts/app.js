var myApp = angular.module('myApp', []);

myApp.controller('ListController', function ($http) {
    console.log('NG');
    var vm = this;
    vm.taskList = [];

    vm.getTasks = function () {
        $http({
            method: 'GET',
            url: '/tasks'
        }).then(function (res) {
            console.log(res.data);
            vm.taskList = res.data;
        });
    };

    vm.addTask = function () {
        console.log('added a task: ', vm.input);
        $http({
            method: 'POST',         // MUST be method; type sent a get req instead.
            url: '/tasks',
            data: {
                task: vm.input
            }
        }).then(function (res) {
            console.log(res);
            vm.getTasks();
        });
    };

    vm.deleteTask = function (taskId) {
        $http({
            method: 'DELETE',
            url: '/tasks/' + taskId,
        }).then(function (res) {
            console.log(res);
            vm.getTasks();
        });
    };

    vm.completeTask = function (taskId) {
        $http({
            method: 'PUT',
            url: '/tasks/' + taskId,
        }).then(function (res) {
            console.log(res);
            vm.getTasks();
        });
    };
});

