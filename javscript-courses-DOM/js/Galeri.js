const container = document.querySelector('.container');
const besar = document.querySelector('.gede');
const jari = document.querySelectorAll('.jari');

container.addEventListener('click', function(e) {
	if ( e.target.className == 'jari' ) {
		besar.src = e.target.src;
		besar.classList.add('anims');
		 setTimeout(function() {
			 besar.classList.remove('anims');
		 }, 500);
		 
		 jari.forEach(function(thumb) {
			 thumb.className = 'jari';
		 });
		 
		 e.target.classList.add('klik');
	}
});