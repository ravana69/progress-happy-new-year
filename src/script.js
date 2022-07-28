//Happy 2020! 🎉

///////////////////////////
//Defaults and Vars
let def_with = 80;
let exp = true;
let dm;
let set_btn = document.getElementById("settings");
let dm_btn = document.getElementById("dm");
let root = document.documentElement;

///////////////////////////
//Main Interval
setInterval(() => {
	//Set start of year
	let d = new Date();
	d.setMonth(0);
	d.setDate(1);
	d.setHours(0);
	d.setMinutes(0);
	d.setSeconds(0);

	//calculate seconds since start of Year
	let now = new Date();
	let elapsedY = now - d;
	//calculate percentage for year
	let spy = secondsPerYear(now.getFullYear());
	let yperc = elapsedY / 1000 / spy;
	yperc = Math.round(yperc * 10000000) / 100000;
	ypp.innerHTML = yperc + "%";
	ybar.style.width = def_with * yperc / 100 + "vw";

	//calculate percentage for month
	let startOfMonth = new Date();
	startOfMonth.setDate(1);
	startOfMonth.setHours(0);
	startOfMonth.setMinutes(0);
	startOfMonth.setSeconds(0);
	startOfMonth.setMilliseconds(0);
	let elapsedM = now - startOfMonth;
	let spm = secondsPerMonth(now.getFullYear(), now.getMonth() + 1);
	let mperc = elapsedM / 1000 / spm;
	mperc = Math.round(mperc * 1000000) / 10000;
	mpp.innerHTML = mperc + "%";
	mbar.style.width = def_with * mperc / 100 + "vw";

	//calculate percentage for day
	let startOfDay = new Date();
	startOfDay.setHours(0);
	startOfDay.setMinutes(0);
	startOfDay.setSeconds(0);
	startOfDay.setMilliseconds(0);
	let elapsedD = now - startOfDay;
	let dperc = elapsedD / 1000 / 86400;
	dperc = Math.round(dperc * 100000) / 1000;
	dpp.innerHTML = dperc + "%";
	dbar.style.width = def_with * dperc / 100 + "vw";

	//calculate percentage for hour
	let startOfHour = new Date();
	startOfHour.setMinutes(0);
	startOfHour.setSeconds(0);
	startOfHour.setMilliseconds(0);
	let elapsedH = now - startOfHour;
	let hperc = elapsedH / 1000 / 3600;
	hperc = Math.round(hperc * 10000) / 100;
	hpp.innerHTML = hperc + "%";
	hbar.style.width = def_with * hperc / 100 + "vw";

	//calculate percentage for minute
	let startOfMinute = new Date();
	startOfMinute.setSeconds(0);
	startOfMinute.setMilliseconds(0);
	let elapsedMi = now - startOfMinute;
	let miperc = elapsedMi / 1000 / 60;
	miperc = Math.round(miperc * 1000) / 10;
	mipp.innerHTML = miperc + "%";
	mibar.style.width = def_with * miperc / 100 + "vw";
}, 1000);

///////////////////////////
//Settings
set_btn.addEventListener("click", e => {
	if (exp) {
		set_btn.style.right = "1vh";
		set_btn.style.color = "var(--dark)";
		abt.style.left = "120vw";
		abt.style.top = "-100vh";
		exp = false;
	} else {
		set_btn.style.right = "30vh";
		set_btn.style.color = "var(--bright)";
		abt.style.left = "calc(100vw - 40vh)";
		abt.style.top = "-40vh";
		exp = true;
	}
});

///////////////////////////
//Darkmode
if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	root.style.setProperty("--bright", "#000");
	root.style.setProperty("--dark", "#fff");
	dm_btn.innerHTML = "🌖";
	dm = false;
} else {
	root.style.setProperty("--bright", "#fff");
	root.style.setProperty("--dark", "#000");
	dm_btn.innerHTML = "🌘";
	dm = true;
}

dm_btn.addEventListener("click", e => {
	if (dm) {
		root.style.setProperty("--bright", "#000");
		root.style.setProperty("--dark", "#fff");
		dm_btn.innerHTML = "🌖";
		dm = false;
	} else {
		root.style.setProperty("--bright", "#fff");
		root.style.setProperty("--dark", "#000");
		dm_btn.innerHTML = "🌘";
		dm = true;
	}
});

///////////////////////////
//Helper Functions
function secondsPerYear(year) {
	if (leapYear(year)) {
		return 31622400;
	} else {
		return 31536000;
	}
}

function leapYear(year) {
	return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

function secondsPerMonth(y, m) {
	let spm = new Date(y, m, 0).getDate() * 24 * 3600;
	return spm;
}
