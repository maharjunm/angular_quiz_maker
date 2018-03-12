app.controller("QuestionMakerController", ['$rootScope', '$scope', function ($rootScope, $scope) {


    var init = function () {
        $scope.questions = [];
    };

    $scope.addQuestion = function () {
        $scope.questions.push({value: "New Question", options: [{value: ""}, {value: ""}]})
    };

    $scope.openDetailedQuestion = function (question) {
        $scope.selectedQuestion = _.cloneDeep(question);
    };

    init();
}]);
