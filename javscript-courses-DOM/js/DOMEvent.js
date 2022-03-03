//event handler
/*const p3 = document.querySelector('.p3');
 
function ChangeColorP3() {
	p3.style.backgroundColor = "lightblue";
}

const p2 = document.querySelector('.p2');

p2.onclick = ChangeColor();

const p4 = document.querySelector('section#b p');

p4.addEventListener('click', function() {
	const ul = document.querySelector('section#b ul');
	const li = document.createElement('li');
	
	const Teksli = document.createTextNode('Item baru');
	
	li.appendChild(Teksli);
	ul.appendChild(li);
});*/

//menangkap class untuk di seleksi
const p1 = document.querySelector('.p1');
//membuat event listener untuk paragraf 3
p1.addEventListener('click', function() {
	p1.style.backgroundColor = "lightblue";
	p1.style.color = "red";
}); 
p1.addEventListener('dblclick', function() {
	p1.style.backgroundColor = "tomato";
	p1.style.color = "black";
}); 
p1.addEventListener('mouseover', function() {
	p1.style.backgroundColor = "lightblue";
	p1.style.color = "tomato";
});
p1.addEventListener('mouseleave', function() {
	p1.style.backgroundColor = "white";
	p1.style.color = "tomato";
});

const p2 = document.querySelector('.p2');
//membuat event listener untuk paragraf 3
p2.addEventListener('click', function() {
	p2.style.backgroundColor = "lightblue";
	p2.style.color = "red";
}); 
p2.addEventListener('dblclick', function() {
	p2.style.backgroundColor = "tomato";
	p2.style.color = "blue";
}); 
p2.addEventListener('mouseover', function() {
	p2.style.backgroundColor = "lightblue";
	p2.style.color = "tomato";
});
p2.addEventListener('mouseleave', function() {
	p2.style.backgroundColor = "white";
	p2.style.color = "black";
});

const p3 = document.querySelector('.p3');
//membuat event listener untuk paragraf 3
p3.addEventListener('click', function() {
	p3.style.backgroundColor = "lightblue";
	p3.style.color = "red";
}); 
p3.addEventListener('dblclick', function() {
	p3.style.backgroundColor = "tomato";
	p3.style.color = "blue";
}); 
p3.addEventListener('mouseover', function() {
	p3.style.backgroundColor = "blue";
	p3.style.color = "tomato";
});
p3.addEventListener('mouseleave', function() {
	p3.style.backgroundColor = "white";
	p3.style.color = "black";
});

const p4 = document.querySelector('.p4');
//membuat event listener untuk paragraf 3
p4.addEventListener('click', function() {
	p4.style.backgroundColor = "lightblue";
	p4.style.color = "red";
}); 
p4.addEventListener('dblclick', function() {
	p4.style.backgroundColor = "tomato";
	p4.style.color = "blue";
}); 
p4.addEventListener('mouseover', function() {
	p4.style.backgroundColor = "lightblue";
	p4.style.color = "tomato";
});
p4.addEventListener('mouseleave', function() {
	p4.style.backgroundColor = "white";
	p4.style.color = "black";
});
p4.addEventListener('click', function() {
	const ul4 = document.querySelector('section#b ul');
	const li4 = document.createElement('li');
	const li4Teks = document.createTextNode('Item baru ditambah');
	
	li4.appendChild(li4Teks);
	ul4.appendChild(li4);
});



//membuat penggayaaan untuk bagian linknya

const link = document.querySelector('section#a a');
link.style.textDecoration = 'none';
link.style.color = "black";