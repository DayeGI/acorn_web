/**
 * Created by shawnl on 13/03/15.
 */

function CareersController ($scope, $http, $sce) {

	$scope.returnJobCategoryChecks = [{id: 1, label: "产品", isChecked: true},
		{id: 2, label: "研发", isChecked: true},
		{id: 3, label: "市场", isChecked: true},
		{id: 4, label: "客服", isChecked: true},
		{id: 5, label: "销售", isChecked: true},
		{id: 6, label: "运营", isChecked: true}];
	$(".jobTypeDropdownCheckbox").dropdownCheckbox({
		data: $scope.returnJobCategoryChecks,
		title: "职位类别",
		btnClass: "dropdown-btn-style"
	}).change(function(event){
		setTimeout(function(){
			$scope.$apply();
		});
	});

	$scope.returnJobLocationChecks = [{id: 1, label: "北京", isChecked: true},
		{id: 2, label: "上海", isChecked: true},
		{id: 3, label: "深圳", isChecked: true},
		{id: 4, label: "杭州", isChecked: true},
		{id: 5, label: "宁波", isChecked: true},
		{id: 6, label: "广州", isChecked: true}];
	$(".jobAreaDropdownCheckbox").dropdownCheckbox({
		data: $scope.returnJobLocationChecks,
		title: "工作地点",
		btnClass: "dropdown-btn-style dropdown-btn-style2"
	}).change(function(event){
		setTimeout(function(){
			$scope.$apply();
		});
	});
	

	//toggle active career class amongst all li items
	$(".career-category-listing li").click(function(){
		if ($(this).hasClass("activeCareer")) {
			$(".career-category-listing li").removeClass("activeCareer");
		} else {
			$(".career-category-listing li").removeClass("activeCareer");
			$(this).addClass("activeCareer");
		}
	});

	//remove active class when cancel button is clicked
	$(".career-detail-display ul li:nth-child(2)").click(function(){
		$(".career-category-listing li").removeClass("activeCareer");
	});

	$scope.categories = [];
	$scope.careerDetails = null;

	$http({method: 'GET', url: 'api/all_jobs'})
			.success(function (results) {
				$scope.categories = results.message;
				console.log($scope.categories);
			})
			.error(function (err) {
				console.log(err)
			});

	$scope.setCareerDetails = function (job) {
		$scope.careerDetails = job;
	}
	$scope.categoryMap = {
		"产品": 0,
		"研发": 1,
		"市场": 2,
		"客服": 3,
		"销售": 4,
		"运营": 5
	};
	$scope.locationMap = {
		"北京": 0,
		"上海": 1,
		"深圳": 2,
		"杭州": 3,
		"宁波": 4,
		"广州": 5
	};
}
	// console.log(returnJobCategoryChecks[0].isChecked);
