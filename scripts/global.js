$(document).ready(function() {
	console.log("hello world");
	appear();
});
appear = () => {
	$(".tophalf").css("height", "80%");
	$(".phone").css("top", "10%");
}