tanya = true;
while (tanya) {
	//menangkap pilihan player
	p = prompt('Pilih : Gajah, Semut, Atau orang');
	//menangkap pilihan komputer
	comp = Math.random();

	if (comp < 0.3) {
		comp = 'gajah';
	} else if (comp >= 0.3 && comp < 0.67) {
		comp = 'orang';
	} else {
		comp = 'semut';
	}

	result = '';
	//menentukan aturan
	if(p == comp) {
		result = " SERI";
	} else if (p == "gajah") {
		/*if (p == "orang") {
			result = "MENANG";
		} else {
			result = "KALAH";
		}*/
		result = (comp == "orang") ? " MENANG" : " KALAH";
	} else if (p == "orang") {
		result = (comp == "gajah") ? " KALAH" : " MENANG";
	} else if (p == "semut") {
		result = (comp == "orang") ? " KALAH" : " MENANG";
	} else {
		result = "Memasukkan pilihan yang salah";
	}

	//tampilkan hasil

	alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\n maka hasilnya adalah : kamu ' + result);
	
	tanya = confirm('lagi?');
}

alert('terimakasih, sudah bermain');