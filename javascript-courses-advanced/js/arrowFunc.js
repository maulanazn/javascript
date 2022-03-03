//function expression
/*const tampilanWindow = function(nama) {
	return `Halo ${nama}`;
}
console.log(tampilanWindow('maulana'));*/

//arrow function without implisit concept
/*let ucapSalam = (nama, waktu) => {return `selamat ${waktu}, ${nama}`}
console.log(ucapSalam('siang', 'maulana'));*/

//implisit return, kalau parameternya lebih dari satu maka wajib  memakai tanda kurung
//atau bracket, dan tidak perlu memakai kurung kurawal lagi untuk membungkus output
/*const windowUp = waktu => `Halo, adinda!, selamat ${waktu}, semoga harimu menyenangkan`;
console.log(windowUp('pagi'));*/


/*let peopleInOrg = ['maulana', 'adinda', 'dimas', 'fatih', 'fajar'];
let In = peopleInOrg.map{nama => nama.length};
console.log(In);*/

//mapping atau pemetakan array, dan jika ingin sebuah array
//yang nantinya akan diubah menjadi objek maka gunakan '()', sebelum tanda kurung kurawal
//dan implementasi objek, jika namanya sama, maka tidak perlu ditulis dua kali
//contohnya seperti di baris ke 26
/*let peopleInOrg = ['maulana', 'adinda', 'dimas', 'fatih', 'fajar'];
let panjangNama = peopleInOrg.map(struktur => ({ /* ini dia *//* struktur, panjangNama : struktur.length }));
console.table(panjangNama);*/

/*const buah = function() {
	this.nama = "Kiwi";
	this.umur = "2";
	this.Panen = () => {
		console.log(`buah ${this.nama}, dan umurnya sudah ${this.umur} tahun`);
	}
}

const kiwi = new buah();*/

/*const buah = {
	nama: "Kiwi",
	umur: "2",
	Panen: () => {
		console.log(`buah ${this.nama}, dan umurnya sudah ${this.umur} tahun`);
	}
}*/

/*const buah = function() {
	this.nama = "Kiwi";
	this.umur = 2;
	this.Panen = () => {
		console.log(`buah ${this.nama}, dan umurnya sudah ${this.umur} tahun`);
	}
	
	setInterval(() => {
		console.log(this.umur++);
	}, 500);
}

const kiwi = new buah();*/

const kotak = document.querySelector('.kotak');
kotak.addEventListener('click', function() {
	let satu = 'size';
	let dua = 'caption';
	
	if (this.classList.contains(satu)) {
		[satu, dua] = [dua, satu];
	}
	
	this.classList.toggle(satu);
	setTimeout(() => {
		this.classList.toggle(dua);
	}, 500);
});
















































