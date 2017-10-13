trendingApp.controller("trendingCtrl",call);
function call($scope,trendingFactory){
    var promise = trendingFactory.callServer();
    promise.then(function(data){
        //console.log("the data is" ,data);
        $scope.printdata= data;
        console.log("Scope PrintData ",$scope.printdata);
		},function(err){
			//console.log("Controller Rec the Promise Error");
			$scope.error = err;
		})    
    
  
}


