let teks = document.querySelector('.click');
teks.addEventListener('click', () => {
	setTimeout(() => {
		teks.innerHTML = `
			<button class="button">muncul setelah kamu klik teks itu</button>
		`;
	}, 1000);
});

let tombol = document.querySelector('.tombol');
tombol.addEventListener('click', () => {
	tombol.innerHTML = `
		<input type="email" name="email" placeholder="type your email here...">
		<input type="submit" name="konfirmasi">
	`;
});