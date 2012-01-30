	/* global retained variables                    */
	var direct;
	var clicked;
	$(document).ready(function() { 

	/*	$("#imgdiv").fadeIn(5000);

		$("#imgdiv").animate({left: '+=680px'}, 5500); */
		$('.nxtimg, #ms1').jrumble({
		rangeX: 2, rangeY: 2, rumbleSpeed: 50, rumbleEvent: 'hover'
	});		
		$('#content').load('home.html');					  /* start with skills content                */
		$(".slideDiv").hide();								  /* insure sliding div is closed             */
		$(".showhide").show();								  /* initially display none just for practice */	
		
		$('#main-nav a').click(function(e) {                  /* when the nav list is clicked             */
			$('a').css('background-color', '');					  /* remove border style from nav links       */
            var url = $(this).attr('href');                   /* capture the a href from the clicked li   */
		    var tar = $(this).attr('target');                 /* capture the a target from the clicked li */
			direct = $(this).attr('rel');
		    $(this).css('background-color', 'blue');			  /* put border on clicked link               */
		    $(this).css('font-weight', 'bold');		   		  /* keep it bold. not needed                 */
			if (direct == "s") {$('#content').css('display', 'block')};
			if (tar != "show") {					          /* it is content page load                  */
			  $('#content').load(url, function()              /* load it into the content div             */
			  {                                               
			  }) ;
			  e.preventDefault();                             /* stop the original page from loading      */
		    };
        });

		$('.showhide').live('click', function(){			  /* when slide down is clicked				  */
			direct = $(this).attr('rel');					  /* see if it is open/close or close only    */
			var pos = $(this).offset();
			var pos2 = $('#content').offset();
			if (direct == "o") {							  /* if above div click /open/close           */
				clicked = $(this).next('.slideDiv');}		  /* point to next element. The DIV           */
			else	
			   {clicked = $(this).parent();					  /* if inside div then point to parent       */
			   };
			var x = Math.floor(pos.top);					  /* get topof position clicked               */
			var y = Math.floor(pos2.top);					  /* get the top of the container div         */ 
			var theScroll = (x - y);						  /* claculate the difference to scroll up    */
			$(clicked).slideToggle(1500, function() {		  /* toggle for open/close					  */
			  $('#content').animate({scrollTop: theScroll}, 1000);   /* scroll up to be sure slide is visible  */
			});
	    });  
	 
	});