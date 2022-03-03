class Dirinya {
	constructor(nama, energi) {
		this.nama = nama;
		this.energy = energi;
   }
   makan(porsi) {
		this.energy += porsi * 10;
		return `${this.nama} sedang makan, dan energinya menambah ${this.energy}`;
   }

   main(jam) {
		this.energy -= jam;
		return `${this.nama} sedang main, dan energinya berkurang ${this.energy}`;
   }

   tidur(tambah) {
		this.energy += tambah * 100;
		return `${this.nama} sedang tidur, dan energinya menambah ${this.energy}`;
   }
 }


let dia = new Dirinya('Fatih', 10);
console.log(dia.makan(1000));
