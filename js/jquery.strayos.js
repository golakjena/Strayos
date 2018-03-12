;(function($){
	function mobileMenu(){
		$(".menu-button").on("click", function(){
			$(this).toggleClass("menuClose");
			$(".navigation").toggleClass("navOpen");
			$("html, body").toggleClass("hiddenView");
		});
	}
	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			var display = $(".topNav").css("display");
			if(display == "none"){
				$(this).addClass("navClose");
				$(".topNav").stop(true, true).fadeIn(300);
				$("html, body").css({
					overflow:"hidden"
				});
			}
			else{
				$(this).removeClass("navClose");
				$(".topNav").stop(true, true).fadeOut(300);
				$("html, body").css({
					overflow:"visible"
				});
			}
		});
	}

	function leftNav(){
		$(".btnNavigate").each(function(){
			$(this).on("click", function(){
				if($(this).next("ul").length > 0){
					$(this).toggleClass("on");
					$(this).next("ul").stop(true, true).slideToggle(300);
				}
			});
		});
	}

	//Siteinfo
	function siteInfo(){
		$(".siteInfo").each(function(){
			$(this).on("click", function(){
				$(this).find(".siteDetails").fadeIn(300);
			});
		});
		$(document).mouseup(function(e) {
			var container = $(".siteDetails");
			if(!container.is(e.target) && container.has(e.target).length === 0){
				container.hide();
			}
		});
	}

	//Show hide ExportMeasurement
	function showhideExportMeasurement(){
		$(".txtMeasurement").on("click", function(){
			$(".exportMeasurement").fadeToggle(300);
			return false;
		});
		$(".exportMeasurement").on("click", function(){
			$(".dvExportMeasurement").fadeIn(300);
			$(this).fadeOut(300);
			return false;
		});
		$(".btnCloseExport").on("click", function(){
			$(".dvExportMeasurement").fadeOut(300);
			return false;
		});
	}

	function siteDropdown(){
		$(".siteDropdown").each(function(){
			$(this).on("click", function(){
				$(this).next(".dropdownList").fadeIn(300);
			});
		});
		$(document).mouseup(function(e) {
			var container = $(".dropdownList");
			if(!container.is(e.target) && container.has(e.target).length === 0){
				container.hide();
			}
		});
	}

	function showhideLeftPanel(){
		$(".btnCollapse").on("click", function(){
			var panel = $(this).attr("data-panel");
			var panelClass = $(this).attr("data-panelClass");
			$(this).toggleClass("off");
			$("."+panel).toggleClass(panelClass);
		});
	}

	function userAccount(){
		$(".user").on("click", function(){
			var display = $(".userAccount").css("display");
			if(display == "none"){
				$(".userAccount").fadeIn(300);	
			}
			else{
				$(".userAccount").fadeOut(300);	
			}
			
		});
		$(document).mouseup(function(e) {
			var container = $(".userAccount");
			if(!$(e.target).is('.user') && container.has(e.target).length === 0) {
				container.hide();
			}
		});
	}

	function downloadProject(){
		$(".btnDownload").on("click", function(){
			$(".downloadProjectFiles").slideDown(300);
		});
		$(".closeDownload").on("click", function(){
			$(".downloadProjectFiles").slideUp(300);
			return false;
		});
	}

	function tabs(){
		$(".btnTab").eq(0).addClass("activeTab");
		$(".tabContent").eq(0).slideDown(300);
		$(".btnTab").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("href");
				$(".activeTab").removeClass("activeTab");
				$(this).addClass("activeTab");
				$(".tabContent").slideUp(300);
				$(target).slideDown(300);
				return false;
			});
		});
	}

	function closePopup(){
		$(".closePop").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("data-target");
				$(target).fadeOut(300);
				return false;
			});
		});
	}
	function openPopup(){
		$(".openPop").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("data-open");
				$(target).fadeToggle(300);
				return false;
			});
		});
		$("#settings").on("click", function(){
			$(".accountSettings").fadeIn(300);
		});
	}
	function openPopup2(){
		$(".openPop2").each(function(){
			$(this).on("click", function(e){
				var target = $(this).attr("data-open");
				var elmHeight = $(this).outerHeight(),
					elmWidth = $(this).outerWidth(),
					posX = Math.round($(this).offset().left),
					posY = Math.round($(this).offset().top);

				$(target).css({
					left:posX + elmWidth,
					top: posY - elmHeight
				});
				
				$(target).fadeToggle(300);
				return false;
			});
		});
	}

	function timeline(){
		$(".btnTimeline").on("click", function(){
			$(this).toggleClass("closeTimeline");
			$(".btnTimelineOuter").toggleClass("closeTimeline");
			$(".TLOuter").toggleClass("off");
		});

		$(".btnCheckbox").each(function(){
			$(this).on("change", function(){
				var source = $(this).closest(".bxTL").attr("data-source");

				if($(this).is(':checked')){
					$(this).closest(".bxTL").addClass("activeDate");
					$("#"+source).slideDown();
				}
				else{
					$(this).closest(".bxTL").removeClass("activeDate");
					$("#"+source).slideUp();
				}	
			});
		});

		$(".imgTimeline").each(function(){
			$(this).on("click", function(){

				var source = $(this).closest(".bxTL").attr("data-source");

				var checkBoxes = $(this).closest(".bxTL").find("input[type=checkbox]");
				$(this).closest(".bxTL").toggleClass("activeDate");
				checkBoxes.prop("checked", !checkBoxes.prop("checked"));

				if(checkBoxes.is(':checked')){
					$("#"+source).slideDown();
				}
				else{
					$("#"+source).slideUp();
				}

			});
		});
	}

	function switchBttn(){
		$(".switchBtn").each(function(){
			$(this).on("change", function(){
				if($(this).attr("data-target")){
					var obj = $(this).attr("data-target");	
					if($(this).is(':checked')){
						$(obj).slideDown(300);
					}
					else{
						$(obj).slideUp(300);
					}
				}	
			});
		});
	}

	function expandMap(){
		$(".btnExpandMap").each(function(){
			$(this).on("click", function(){
				$(this).toggleClass("collapseMap");
				var target = $(this).attr("data-target");
				$(this).closest(".dvVolume").toggleClass("expand");
				//$("#"+target).find(".layerRowRight").toggleClass("showhide");
				$(this).closest(".dvVolume").find(".layerRowRight").toggleClass("showhide");
				$(this).closest(".layerRow").toggleClass("expand");
			});
		});
	}

	function dropdown(){
		$(".dropdownBtn").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("data-toggle");
				$(target).slideToggle(300);
				return false;
			});
		});
	}

	function shotPlanTab(){
		$(".tabLink").each(function(){
			$(this).on("click", function(){
				var target = $(this).attr("href");
				$(this).closest(".holeTabs").find(".activeTab").removeClass("activeTab");
				$(this).addClass("activeTab");
				$(this).closest(".tabBox").find(".tabCont").slideUp(300);
				$(target).slideDown(300);
				return false;
			});
		});
	}

	function detectBrowser(){
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
			$(".dvLeft, .contentLeft, .annotationLeftPanel, .dvShotPlan").css({
				"overflow-y":"auto"
			});
			$(".createSite, .dvRunshotBtn").css({
				'position': 'relative'
			});
		}
	}

	$(function(){
		mobileMenu();
		mobileNav();
		leftNav();
		siteInfo();
		showhideExportMeasurement();
		siteDropdown();
		showhideLeftPanel();
		userAccount();
		downloadProject();
		tabs();
		closePopup();
		timeline();
		switchBttn();
		expandMap();
		openPopup();
		dropdown();
		openPopup2();
		shotPlanTab();
		detectBrowser();
	});

})(jQuery);




