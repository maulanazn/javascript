//mengambil elemen video
let videos = Array.from(document.querySelectorAll('[data-duration]'));

//pilih hanya yang WARAS talk
let wTalk = videos.filter(video => video.textContent.includes('WARAS TALK'))


//ambil durasi masing masing video(parseInt)
.map(item => item.dataset.duration)
.map(waktu => {
	let bagians = waktu.split(":")
	.map(bagian => parseFloat(bagian));
	return bagians[0] * 60 + bagians[1];
})
.reduce((total, detik) => total + detik);

let jam = Math.floor(wTalk / 3600);
wTalk = wTalk - jam * 3600;
let menit = Math.floor(wTalk / 60);
let detik = wTalk - menit * 60;

//simpan di dom
let durasiElemen = document.querySelector('.total-durasi');
durasiElemen.textContent = `${jam} jam ${menit} menit ${detik} detik`;
let jmlVideo =  videos.filter(video => video.textContent.includes('WARAS TALK')).length;
let elemenJmlvideo = document.querySelector('.jumlah-video');
elemenJmlvideo.textContent = `${jmlVideo} video`;


let wStory = videos1.filter(video1 => video1.textContent.includes('WARAS story'))
//ambil durasi masing masing video(parseInt)
.map(item1 => item1.dataset.duration)
.map(waktu1 => {
	let bagians1 = waktu1.split(":")
	.map(bagian1 => parseFloat(bagian1));
	return bagians1[0] * 60 + bagians1[1];
})
.reduce((total1, detik1) => total1 + detik1);

let jam1 = Math.floor(wStory / 3600);
wStory = wStory - jam1 * 3600;
let menit1 = Math.floor(wStory / 60);
let detik1 = wStory - menit1 * 60;

//simpan di dom
let durasiElemen1 = document.querySelector('.total-durasi1');
durasiElemen1.textContent = `${jam} jam ${menit} menit ${detik} detik`;
let jmlVideo1 =  videos.filter(video1 => video1.textContent.includes('WARAS story')).length;
let elemenJmlvideo1 = document.querySelector('.jumlah-video1');
elemenJmlvideo.textContent = `${jmlVideo} video`;
