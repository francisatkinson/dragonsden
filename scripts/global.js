$(document).ready(function() {
	appear();
	$(".phoneButton").click(function() {
		reset();
	});
});
appear = () => {
	$(".topHalf").css("height", "70vh");
	$(".phone").css("top", "10%");
}
reset = () => {
	setTimeout(function() {
		$("#phone").css("opacity", "0");
	}, 0);
	setTimeout(function() {
		$("#phone").attr("src", "app/index.html");
		$("#phone").css("opacity", "1");
	}, 250);
}