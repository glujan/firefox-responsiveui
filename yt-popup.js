javascript:(function() {
	if (document.location.host !== "www.youtube.com") {
		alert("This is not a YouTube page!");
		return;
	}
	var baseUrl = document.location.href.split("watch?"),
		videoId = baseUrl[1].split("&").find(function(e) {return e.substring(0, 2) === "v=";}).substring(2),
		url = baseUrl[0] + "embed/" + videoId,
		options = [
			"chrome",
			"width=" + screen.width / 2,
			"height=" + screen.height / 2
		].join(',');

	window.open(url, "", options);
})()
