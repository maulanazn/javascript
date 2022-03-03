/*makanan = prompt("apa makanan favoritmu?");

switch(makanan) {
	case "Nasi Goreng":
		alert("bukan lumpia");
		break;
	case "Lumpia":
		alert("enakkk");
		break;
	case "Sate":
		document.write("bukan nasi goreng");
		break;
	case "Tempe orek":
		document.write("bukan sate");
		break;
	case "Sambel goreng":
		document.write("bukan tempe orek");
		break;
	default:
		document.write("bukan apa-apa");
		break;
}*/

//nested looping and conditioning
var kosong = '';

for (x = 10; x < 0; x++) {
	for (y = 2; y > x; y--) {
			kosong += '*';
	}
	kosong += '\t\n';
}
console.log(kosong);

