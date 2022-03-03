/*const tutup = document.querySelector('.tutup');
const kartu = document.querySelector('.kartu');

tutup.addEventListener('click', function() {
	kartu.style.display = "none";
});*/

/*const tutup = document.querySelectorAll('.tutup');

tutup.forEach(function(el) {
	el.addEventListener('click', function(img) {
		img.target.parentElement.style.display = "none";
		//prevent default
		img.preventDefault();
		img.stopPropagation();
	});
});

	const cards = document.querySelectorAll('.kartu');
	cards.forEach(function(kartus) {
		kartus.addEventListener('click', function() {
			alert('ok');
		});
	});*/



//DOM traversal
/*const name = document.querySelector('.nama');
alert(name.nextElementSibling);*/

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
	if ( e.target.className == 'tutup' ) {
		//parentElement its a part of traversal
		e.target.parentElement.style.display = "none";
		//preventDefault method is used to prevent when the default action is running
		e.preventDefault();
	}
	if ( e.target.className == 'nama' ) {
		e.addEventListener('click', function(nama) {
			nama.parentElement.style.backgroundColor = "yellow";
		});
	}
});






































