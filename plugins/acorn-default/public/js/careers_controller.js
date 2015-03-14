/**
 * Created by shawnl on 13/03/15.
 */
function CareersController ($scope, $http, $sce){
	$scope.jobs = [];
	
	$http({method:'GET', url:'api/job-listings'})
			.success(function(results){$scope.jobs=results.message})
			.error(function(err){console.log(err)});
	
}
