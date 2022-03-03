/*let sepeda = ['polygon', 'phoenix', 'everest'];
let sepedaMotor = ['Yamaha', 'honda', 'suzuki', 'toyota'];

let siswa = {
	nama: 'maulana',
	kelas: 11
};
let siswa1 = {
	nama: 'fatih',
	kelas: 11
};

let gabungArraySepeda = [sepeda, sepedaMotor];
let gabungObjek = {siswa, siswa1};
console.log(...gabungArraySepeda);

let liPeserta = document.querySelector('li');
let peserta = [];
peserta.forEach( i => peserta.push(liPeserta[i].textContent));
console.log(peserta);
let peserta = [...liPeserta].map(mp => mp.textContent);*/

let judul = document.querySelector('.judul');
judul.addEventListener('click', () => {
	prompt('siapa penemu listrik?');
	alert('salah!');
});

let judul1 = document.querySelector('.judul1');
judul1.addEventListener('click', () => {
	alert('ok!');
});

let judul2 = document.querySelector('.judul2');
let judulSpread = [...judul.textContent].map(mp => `<span>${mp}</span>`)
.join('');
let judulSpread1 = [...judul1.textContent].map(mp => `<span>${mp}</span>`)
.join('');
let judulSpread2 = [...judul2.textContent].map(mp => `<span>${mp}</span>`)
.join('');
judul.innerHTML = judulSpread;
judul1.innerHTML = judulSpread1;
judul2.innerHTML = judulSpread2;

