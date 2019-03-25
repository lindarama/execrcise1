var bil1;
var bil2;
var hasil;
var opr;
var opr_seleksi = false;

function btn(angka) {
	var display = document.getElementById("keluaran").value;
	if (display == "0") {
		display = angka; 
	} else {
		display += angka;
	}
	document.getElementById("keluaran").value = display;
}

function clr() {
	document.getElementById("keluaran").value = "0";
	bil1 = 0;
	bil2 = 0;
	opr_seleksi = false;
}

function koma() {
	var display = document.getElementById("keluaran").value;
	if (display.includes(".") == false) {
		display += ".";
	}
	document.getElementById("keluaran").value = display;	
}

function btn_opr(o) {
	opr_seleksi = true;
	bil1 = parseFloat(document.getElementById("keluaran").value);
	opr = o;
	document.getElementById("keluaran").value = "0";
}

function hitung() {
	if (opr_seleksi == true) {
		bil2 = parseFloat(document.getElementById("keluaran").value);
		switch(opr){
			case 'x' :
				hasil = bil1 * bil2;
				console.log(hasil);
				
				document.getElementById("keluaran").value = hasil;			
				break;
			case '/' :
				hasil = bil1 / bil2;
				document.getElementById("keluaran").value = hasil;
				break;
			case '-' :
				hasil = bil1 - bil2;
				document.getElementById("keluaran").value = hasil;
				break;
			case '+' :
				hasil = bil1 + bil2;
				document.getElementById("keluaran").value = hasil;
				break;
			
			case '%' :
				hasil = bil1 / 100;
				document.getElementById("keluaran").value = hasil;
				break;
		}
		opr_seleksi = false;
		hasil = 0;
		bil1 = 0;
		bil2 = 0;
	}
}