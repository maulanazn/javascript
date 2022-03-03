coba = true;
while(coba) {
  let tebak = prompt("tebak angka yang benar");
  let angka = Math.floor(Math.random());

  

  if (tebak = angka) {
    alert("tebakan kamu benar!");
  } else {
    alert("salah cuy, tebak lagi");
  }

  coba = confirm("coba lagi?");
}

alert("Terima  kasih sudah bermain");