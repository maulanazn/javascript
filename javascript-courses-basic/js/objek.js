//membuat objek (secara literal)
// let siswa = {
//   nama : "Maulana Zulkifli Nugroho",
//   umur : 17,
//   jurusan : "Rekayasa Perangkat Lunak",
//   nilai : [100, 90, 80, 70],
//   alamat : {
//       Jalan : "RT 2 RW 4",
//       Dukuh : "Recosari",
//       Desa : "Kragilan",
//       Kecamatan : "Mojosongo",
//       Kota : "Boyolali",
//       Provinsi : "Jawa Tengah"
//   }
// };

//membuat objek secara literal
//dengan function declaration
//dengan constructor (kata kuncinya new)
//dengan object.create()

//function declaration

// function BuatobjekSiswa(nama, nomor, kelas, jurusan) {
//   let siswa = {};
//   siswa.name = nama;
//   siswa.number = nomor;
//   siswa.classes = kelas;
//   siswa.jurusan = jurusan;
//   return siswa;
// }

// let siswa2 = BuatobjekSiswa('Fatih Kurniawan', 10, 'XI RPL 1', 'Rekayasa Perangkat Lunak');

//constructor(tidak harus mendeklarasikan variabelnya(dictionariesnya) di dalam function dan return variabelnya di dalam functionnya(jika tanpa new))

// function Ppdb(nama, no, ranking) {
//   
//   this.daftar = nama;
//   this.no = no;
//   this.ranking = ranking;
// }

// let Ppdb2 = new Ppdb('Maulana', 1, 13);

//THIS (function expression)

let anggota = {a : 10, anggota : 'maulana'};
anggota.daftar = function() {
  console.log(this);
  console.log('halo');
}

anggota.daftar();

//THIS (constructor)
function Halo() {
  console.log(this);
  console.log('halo');
}

let baru = new Halo();
let baru1 = new Halo();
