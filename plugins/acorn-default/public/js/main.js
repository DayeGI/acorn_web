var app = angular.module('acorn', ['ngAnimate']);
angular.module('acorn')
		.filter('to_trusted', ['$sce', function($sce){
			return function(text) {
				return $sce.trustAsHtml(text);
			};
		}]);

$( document ).ready(function() {

    //solutions
    $('.infocards').click(function(){
        $('.infocards').css('transform','translateX(-605%);');
    });
    //university
    $('.type1').click(function(){
        $('#triangle-up').css('marginLeft','calc(12.5% - 20px)');
        $(this).addClass( "active-course1");
        $('.type2').removeClass( "active-course2");
        $('.type3').removeClass( "active-course3");
        $('.type4').removeClass( "active-course4");
    });
    $('.type2').click(function(){
        $('#triangle-up').css('marginLeft','calc(37.5% - 20px)');
        $(this).addClass( "active-course2");
        $('.type1').removeClass( "active-course1");
        $('.type3').removeClass( "active-course3");
        $('.type4').removeClass( "active-course4");
    });
    $('.type3').click(function(){
        $('#triangle-up').css('marginLeft','calc(62.5% - 20px)');
        $(this).addClass( "active-course3");
        $('.type1').removeClass( "active-course1");
        $('.type2').removeClass( "active-course2");
        $('.type4').removeClass( "active-course4");
    });
    $('.type4').click(function(){
        $('#triangle-up').css('marginLeft','calc(87.5% - 20px)');
        $(this).addClass( "active-course4");
        $('.type1').removeClass( "active-course1");
        $('.type2').removeClass( "active-course2");
        $('.type3').removeClass( "active-course3");
    });
    
});

function CommunityRequestController ($scope, $http){
	$scope.submit = function(){
		if($scope.name && $scope.email){
			$http({method:'POST', url:'api/community/early_access_reminder', data:{
				name:$scope.name,
				email:$scope.email
			}})
					.success(function(res){
						alert(res.message.length>0 ? res.message : "Request Submmitted!");
					})
					.error(function(err){
						alert("Request failed with error: "+err);
					})
		}
	}
}

// var iconSize = 80,
//         paddingTopAllowance = 40,
//     visibleWidthModifier = 160,
//     visibleHeightModifier = 170,
//         width = document.getElementById('carousel-wrapper').offsetWidth,
//     height = width/2,
//         xAxis = iconSize/2,
//         yAxis = height+iconSize/2,
//     visibleWidth = width - visibleWidthModifier,
//     visibleHeight = height - visibleHeightModifier,
//         rotationPoint = xAxis + "px" + " " + yAxis + "px",
//         rotationAngle = 0,
//     multipleMouseClickEvent = true,
//     backBtn = $("button#backBtn"),
//     forwardBtn = $("button#forwardBtn");

// document.getElementById('wrapper').style.width = visibleWidth + "px"; // width + "px"
// document.getElementById('wrapper').style.height = visibleHeight + "px"; // height + iconSize + paddingTopAllowance + "px"
// document.getElementById('wrapper').style.paddingTop = paddingTopAllowance + "px";
// document.getElementById('carousel-wrapper').style.width = visibleWidth + "px"; // width + "px"
// document.getElementById('carousel-wrapper').style.height = visibleHeight + "px"; // height + iconSize + paddingTopAllowance + "px"

// var center = $("div#carousel-wrapper");
// var angle = 0;
// for (var i = 0; i < 16; i++){
//     var newCircle = $("<div>", {class:"circle", id:"circle"+i, onclick:"divBtnClick(this)"}).appendTo(center);
//     TweenMax.set(newCircle, {rotation:angle, transformOrigin: rotationPoint});
//   angle += 22.5;
// }

// $( "div.circle" ).css("width",iconSize + "px");
// $( "div.circle" ).css("height",iconSize + "px");
// $( "div.circle" ).css("left",(width - iconSize - visibleWidthModifier) / 2 + "px"); //control visible area alongside the actual viewable width: visibleWidth

// function mouseClickEvent() {
//   multipleMouseClickEvent = true;
// }

