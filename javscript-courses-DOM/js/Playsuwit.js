function pilihanComp() {
	comp = Math.random();

	if (comp < 0.3) return 'gajah';
	if (comp >= 0.3 && comp < 0.67) return 'orang';
	else return 'semut';
	
}

function rulePlay(comp, p) {
	//menentukan aturan
	if(p == comp) return " SERI";
	if (p == "gajah") return (comp == "orang") ? " MENANG" : " KALAH";
	if (p == "orang") return (comp == "gajah") ? " KALAH" : " MENANG";
	if (p == "semut") return (comp == "orang") ? " KALAH" : " MENANG";
}

function putarPilihan() {
	const imgComp = document.querySelector('.img-computer');
	const gambar = ['gajah','orang','semut'];
	let i = 0;
	const awalMula = new Date().getTime();
	setInterval(function() {
		if ( new Date().getTime() - awalMula > 1000 ) {
			clearInterval;
			return;
		}
		imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if ( i == gambar.length ) i = 0;
		
	}, 100);
}

const pilihanPemain = document.querySelectorAll('li img');
pilihanPemain.forEach(function(pil) {
	pil.addEventListener('click', function() {
		const pilihanComp1 = pilihanComp();
		const pilih = pil.className;
		const hasil = rulePlay(pilihanComp1, pilih);
		
		putarPilihan();
		
		setTimeout(function() {
			const gambarComp = document.querySelector('.img-computer');
			gambarComp.setAttribute('src', 'img/' + pilihanComp1 + '.png');
			
			const info = document.querySelector('.info');
			
			info.innerHTML = hasil;
		}, 1000);
	});
});


const linkBalik = document.querySelector('.link');
linkBalik.style.textDecoration = "none";
linkBalik.href = "dom.html";
linkBalik.align = "center";
linkBalik.style.color = "black";




