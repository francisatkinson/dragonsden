$(document).ready(function() {

	const floorplanCount = 6;
	const features = [
		"Floorplans",
		"Video Tour",
		"Events",
		"Nearby"
	];

	$(".hamburger, .overlay").click(function() {
		hamburger();
	});

	// drawFloorPlans(floorplanCount);
	drawMainMenu(features);
	drawSidebar(features);

	$(".featureCard").click(function() {
		drawFloorPlans(floorplanCount);
	});
	$(".sidebar0").click(function() {
		hamburger();
		drawMainMenu(features);
	});
	$(".sidebar1").click(function() {
		hamburger();
		drawFloorPlans(features);
	});
});

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
					<div class="icon">
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
			<div class="sidebarItem sidebar${i + 1}">
				<img src="img/icons/${items[i]}.png" />
				<p>${items[i]}</p>
			</div>
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

			<div class="cardLine"></div>

			<div class="cardBody">
				<img class="floorplan" src="img/floorplans/floor${i}.png" />
			</div>
		</div>
		`;
	}
	$(".body").empty();
	$(".body").append(html);
	$(".title").text("Floorplans");
	$(".sidebarItem").removeClass("active");
	$(".sidebar1").addClass("active");
}