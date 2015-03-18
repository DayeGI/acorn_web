$( document ).ready(function() {
	console.log( "ready!" );
	var myData = [{id: 1, label: "Test" }];
	$(".myDropdownCheckbox").dropdownCheckbox({
	  data: myData,
	  title: "Dropdown Checkbox"
	});

});