// var div0 = $("div#circle0"),
//     div1 = $("div#circle1"),
//     div2 = $("div#circle2"),
//     div3 = $("div#circle3"),
//     div4 = $("div#circle4"),
//     div5 = $("div#circle5"),
//     div6 = $("div#circle6"),
//     div7 = $("div#circle7"),
//     div8 = $("div#circle8"),
//     div9 = $("div#circle9"),
//     div10 = $("div#circle10"),
//     div11 = $("div#circle11"),
//     div12 = $("div#circle12"),
//     div13 = $("div#circle13"),
//     div14 = $("div#circle14"),
//     div15 = $("div#circle15"),
//     divArr = [div0, div1, div2, div3, div4, div5, div6, div7, div8, div9, div10, div11, div12, div13, div14, div15],
//     currentDiv = 0,
//     previousDiv = 15,
//     nextDiv = 1;

// divArr[0].addClass('active');
// divArr[0].css("width", 120 + "px");
// divArr[0].css("height", 120 + "px");

// forwardBtn.click(function(){
//     if(multipleMouseClickEvent){
//         rotationAngle += 22.5;
//       multipleMouseClickEvent = false;
//       divArr[currentDiv].removeClass('active');
//       divArr[currentDiv].css("width", 80 + "px");
//       divArr[currentDiv].css("height", 80 + "px");
//       divArr[previousDiv].addClass('active');
//       divArr[previousDiv].css("width", 120 + "px");
//       divArr[previousDiv].css("height", 120 + "px");
      
//       if(currentDiv === 0) {
//         currentDiv = 15;
//         previousDiv = 14;
//         nextDiv = 0;
//       } else if (previousDiv === 0) {
//         currentDiv = 0;
//         previousDiv = 15;
//         nextDiv = 1;
//       } else if (nextDiv === 0){
//         currentDiv = 14;
//         previousDiv = 13;
//         nextDiv = 15;
//       } else {
//         currentDiv--;
//         previousDiv--;
//         nextDiv--;
//       }
//     } 
//     var angleAdjustment = 0;
//     for(k = 0; k < 16; k++){
//       TweenMax.to(divArr[k], 0.7, {rotation:rotationAngle + angleAdjustment, ease:Cubic.easeInOut, onComplete: mouseClickEvent});
//       angleAdjustment += 22.5;      
//     }
// });

// backBtn.click(function(){
//     if(multipleMouseClickEvent){
//         rotationAngle -= 22.5;
//       multipleMouseClickEvent = false;
//       divArr[currentDiv].removeClass('active');
//       divArr[currentDiv].css("width", 80 + "px");
//       divArr[currentDiv].css("height", 80 + "px");
//       divArr[nextDiv].addClass('active');
//       divArr[nextDiv].css("width", 120 + "px");
//       divArr[nextDiv].css("height", 120 + "px");
      
//       if(currentDiv === 15) {
//         currentDiv = 0;
//         nextDiv = 1;
//         previousDiv = 15;
//       } else if (nextDiv === 15) {
//         currentDiv = 15;
//         nextDiv = 0;
//         previousDiv = 14;
//       } else if (previousDiv === 15) {
//         currentDiv = 1;
//         nextDiv = 2;
//         previousDiv = 0;
//       } else {
//         currentDiv++;
//         previousDiv++;
//         nextDiv++;
//       }
//     }
//     var angleAdjustment = 0;
//     for(k = 0; k < 16; k++){
//       TweenMax.to(divArr[k], 0.7, {rotation:rotationAngle + angleAdjustment, ease:Cubic.easeInOut, onComplete: mouseClickEvent});
//       angleAdjustment += 22.5;      
//     }
// });

// function rotateTo (e, previous, current, next, angle) {
//   previousDiv = previous;
//   nextDiv = next;
  
//   divArr[currentDiv].removeClass('active');
//   divArr[currentDiv].css("width", 80 + "px");
//   divArr[currentDiv].css("height", 80 + "px");
//   currentDiv = current;
//   divArr[currentDiv].addClass('active');
//   divArr[currentDiv].css("width", 120 + "px");
//   divArr[currentDiv].css("height", 120 + "px");
  
