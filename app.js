var clock = document.getElementById('clock');
var color = document.getElementById('color');

function hexClock() {
	var tm = new Date();
	var h = tm.getHours().toString();
	var m = tm.getMinutes().toString();
	var s = tm.getSeconds().toString();
	if (h.length < 2) h = '0' + h;
	if (m.length < 2) m = '0' + m;
	if (s.length < 2) s = '0' + s;

	var clockString = h + ':' + m + ':' + s;
	var colorString = '#' + h + m + s;

	clock.textContent = clockString;
	color.textContent = colorString;

	document.body.style.background = colorString;

}
setInterval(hexClock, 1000);