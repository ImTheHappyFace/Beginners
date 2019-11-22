var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/index.html');

    $stateProvider
        .state('state-1', {
            url: '/general',
            templateUrl: '/static/ngTemplates/general.html',
            controller: "myCtrl"
        });
});



app.controller("myCtrl", function ($scope) {
    $scope.channels = [
        {channelName:"general"},
        {channelName:"random"},
        {channelName:"slack-project-main"},
        {channelName:"new-text"}
    ];
    $scope.callme = function (a , $stateProvider) {
        if(a === "general"){
           console.log("GGGGGGGGGGGGGGG") 
        }
        if(a === "random"){
            console.log("Random")
        }
        if(a === "slack-project-main"){
            console.log("slack-project-main")
        }
        if(a === "new-text"){
            console.log("new-text")
        }
    };
    $scope.dMsg = [
        "Prateek",
        "User",

    ];

    $scope.apps = [
        "Approval-Bot",
        "Asana",
        "Google Drive",
        "hello_World"
    ];

    $scope.mainChat = " ";
    $scope.channel = function () {
        $scope.mainChat = "#Channel";
    };
    $scope.dirMsg = function () {
        $scope.mainChat = "#Messages";
    };
    $scope.application = function () {
        $scope.mainChat = "#Applications";
    };
    $scope.user = function(){
        $scope.mainChat = "#Prateek"
    }

    $scope.todoList = [];

    $scope.invisible = false;

    $scope.addList = function () {
        $scope.invisible = true;
        if ($scope.myText != null) {
            $scope.todoList.push({

                todoName: $scope.myText,
                todoImage: "assets/img/img-2.jpg",
                time: "12:23 PM",
                mainName: "Prateek"
            });
            $scope.myText = null;

        }
    };

    
    $scope.chAdd =[];

    $scope.addChannel = function(){
        $scope.invisible = true;
        if($scope.channelAdd !=null){
          $scope.chAdd.push({
              channelName: $scope.channelAdd
          });
          $scope.channelAdd =null;
        }
    }




});






