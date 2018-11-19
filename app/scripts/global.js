$(document).ready(function() {

	floorplanCount = 6;

	$(".hamburger, .overlay").click(function() {
		hamburger();
	});

	drawFloorPlans(floorplanCount);
});
hamburger = () => {
	$(".overlay").fadeToggle();
	mySlideToggle($(".sidebar"));
}
mySlideToggle = (sidebar) => {
	sidebar.toggleClass("slideIn");
}

accordian = () => {

}
drawFloorPlans = (floors) => {
	html = "";
	for (i = 0; i < floors; i++) {
		html += `
		<div class="card">
			<div class="cardHeader">
				<p>
					Card Title
				</p>
			</div>
			<div class="cardLine"></div>
			<div class="cardBody">
				<p>
					Card Body
				</p>
			</div>
		</div>
		`;
	}
	$(".body").append(html);
}