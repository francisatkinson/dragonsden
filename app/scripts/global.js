$(document).ready(function() {

	const floorplanCount = 6;
	const features = [
		"Home",
		"Floorplans",
		"Video Tours",
		"Eat@Urban",
		"Nearby"
	];

	$(".hamburger, .overlay").click(function() {
		hamburger();
	});

	$(".floorIndicator").click(function() {
		$(".overlay").fadeToggle();
	});

	counter = 0;

	// drawFloorPlans(floorplanCount);
	// drawMainMenu(features);
	drawSidebar(features);
	// $(".sidebar2").click(function() {
	// 	hamburger();
	// 	DrawVideo(features);
	// });
	// $(".sidebar3").click(function() {
	// 	hamburger();
	// 	drawEvents(features);
	// });
	// $(".sidebar4").click(function() {
	// 	hamburger();
	// 	drawNearby(features);
	// });

	let zoomed = false;

	$(".selector").click(function() {
		$(".selector").removeClass("selectorActive");
		let clickedFloor = $(this).attr("class").substr($(this).attr("class").length -1);
		console.log(`selector${clickedFloor}`);
		$(".floorplanImage").css("background-image", `url("img/floorplans/floor${clickedFloor}.png")`);
		$(`.selector${clickedFloor}`).addClass("selectorActive");
		removeZoom($(".floorplanImage"));
	});
	$(".floorplanImage").click(function() {
		if (zoomed == false) {
			let zoom = Math.floor(Math.random() * 3) + 1;
			console.log(zoom);
			$(this).addClass(`imageZoom${zoom}`);
			zoomed = true;
		}
		else {
			removeZoom($(this));
			zoomed = false;
		}
		console.log(zoomed);
	});
	$(".selector").click(function() {
		return false;
	});
});

removeZoom = (element) => {
	$(element).removeClass("imageZoom1");
	$(element).removeClass("imageZoom2");
	$(element).removeClass("imageZoom3");
}

hamburger = () => {
	$(".overlay").fadeToggle();
	$(".sidebar").toggleClass("slideIn");
}

accordian = () => {

}
drawMainMenu = (features) => {

	let html = "";

	for (i = 0; i < features.length; i++) {
		html += `
			<div class="card">
				<div class="cardHeader headOnly featureCard">
					<div class="icon floorIndicator">
						<img src="img/icons/${features[i]}.png"/>
					</div>
					<p class="cardTitle featureTitle">
						${features[i]}
					</p>
					<div class="arrow">
						<img src="img/arrow.png"/>
					</div>
				</div>
			</div>
		`
	}
	$(".body").empty();
	$(".body").append(html);
	$(".title").text("Home");
	$(".sidebarItem").removeClass("active");
	$(".sidebar0").addClass("active");
}


drawSidebar = (items) => {

	let html = "";

	for (i = 0; i < items.length; i++) {
		html += `
			<a href="${items[i]}.html">
				<div class="sidebarItem sidebar${i + 1}">
					<img src="img/icons/${items[i]}.png" />
					<p>${items[i]}</p>
				</div>
			</a>
		`
	}

	$(".sidebar").append(html);
}


drawFloorPlans = (floors) => {

	const floorNames = [
	"First",
	"Second",
	"Third",
	"Fourth",
	"Fifth",
	"Sixth"
	];

	let html = "";
	for (i = 1; i <= floors; i++) {
		html += `
		<div class="card">
			<div class="cardHeader">
				<div class="floorIndicator" id="floorIndicator${i}">
					<p>${i}</p>
				</div>
				<p class="floorTitle" id="floor${i}Title">
					${floorNames[i - 1]} Floor
				</p>
			</div>			
		</div>
		`;
	}
	// <div class="cardBody">
	// 	<img class="floorplan" src="img/floorplans/floor${i}.png" />
	// </div>
	$(".body").empty();
	$(".body").append(html);
	$(".title").text("Floorplans");
	$(".sidebarItem").removeClass("active");
	$(".sidebar1").addClass("active");
}

// drawVideo = (videos) => {

// 	let html = "";
// 	for (i = 1; i <= videos; i++) {
// 		html += `
// 		<div class="card">
// 			<div class="cardHeader">
// 				<div class="floorIndicator" id="floorIndicator${i}">
// 					<p>${i}</p>
// 				</div>
// 				<p class="floorTitle" id="floor${i}Title">
// 					${floorNames[i - 1]} Floor
// 				</p>
// 			</div>

// 			<div class="cardLine"></div>

// 			<div class="cardBody">
// 				<img class="floorplan" src="img/floorplans/floor${i}.png" />
// 			</div>
// 		</div>
// 		`;
// 	}
// 	$(".body").empty();
// 	$(".body").append(html);
// 	$(".title").text("Floorplans");
// 	$(".sidebarItem").removeClass("active");
// 	$(".sidebar1").addClass("active");
// }

// $(document).ready(function() {
// 	$(".cardHalf").click(function() {
		
// 	});
// });