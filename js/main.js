// $(document).ready(function() {
//     $('#fullpage').fullpage({
//     	 anchors:['firstPage', 'secondPage',]
//     });

//    	$('#button1').click(function(){
//     	$.fn.fullpage.moveSectionDown();
// 	});
// });

$(document).ready(function (){
            $("#pull_down_button").click(function (){
                $('html, body').animate({
                    scrollTop: $("#calc-portion").offset().top
                }, 1000);
            });
        });