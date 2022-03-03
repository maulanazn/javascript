//ini adalah function dengan javascript
/*function jumlahVolumeBalok(p, l, t) {
	var a;
	var b;
	var c;
	var hasil;
	
	a = p;
	b = l;
	c = t;
	
	hasil = a * b * c;
		
	return hasil;
}

console.log(jumlahVolumeBalok(12, 20, 10));
document.write(jumlahVolumeBalok(11, 12, 20));

function jumlahVolumeKubus(a, b) {
	var volumeA;
	var volumeB;
	var hasil;
	
	volumeA = a * a * a;
	volumeB = b * b * b;
	
	hasil = volumeA + volumeB;
	
	return hasil;
}

alert(jumlahVolumeKubus(12, 12));*/

//ini adalah contoh program sederhana dengan function
/*function jumlahPersegi(a, b) {
	return a + a + b + b;
}

var a = parseInt(prompt('masukkan nilai sisi a: '));
var b = parseInt(prompt('masukkan nilai sisi a: '));
var hasil = jumlahPersegi(a, b);

console.log(hasil);*/

//contoh function tanpa parameter/argumen, tetapi mengembalikan variabel arguments 'return arguments'
/*function coba() {
	return arguments;
}
var tambah = coba("string", 12, 4.5, false, true, "salah", "benar");*/

//refactoring
/*function angkaTambah(x, y, z) {
	
	return x + y + z;
}

console.log(angkaTambah(12, 19, 22));*/

//variable scope
//var b = 2;
//function scope
/*function tes() {
	//name conflict
	var b = 14;
	console.log(b);
}*/

//function declaration
/*function nama(jeneng) {
	alert("Halo, nama saya " + jeneng);
	
}

nama("maulana");

//function expression biasanya disimpan didalam variabel
let Tampilkan = function (kelas) {
	alert ("Saya dari kelas " + kelas);
}

Tampilkan("XI RPL 1");*/

//rekursif
/*function faktorial(n) { 
	if (n == 0) return 1;
	
	return n * faktorial(n-1);
	
}

console.log(faktorial(10));*/