//   var angleAdjustment = 0;
//   rotationAngle += angle;
//   for(k = 0; k < 16; k++) {
//     TweenMax.to(divArr[k], 0.7, {rotation:rotationAngle + angleAdjustment, ease:Cubic.easeInOut, onComplete: mouseClickEvent});
//     angleAdjustment += 22.5;
//   }
// }

// //track position of divs when navigating by clicking on visible divs
// function divBtnClick(e) {
//   var previous1 = currentDiv - 1,
//       previous2 = currentDiv - 2,
//       previous3 = currentDiv - 3,
//       previous4 = currentDiv - 4,
//       next1 = currentDiv + 1,
//       next2 = currentDiv + 2,
//       next3 = currentDiv + 3,
//       next4 = currentDiv + 4;
  
//   if (currentDiv === 12) {
//      next4 = 0;
//   }
//   if (currentDiv === 13) {
//     next3 = 0;
//     next4 = 1;
//   }
//   if (currentDiv === 14) {
//     next2 = 0;
//     next3 = 1;
//     next4 = 2;
//   }
//   if (currentDiv === 15) {
//     next1 = 0;
//     next2 = 1;
//     next3 = 2;
//     next4 = 3;
//   }
//   if (currentDiv === 0) {
//     previous1 = 15;
//     previous2 = 14;
//     previous3 = 13;
//     previous4 = 12;
//   }
//   if (currentDiv === 1) {
//     previous2 = 15;
//     previous3 = 14;
//     previous4 = 13;
//   }
//   if (currentDiv === 2) {
//     previous3 = 15;
//     previous4 = 14;
//   }
  
//   if (e.id !== "circle"+currentDiv) {
//     if (e.id === "circle"+previous1) {
//         rotateTo(e, previous2, previous1, currentDiv, 22.5);
//     }
//     if (e.id === "circle"+previous2) {
//       rotateTo(e, previous3, previous2, previous1, 45);
//     }
//     if (e.id === "circle"+previous3) {
//       rotateTo(e, previous4, previous3, previous2, 67.5);
//     }
//     if (e.id === "circle"+next1) {
//       rotateTo(e, currentDiv, next1, next2, -22.5);
//     }
//     if (e.id === "circle"+next2) {
//       rotateTo(e, next1, next2, next3, -45);
//     }
//     if (e.id === "circle"+next3) {
//       rotateTo(e, next2, next3, next4, -67.5);
//     }
//   }
// }

// var iconImgSrc1 = "",
//     iconImgSrc2 = "",
//     iconImgSrc3 = "",
//     iconImgSrc4 = "",
//     iconImgSrc5 = "",
//     iconImgSrc6 = "",
//     iconImgSrcNull = "",
//     imgSrcArr = [iconImgSrc1, iconImgSrc2, iconImgSrc3, iconImgSrc4, iconImgSrc5, iconImgSrc6],
//     counter1 = 0,
//     counter2 = 0,
//     init = true;

// function setCircleBackground () {
//   if (init) {
//     //initialize all visible divs with their relevant img
//     //initialize only once at the very start
//     divArr[14].css("background-image", "url("+iconImgSrc2+")");
//     divArr[15].css("background-image", "url("+iconImgSrc3+")");
//     divArr[0].css("background-image", "url("+iconImgSrc4+")");
//     divArr[1].css("background-image", "url("+iconImgSrc5+")");
//     divArr[2].css("background-image", "url("+iconImgSrc6+")");
//     init = false;
//   }
  
//   //counter to keep track of divs requiring re-initialization
//   if (counter1 < 0) { counter1 = 5; }
//   if (counter2 > 5) { counter2 = 0; }
  
//   if(moveForward) {
//     //clear the img src links for divs that are no longer visible
//     divArr[next3].css("background-image", "url("+iconImgSrcNull+")");
//     //re-init divs that are moving into view
//     divArr[previous3].css("background-image", "url("+imgSrcArr[counter1--]+")");
//   }
  
//   if(moveBackward) {
//     //clear the img src links for divs that are no longer visible
//     divArr[previous3].css("background-image", "url("+iconImgSrcNull+")");
//     //re-init divs that are moving into view
//     divArr[next3].css("background-image", "url("+iconImgSrc[counter2++]+")");
//   }
// }
