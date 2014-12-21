$( document ).ready(function() 
			{
				var url = location.hash;
				if(location.hash !== "")
				{
					var hashValue = url.substring(1);

					if(hashValue === 'robogames' || hashValue === 'wildsoccer' || hashValue === 'important' || hashValue === 'manual' || hashValue === 'iarc')
					{
						$('.dl-menu').addClass('dl-subview');
						$('.robogames').addClass('dl-subviewopen');
					}

					if(hashValue === 'business' || hashValue === 'battlefield' || hashValue === 'stocksim' || hashValue === 'ideas')
					{
						$('.dl-menu').addClass('dl-subview');
						$('.business').addClass('dl-subviewopen');
					}

					if(hashValue === 'ecdc' || hashValue === 'electromania' || hashValue === 'electrade' || hashValue === 'fpga' || hashValue === 'embedded')
					{
						$('.dl-menu').addClass('dl-subview');
						$('.ecdc').addClass('dl-subviewopen');
					}

					if(hashValue === 'design' || hashValue === 'tgp' || hashValue === 'concatenate' || hashValue === 'bdc' || hashValue === 'imp' || hashValue === 'scientoon')
					{
						$('.dl-menu').addClass('dl-subview');
						$('.design').addClass('dl-subviewopen');
					}


					if(hashValue === 'online' || hashValue === 'battlecity' || hashValue === 'iopc' || hashValue === 'ihpc' || hashValue === 'crypto' || hashValue === 'chaos')
					{
						$('.dl-menu').addClass('dl-subview');
						$('.online').addClass('dl-subviewopen');
					}

					if(hashValue === 'takeoff' || hashValue === 'skysparks' || hashValue === 'cruisecontrol' || hashValue === 'impulse' || hashValue === 'hoverush' || hashValue === 'multirover')
					{
						$('.dl-menu').addClass('dl-subview');
						$('.takeoff').addClass('dl-subviewopen');
					}

					if(hashValue === 'presentation' || hashValue === 'soccon' || hashValue === 'incredibleindia')
					{
						$('.dl-menu').addClass('dl-subview');
						$('.presentation').addClass('dl-subviewopen');
					}

					if(hashValue === 'mixedbowl' || hashValue === 'cosmos' || hashValue === 'whatsup' || hashValue === 'astrotreasure' || hashValue === 'astro' || hashValue === 'iorc' || hashValue === 'scimatex' || hashValue === 'brainwaves' || hashValue === 'mbquiz')
					{
						$('.dl-menu').addClass('dl-subview');
						$('.mixedbowl').addClass('dl-subviewopen');
					}

					goTo( hashValue );
					
				}
			});

			(function($){
		        $(window).load(function(){
		            $(".tab-content").mCustomScrollbar({
				        theme:"dark-3",
				        scrollButtons:{
				          enable:true
				        }
				      });
		        });
		    })(jQuery);

		    jQuery(document).ready(function() 
		    {
			    jQuery('.tabs .tab-links a').on('click', function(e)  
			    {
			        var currentAttrValue = jQuery(this).attr('href');
			 
			        // Show/Hide Tabs
			        //jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

			        // Show/Hide Tabs
					jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
			 
			        // Change/remove current tab to active
			        jQuery(this).parent('li').addClass('activetab').siblings().removeClass('activetab');
			 
			        e.preventDefault();
			    });
			});	


		    var currentIndex = 0;
			var currentId = "competitions";
			// $(document).ready(function() {
			// 	$("#nav").ferroMenu({
			// 		position 	: "right-center",
			// 		delay 		: 50,
			// 		rotation 	: 720,
			// 		margin		: 20
			// 	});
			// });
			
			var colors = {
					"competitions" : {
						"background" : "#1B3647",
						"index" : 0
					},
					"robogames" : {
						"background" : "#1B3647",
						"index" : 1
					},
					"ecdc" : {
						"background" : "#1B3647",
						"index" : 2
					},
					"online" : {
						"background" : "#1B3647",
						"index" : 3
					},
					"wildsoccer" : {
						"background" : "#1B3647",
						"index" : 4
					},
					"important" : {
						"background" : "#152836",
						"index" : 5
					},
					"manual" : {
						"background" : "#152836",
						"index" : 6
					},
					"iarc" : {
						"background" : "#152836",
						"index" : 7
					},
					"electromania" : {
						"background" : "#152836",
						"index" : 8
					},
					"electrade" : {
						"background" : "#152836",
						"index" : 9
					},
					"fpga" : {
						"background" : "#152836",
						"index" : 10
					},
					"embedded" : {
						"background" : "#152836",
						"index" : 11
					},
					"presentation" : {
						"background" : "#152836",
						"index" : 12
					},
					"battlecity" : {
						"background" : "#152836",
						"index" : 13
					},
					"iopc" : {
						"background" : "#152836",
						"index" : 14
					},
					"ihpc" : {
						"background" : "#152836",
						"index" : 15
					},
					"stocksim" : {
						"background" : "#152836",
						"index" : 16
					},
					"crypto" : {
						"background" : "#152836",
						"index" : 17
					},
					"chaos" : {
						"background" : "#152836",
						"index" : 18
					},
					"soccon" : {
						"background" : "#152836",
						"index" : 19
					},
					"incredibleindia" : {
						"background" : "#152836",
						"index" : 20
					},
					"design" : {
						"background" : "#152836",
						"index" : 21
					},
					"tgp" : {
						"background" : "#152836",
						"index" : 22
					},
					"concatenate" : {
						"background" : "#152836",
						"index" : 23
					},
					"bdc" : {
						"background" : "#152836",
						"index" : 24
					},
					"imp" : {
						"background" : "#152836",
						"index" : 25
					},
					"scientoon" : {
						"background" : "#152836",
						"index" : 26
					},
					"mixedbowl" : {
						"background" : "#152836",
						"index" : 27
					},
					"takeoff" : {
						"background" : "#152836",
						"index" : 28
					},
					"skysparks" : {
						"background" : "#152836",
						"index" : 29
					},
					"ccontrol" : {
						"background" : "#152836",
						"index" : 30
					},
					"impulse" : {
						"background" : "#152836",
						"index" : 31
					},
					"hoverush" : {
						"background" : "#152836",
						"index" : 32
					},
					"multirover" : {
						"background" : "#152836",
						"index" : 33
					},
					"cosmos" : {
						"background" : "#152836",
						"index" : 34
					},
					"whatsup" : {
						"background" : "#152836",
						"index" : 35
					},
					"astro" : {
						"background" : "#152836",
						"index" : 36
					},
					"astrotreasure" : {
						"background" : "#152836",
						"index" : 37
					},
					"iorc" : {
						"background" : "#152836",
						"index" : 38
					},
					"scimatex" : {
						"background" : "#152836",
						"index" : 39
					},
					"brainwaves" : {
						"background" : "#152836",
						"index" : 40
					},
					"mbquiz" : {
						"background" : "#152836",
						"index" : 41
					},
					"business" : {
						"background" : "#152836",
						"index" : 42
					},
					"ideas" : {
						"background" : "#152836",
						"index" : 47
					},
					"vishleshan" : {
						"background" : "#152836",
						"index" : 48
					},
					"kartavya" : {
						"background" : "#152836",
						"index" : 49
					},
					"tycoon" : {
						"background" : "#152836",
						"index" : 50
					},
					"marketingvilla" : {
						"background" : "#152836",
						"index" : 51
					},
					"zonals" : {
						"background" : "#152836",
						"index" : 52
					},
					"business_nationls" : {
						"background" : "#152836",
						"index" : 53
					},
					"embedded_nationals" : {
						"background" : "#152836",
						"index" : 54
					},
					"iarc_nationals" : {
						"background" : "#152836",
						"index" : 55
					},
					"impulse_nationals" : {
						"background" : "#152836",
						"index" : 56
					},
					"manual_nationals" : {
						"background" : "#152836",
						"index" : 57
					},
					"marketing_nationals" : {
						"background" : "#152836",
						"index" : 58
					},
					"rubik_nationals" : {
						"background" : "#152836",
						"index" : 59
					},
					"crimerun" : {
						"background" : "#152836",
						"index" : 60
					},
					"ipdc" : {
						"background" : "#152836",
						"index" : 61
					},
					"busonline" : {
						"background" : "#152836",
						"index" : 62
					},
					"objectified" : {
						"background" : "#152836",
						"index" : 63
					},
					"aisrc" : {
						"background" : "#152836",
						"index" : 64
					}
			};
			
			function goTo(id){

				var obj = eval("colors."+id);
				// location.hash = id;
				history.pushState(null, null, "#" + id);

				window.scrollTo(0,0);
				
				if(obj.index > currentIndex){
					$(".active").addClass("off");
					$(".active").transition({
						x : -50,
						opacity : 0,
						zIndex : 0
					},600);
					
					$("#"+currentId).removeClass("active");
					
					$("#"+id).addClass("active");
					$("#"+id).transition({
						x : 200
					},0,function(){
						$("#"+id).removeClass("off");
						$("#"+id).transition({
							x : 0,
							opacity : 1,
							zIndex : 2
						},600);
					});
				}else if(obj.index < currentIndex){
					$(".active").addClass("off");
					$(".active").transition({
						x : 200,
						opacity : 0,
						zIndex : 0
					},600);
					$("#"+currentId).removeClass("active");
					
					
					$("#"+id).addClass("active");
					$("#"+id).transition({
						x : -50
					},0,function(){
						$("#"+id).removeClass("off");
						$("#"+id).transition({
							x : 0,
							opacity : 1,
							zIndex : 2
						},600);
					});
				}
				currentIndex = obj.index;
				currentId = id;
			}

			var content = ["<i class='icon-trophy'></i>","<i class='icon-gear'></i>","<i class='icon-power'></i>","<i class='icon-inbox'></i>","<i class='icon-upload'></i>","<i class='icon-refresh'></i>","<i class='icon-lock'></i>","<i class='icon-flag'></i>","<i class='icon-headphones'></i>"];
			var i = 5;
			var x = 0;
			setInterval(function() {
			    $('.circle').css({
			  "-webkit-transform": "rotate("+x+"deg)",
			  "-moz-transform": "rotate("+x+"deg)",
			  "-ms-transform": "rotate("+x+"deg)",
			  "-o-transform": "rotate("+x+"deg)",
			  "transform": "rotate("+x+"deg)",
			});
			    x += 90;
			    var angle = x%360;
			    if(angle < 0){ angle +=360};
			    var quadrant = (angle/90)%4 + 1 ;
			    $('#'+quadrant).html(content[i]);
			    i++;
			    if(i>9) i %=9;
			}, 3000);