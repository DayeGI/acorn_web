$(document).ready(function(){var e=[{id:1,label:"产品",isChecked:!0},{id:2,label:"研发",isChecked:!0},{id:3,label:"市场",isChecked:!0},{id:4,label:"客服",isChecked:!0},{id:5,label:"销售",isChecked:!0},{id:6,label:"运营",isChecked:!0}];$(".jobTypeDropdownCheckbox").dropdownCheckbox({data:e,title:"职位类别",btnClass:"dropdown-btn-style"});var d=[{id:1,label:"北京",isChecked:!0},{id:2,label:"上海",isChecked:!0},{id:3,label:"深圳",isChecked:!0},{id:4,label:"杭州",isChecked:!0},{id:5,label:"宁波",isChecked:!0},{id:6,label:"广州",isChecked:!0}];$(".jobAreaDropdownCheckbox").dropdownCheckbox({data:d,title:"工作地点",btnClass:"dropdown-btn-style dropdown-btn-style2"});var l=$(".jobTypeDropdownCheckbox").dropdownCheckbox("checked");console.log(l)});