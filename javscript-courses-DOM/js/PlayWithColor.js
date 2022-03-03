

const Smerah = document.querySelector('input[name=sMerah]');

Smerah.addEventListener('input', function() {
	const r = Smerah.value;
	const g = Shijau.value;
	const b = Sbiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

const Shijau = document.querySelector('input[name=sHijau]');

Shijau.addEventListener('input', function() {
	const r = Smerah.value;
	const g = Shijau.value;
	const b = Sbiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

const Sbiru = document.querySelector('input[name=sBiru]');

Sbiru.addEventListener('input', function() {
	const r = Smerah.value;
	const g = Shijau.value;
	const b = Sbiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

document.body.addEventListener('mousemove', function(event) {
	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
	console.log(xPos);
	const yPos = Math.round((event.clientY / window.innerHeight) * 255);
	console.log(xPos);
	document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 200)';
});




















