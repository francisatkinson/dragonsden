$(document).ready(function() {
	let slideCount = 0;
	$(".hamburger, .overlay").click(function() {
		hamburger();
	});
});
hamburger = () => {
	$(".overlay").fadeToggle();
	mySlideToggle($(".sidebar"));
}
mySlideToggle = (sidebar) => {
	sidebar.toggleClass("slideIn");
}