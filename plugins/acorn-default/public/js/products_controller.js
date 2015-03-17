/**
 * Created by shawnl on 16/03/15.
 */
function ProductsController ($scope, $http) {
	$scope.productLines = [];
	$http({method:'GET', url:'/api/products/all'})
			.success(function(results){console.log(results);$scope.productLines = results.message})
			.error(function(err){console.log(err)});
}
