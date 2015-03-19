$( document ).ready(function() {
	
	//Bootstrap Dropdown-checkbox
	//http://acquisio.github.io/bootstrap-dropdown-checkbox/

	var myData = [{id: 1, label: "产品", isChecked: true},
				  {id: 2, label: "研发", isChecked: true},
				  {id: 3, label: "市场", isChecked: true},
				  {id: 4, label: "客服", isChecked: true},
				  {id: 5, label: "销售", isChecked: true},
				  {id: 6, label: "运营", isChecked: true}];
	$(".jobTypeDropdownCheckbox").dropdownCheckbox({
	  data: myData,
	  title: "职位类别",
	  btnClass: "dropdown-btn-style"
	});

	var myData2 = [{id: 1, label: "北京", isChecked: true},
				   {id: 2, label: "上海", isChecked: true},
				   {id: 3, label: "深圳", isChecked: true},
				   {id: 4, label: "杭州", isChecked: true},
				   {id: 5, label: "宁波", isChecked: true},
				   {id: 6, label: "广州", isChecked: true}];
	$(".jobAreaDropdownCheckbox").dropdownCheckbox({
	  data: myData2,
	  title: "工作地点",
	  btnClass: "dropdown-btn-style dropdown-btn-style2"
	});

	// var returnJobCategoryChecks = $(".jobTypeDropdownCheckbox").dropdownCheckbox("checked");
	// var returnJobLocationChecks = $(".jobAreaDropdownCheckbox").dropdownCheckbox("checked");
	// //check which of the id has been checked
	// console.log(returnJobCategoryChecks[0].isChecked);
	// console.log(returnJobLocationChecks[0].isChecked);

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

});