angular.module('friendsList').controller('mainCtrl', function($scope){
    $scope.friends = ["Anthony", "Jack", "Sam"];
    $scope.addFriend = function(friend){
        $scope.friends.push(friend);
        $scope.newFriend = '';
    }
});