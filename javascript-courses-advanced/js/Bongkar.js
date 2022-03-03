//membalik variabel dengan destructuring
/*let a = "huruf a";
let b = "huruf b";
let c = "huruf c";
console.log(a);
console.log(b);
console.log(c);
[a, b, c] = [c, b, a];
console.log(a);
console.log(b);
console.log(c);

//destructuring array
let angka = [1, 2, 3, 4];
let [satu, dua, tiga] = angka;
console.log(empat);

//rest parameter, menampung array, yang tidak di deklarasikan
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [...number] = angka;
console.log(number);*/

//destructuring objek
/*let siswa = {
	nama: 'fatih kurniawan',
	kelas: 11,
	jurusan: 'Rekayasa Perangkat lunak',
	absen: 10
}
let {nama, kelas, jurusan, absen} = siswa;
console.log(nama);*/

//destructuring objek dengan assignment variabel baru
/*let siswa = {
	nama: 'fatih kurniawan',
	kelas: 11,
	jurusan: 'Rekayasa Perangkat lunak',
	absen: 10
}
let {nama: name, kelas: kls, jurusan: keahlian, absen: no} = siswa;
console.log(name);*/

//assignment destructuring
/*let siswa = {
	nama: 'fatih kurniawan',
	kelas: 11,
	jurusan: 'Rekayasa Perangkat lunak',
	absen: 10
}
let {nama: name, kelas: kls, jurusan: keahlian, absen: no, email: gmail = 'fatih123@gmail.com'} = siswa;
console.log(gmail);*/


//assignment destructuring with rest parameter(cara yang cukup ampuh
/*let siswa = {
	nama: 'fatih kurniawan',
	kelas: 11,
	jurusan: 'Rekayasa Perangkat lunak',
	absen: 10,
	email: 'fatih123@outlook.com'
}
let {...datas} = siswa;
console.log(datas);

//mengambil field pada objek
let musik = {
	judul: 'Winter song',
	singer: 'isyana sarasvati',
	rilis: 2018
}

function judulMusik({singer, rilis}) {
	return rilis;
}

console.log(judulMusik(musik));*/

//destructuring function
/*function hitungAngka(a, b) {
	return [a - b, a / b];
}
let [kurang, bagi] = hitungAngka(12, 4);
console.log(kurang);
console.log(bagi);

//return value objek
function kalkulasi(a, b) {
	return {
		tambah: a + b,
		kurang: a - b,
		kali: a * b,
		bagi: a / b
	}
}
let {tambah, kurang, kali, bagi} = kalkulasi(20, 70);
console.log(kurang);*/

//destructuring function arguments
let siswa = {
	nama: 'Nanda Wido P',
	kelas: 11,
	jurusan: 'Rekayasa Perangkat Lunak',
	nilai: {
		PBO: 90,
		PWDB: 100,
		Basis_data: 80
	}
}
/*function siswaHalo(nama, kelas, jurusan) {
	return `Halo ${nama}, dari kelas ${kelas}, dan dari jurusan ${jurusan}`;
}
console.log(siswaHalo(siswa.nama, siswa.kelas, siswa.jurusan));*/

function siswaHalo({nama, kelas, jurusan, nilai: {PBO, PWDB, Basis_data}}) {
	return `Halo ${nama}, dari kelas ${kelas}, dan dari jurusan ${jurusan}, dan nilainya ${PBO}`;
}
console.log(siswaHalo(siswa));























