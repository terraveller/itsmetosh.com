$("header nav a").on( "click", function(e) { 
	// if($(this).closest("div").hasClass("active"))
	// {
	// 	$(this).closest("div").removeClass("active");	
	// }
	// else{ 
	// 	$(this).closest("div").addClass("active");
	// }
	$(this).closest("div").addClass('active').siblings().removeClass('active');
	$(this).closest("body").addClass("is-transitioned");
	$(this).closest("header").addClass("aside");
	var contentPanelId = jQuery(this).attr("href"); 
	console.log(contentPanelId);
	$(contentPanelId).show();
	$(contentPanelId).siblings().hide();
});

$(".max-screen a").on("click", function(e){
	 
	// $(this).closest("body").find("nav").children("div").removeClass("active");
	$("header nav").find(".active").removeClass("active");
	console.log("closed");
	$(this).closest("body").removeClass("is-transitioned");	
	$(this).closest("body").find("header").removeClass("aside");	
	});


$(".list").on("click", function(e){
	$(this).closest("#landing").addClass("open-list");
	var contentPanelId = jQuery(this).attr("href");
	$(".project-list").slideDown();
	$(contentPanelId).slideDown();
	$(contentPanelId).siblings("ul").hide();
});
$(".close-landing a").on("click", function(e){
	// $(this).closest(".project-list").slideUp();
	$(this).closest(".project-list").slideUp();
	$(this).closest("#landing").removeClass("open-list");
});


// var userFeed = new Instafeed({
//         get: 'user',
//         userId: '1190070226',
//         accessToken: '1190070226.1677ed0.44b8948e53fb4ac990d0645641a80352',
//          template: '<a href="{{link}}"><img src="{{image}}" /></a>',
//          resolution : 'low_resolution'
//     });
//     userFeed.run();

//       var loadButton = document.getElementById('load-more');
//     var feed = new Instafeed({
//         // every time we load more, run this function
//         after: function() {
//             // disable button if no more results to load
//             if (!this.hasNext()) {
//                 loadButton.setAttribute('disabled', 'disabled');
//             }
//         },
//     });

//     // bind the load more button
//     loadButton.addEventListener('click', function() {
//         feed.next();
//     });

//     // run our feed!
//     feed.run();