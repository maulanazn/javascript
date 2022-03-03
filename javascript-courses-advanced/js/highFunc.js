//higher order function with declaration and expression function
/*function Halo(a, nama) {
	console.log(`halo ${a}...`);
	nama();
}

function nama() {
	alert('say hello ten times');
}

Halo('maulana', nama);*/
const angka = [-2,-1,0,1,2,3,4,5,6,7,8,9,10,2];


//push method
/*const desimal = [];
angka.forEach(function(a) {
	if ( angka[a] >= 3 ) {
		desimal.push(angka[a]);
	}
});
console.log(desimal);*/

//filter method
const desimal = angka.filter(b => b > 4);
console.log(desimal);

//map method
const desimalBaru = angka.map(c => c * 5);
console.log(desimalBaru);

//reduce method, menambah setiap angka yang ada di array
const angkaBaru = angka.reduce((ac, cv) => ac + cv);
console.log(angkaBaru);

//chaining method
const hasilBaru = angka.filter(x => x <= 10)
	.map(x => x * 3)
	.reduce((acc, cvv) => acc + cvv);
	
console.log(hasilBaru);