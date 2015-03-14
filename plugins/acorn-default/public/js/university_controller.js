/**
 * Created by shawnl on 13/03/15.
 */
function UniversityController ($scope, $http){
	$scope.images = [];
	
	$http({method:'GET', url:'/api/get_university_slideshow'})
			.success(function(results){$scope.images = results.message})
			.error(function(error){console.log(error)});
}
