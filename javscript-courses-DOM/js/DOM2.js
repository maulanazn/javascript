//DOM manipulation
//mengimplementasikan variabelnya terlebih dahulu
const baru = document.createElement('p');
const teksBaru = document.createTextNode('Paragraf 4');

//menyimpan tulisan ke dalam paragraf ke dalam memori
baru.appendChild(teksBaru);

//simpan elemen 'baru' diakhir section a
const sectiona = document.getElementById('a');
sectiona.appendChild(baru);

const libaru = document.createElement('li');
const tekslibaru = document.createTextNode('item diantara');

libaru.appendChild(tekslibaru);

const ul = document.querySelector('section#b ul');
const li = document.querySelector('li:nth-child(2)');

ul.insertBefore(libaru, li);

const link = document.getElementsByTagName('a')[0];
sectiona.removeChild(link);

//replaceChild

const sectionb = document.getElementById('b');
const P4 = sectionb.querySelector('p');

const h2baru = document.createElement('h2');
const teksH2 = document.createTextNode('judul baru');

h2baru.appendChild(teksH2);

sectionb.replaceChild(h2baru, P4);