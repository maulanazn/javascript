const fs = require('fs');
const kapur = require('chalk');
const format = require('validator');

//membuat folder data baru
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath);
}

const dataPath = './data/dataMusik.json';
if(!fs.existsSync(dataPath)) {
	fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const loadMusisi = () => {
	const file = fs.readFileSync('data/dataMusik.json', 'utf-8');
	const data = JSON.parse(file);
	return data;
};

const simpanData = (nama, alatmusik, igurl) => {
	const dataMusik = {nama, alatmusik, igurl};
	let data = loadMusisi();
	
	//cek duplikat data
	let duplikat = data.find((dataMusik) => dataMusik.nama === nama);
	if(duplikat) {
		console.log(kapur.red.bgWhite.bold('sudah ada di data'));
		return false;
	}
	
	//validasi link instagram
	if (igurl) {
		if(!format.isURL(igurl)) {
			console.log(kapur.white.bgBlue.bold('format url tidak valid'));
			return false;
		}
	}

    data.push(dataMusik);

    fs.writeFileSync('data/dataMusik.json', JSON.stringify(data));

    console.log(kapur.cyan.bgRed.bold("Terimakasih sudah berpatisipasi"));
}

const listMusisi = () => {
	const data = loadMusisi();
	console.log(kapur.white.bgBlue.bold('Daftar musisi : '));
	data.forEach((dataMusik, d) => {
		console.log(kapur.cyan.bgRed.bold(`${d + 1}. ${dataMusik.nama} - ${dataMusik.alatmusik} - ${dataMusik.igurl}`));
	});
};

const detailMusisi = (nama) => {
	const data = loadMusisi();
	const dataMusik = data.find(
		(dataMusik) => dataMusik.nama.toLowerCase() === nama.toLowerCase()
	);
	if (!dataMusik) {
		console.log(kapur.cyan.bgRed.bold(`${nama} tidak ditemukan`));
		return false;
	}
	
	console.log(kapur.cyan.bgRed.bold(dataMusik.nama));
	console.log(kapur.cyan.bgRed.bold(dataMusik.alatmusik));
	if (dataMusik.igurl) {
		console.log(kapur.cyan.bgRed.bold(dataMusik.igurl));
	}
};

const hapusDataMusisi = (nama) => {
	const data = loadMusisi();
	const newData = data.filter(
		(dataMusik) => dataMusik.nama !== nama
	);
	
	if (data.length === newData.length) {
		console.log(kapur.cyan.bgRed.bold(`${nama} tidak ditemukan`));
		return false;
	}
	
	fs.writeFileSync('data/dataMusik.json', JSON.stringify(newData));
    console.log(kapur.cyan.bgRed.bold(`data musisi ${nama} berhasil dihapus`));
};

module.exports = {simpanData, listMusisi, detailMusisi, hapusDataMusisi};