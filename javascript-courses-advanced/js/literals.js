/*let siswa = {
	judul: 'Perkenalan',
	nama: 'Maulana Zulkifli Nugroho',
	kelas: 11,
	jurusan: 'Rekayasa Perangkat Lunak',
	umur: 18,
	ig: 'http://instagram.com/maulana.zn'
}*/

/*let fragmentsHtml = `<div>
	<h1 align="center">${siswa.judul}</h1>
	<ul align="center">
		<li>${siswa.nama}</li>
		<li>${siswa.kelas}</li>
		<li>${siswa.jurusan}</li>
		<li>${siswa.umur}</li>
		<li>${siswa.ig}</li>
	</ul>
<div>`;
let fragmentsHtml = `<div>
	<ul align="center">
		<li>${lagu.create_by}</li>
		<li>${lagu.judul} ${lagu.feat ? `ft ${lagu.feat}` : ''}</li>
	</ul>
<div>`;*/


//ini adalah html fragments dengan methode bersarang atau nested html fragments
/*let komunitas = {
	nama: 'WARAS ENTERPRISE',
	anggota: [
		'maulana zulkifli nugroho',
		'fatih kurniawan',
		'dimas bagus j.v',
		'ronaldjidin m.a',
		'fajar a.f'
	]
}

function Anggota(anggota) {
	return `
		<ul>
			${anggota.map(ar => `<li>${ar}</li>`).join('')}
		</ul>
`
}

let fragmentsHtml = `<div>
	<h1>${komunitas.nama}</h1>
	<h4>anggota : </h4>
	${Anggota(komunitas.anggota)}
</div>`;

document.body.innerHTML = fragmentsHtml;*/

//tagged template literals
/*let nama = 'maulana zn';
let umur = 18;

function coba(str, ...values) {
	/*let result = '';
	str.forEach((str, x) => {
		result += `${str}${values[x] || ''}`;
	});
	//return result;
	
	return str.reduce((result, str, x) => `${result}${str}${values[x] || ''}` , '');
}

let output = coba`namaku ${nama}, dan aku ${umur}`;
console.log(output);*/


let nama = 'maulana zn';
let umur = 18;
let sekolah = 'smk muhammadiyah 04 boyolali';

function Highlight(str, ...values) {

	return str.reduce((result, str, x) => `${result}${str}<span class="h1">${values[x] || ''}</span>` , '');
}

let output = Highlight`namaku ${nama}, dan aku ${umur}, dan saya bersekolah di ${sekolah}`;
document.body.innerHTML = output;


































