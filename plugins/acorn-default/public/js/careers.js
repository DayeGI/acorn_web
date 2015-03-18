$( document ).ready(function() {
	
	//Bootstrap Dropdown-checkbox
	//http://acquisio.github.io/bootstrap-dropdown-checkbox/

	var myData = [{id: 1, label: "产品" },
				  {id: 2, label: "研发" },
				  {id: 3, label: "市场" },
				  {id: 4, label: "客服" },
				  {id: 5, label: "销售" },
				  {id: 6, label: "运营" }];
	$(".jobTypeDropdownCheckbox").dropdownCheckbox({
	  data: myData,
	  title: "职位类别",
	  btnClass: "dropdown-btn-style"
	});

	var myData2 = [{id: 1, label: "北京" },
				   {id: 2, label: "上海" },
				   {id: 3, label: "深圳" },
				   {id: 4, label: "杭州" },
				   {id: 5, label: "宁波" },
				   {id: 6, label: "广州" }];
	$(".jobAreaDropdownCheckbox").dropdownCheckbox({
	  data: myData2,
	  title: "工作地点",
	  btnClass: "dropdown-btn-style dropdown-btn-style2"
	});

});