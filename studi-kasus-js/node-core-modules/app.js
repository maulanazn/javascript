let perintah = require('yargs');
let {simpanData, listMusisi, detailMusisi, hapusDataMusisi} = require('./dataMusik.js');

perintah.command({
	command: 'tambah',
	describe: 'menambahkan musisi baru',
	builder: {
		nama: {
			describe: 'Nama lengkap',
			demandOption: true,
			type: 'string',
		},
		
		alatmusik: {
			describe: 'apa nih alat musik favoritmu?',
			demandOption: true,
			type: 'string',
		},
		
		igurl: {
			describe: 'link ke instagram masing masing',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		simpanData(argv.nama, argv.alatmusik, argv.igurl);
	},
}).demandCommand();

//menampilkan daftar musisi
perintah.command({
	command: 'daftar_isi',
	describe: 'menampilkan daftar musisi yang baru ditambah',
	handler(argv) {
		listMusisi();
	},
});

//menampilkan detail musisi
perintah.command({
	command: 'detail',
	describe: 'menmapilkan detail musisi yang baru maupun yang sudah ditambah',
	builder: {
		nama: {
			describe: 'Nama lengkap',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		detailMusisi(argv.nama);
	},
});

//menghapus data musisi berdasarkan nama
perintah.command({
	command: 'hapus',
	describe: 'menghapus data musisi berdasarkan nama',
	builder: {
		nama: {
			describe: 'Nama lengkap',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		hapusDataMusisi(argv.nama);
	},
})


perintah.parse();
