/**
 * Created by shawnl on 13/03/15.
 */
function AboutUsController ($scope, $http){
	$scope.offices = [];
	
	$http({method:'GET', url:'api/office_locations'})
			.success(function(data){$scope.offices=data.message})
			.error(function(err){console.log(err)});
}
