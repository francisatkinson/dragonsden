$(document).ready(function() {
	$("body").click(function() {
		appear();
	});
	$(".phoneButton").click(function() {
		reset();
	});
});
appear = () => {
	$(".topHalf").css("height", "70vh");
	$(".phone").css("top", "5%");
}
reset = () => {
	setTimeout(function() {
		$("#phone").css("opacity", "0");
	}, 0);
	setTimeout(function() {
		$("#phone").attr("src", "app/home.html");
		$("#phone").css("opacity", "1");
	}, 250);
}