$(document).ready(function(){

	$(".searchToggle").on("click", function(event) {
		$(".formContainer").toggleClass("open",300);
	})

	$(".toggleMenu").on("click", function(event){
		var me = $( this );
		me.toggleClass("glyphicon-menu-hamburger", 200);
		me.toggleClass("glyphicon-remove", 200);
		$(".offCanvas").toggleClass("out");

		// if(this).hasClass("glyphicon-menu-hamburger"){
		// 	this.removeClass("glyphicon-menu-hamburger").addClass("glyphicon-remove");
		// }
		// if(this).hasClass("glyphicon-remove"){
		// 	this.removeClass("glyphicon-remove").addClass("glyphicon-menu-hamburger");
		// }
	})

	// $(".dropdown-menu.bottomSpace li a").on("click", function(event) {
	// 	var selectedLink = $(this);
	// 	if(!selectedLink.hasClass("noLink") {
	// 		//remove active and noLink classes from others
	// 		$(".dropdown-menu.bottomSpace li a").removeClass("noLink");
	// 		$(".dropdown-menu.bottomSpace li").removeClass("active");

	// 		//add active and noLink classes to current selected

	// 		selectedLink.addClass("noLink").parent().addClass("active");
	// 		$objCaret = $('<span>').attr("class","fa fa-caret-down");
	// 		$("#dropdownMenu1").html(selectedLink.text()).append($objCaret);
	// 		$("#dropdownMenu1").parent().removeClass("open");
	// 	}
	// })
	
});
