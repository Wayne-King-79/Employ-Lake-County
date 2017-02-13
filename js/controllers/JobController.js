app.controller('JobController', function ($scope, $http) {
    $http.get("http://employlakecounty.org/db/jobs.php")
        .then(function (response) {
            $scope.jobs = response.data.records;

            //console.log($scope.jobs.length);
            // Below code is for uib pagination
            $scope.viewBy = 5;
            $scope.totalItems = $scope.jobs.length;
            $scope.currentPage = 1;
            $scope.itemsPerPage = $scope.viewBy;
            $scope.maxSize = $scope.totalItems / $scope.viewBy;

            $scope.setPage = function(pageNo) {
                $scope.currentPage = pageNo;
            }

            $scope.pageChanged = function() {
                console.log('Page changed to: ' + $scope.currentPage);
            }

            $scope.setItemsPerPage = function(num) {
                $scope.itemsPerPage = num;
                $scope.currentPage = 1;
            }
        });
});