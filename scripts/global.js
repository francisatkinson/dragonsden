$(document).ready(function() {
	console.log("hello world");
	appear();
});
appear = () => {
	$(".topHalf").css("height", "70vh");
	$(".phone").css("top", "10%");
}