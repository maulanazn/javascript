let nba = [];
nba = ['Celtics','lakers','Warriors','Wizard','Knicks','Thunder','Nets','Bucks','Jazz','Bulls','Suns'];
//nba[0] = 'Celtics';

//array multidimensi

//nba = ['wwarriors', 'Lakers', [7, 8]];

//menampilkan isi array dengan perulangan

/*for (arr_nba = 0; arr_nba < 11; arr_nba++) {
	console.log('seed ke ' + nba[arr_nba] + " di klasemen akhir nba");
}*/

/*
	method join ( digunakan untuk mengubah bentuk array ke dalam string) 
	and length (untuk menghitung jumlah array) dan 
	juga method pop (untuk menghapus array dari belakang)
	, push (untuk menambah array ke dalam urutan terakhir),
	 shift (untuk menghapus data array dari depan) , 
	 unshift (sama dengan push, hanya saja data akan ditambah di depan array)
 */
 
//nba.push('Cleveland', 'Hornets');
//nba.pop();
//nba.unshift('Magic');
//nba.shift();

//method join, digunakan untuk mengubah bentuk array ke dalam string

//console.log(nba.join(', '));

/*
	method slice and splice
*/

//nba.splice(/*kita menambah data di indeks ke 2*/ 2, /*jika kita tulis 1, maka data array akan terhapus 1 dari depan, setelah data array di tambah*/ 0, /*data yang ditambah*/ 'Magic');
//let ucl = nba.slice(0, 3);
//console.log(ucl.join(', '));

/*
	method foreach dan map, juga sort
*/

//for (i = 0; i < nba.length; i++) {
	//console.log(nba[i]);
//}

//method forEach

//nba.forEach(function(b, i) {
	//console.log('Seed ke ' + i + ' '+ b);
//}); 

//method map

//let wnba = nba.map(function(b) {
	//return b;
//});

//console.log(wnba.join(', '));

//method sort

//nba.sort(function (a,b) {
	//return a-b
//});
//console.log(nba.join(', '));

/*
	method find and filter
*/

let nba2 = nba.find(function(x) {
	return x == "lakers";
})

console.log(nba2);

let nba3 = nba.filter(function(x) {
	return x == "Celtics";
})

console.log(nba3.join(', '));