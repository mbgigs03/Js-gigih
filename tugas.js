// Identitas
let nama = prompt("Masukkan nama Anda:");
let pesan = `Halo semua! Nama saya ${nama}, Ini adalah Contoh Program JavaScript saya.`;
alert(pesan);

// Contoh penggunaan if, else
let angka = parseInt(prompt("Masukkan sebuah angka:"));
if (angka > 0) {
    alert("Angka yang Anda masukkan positif.");
} else if (angka < 0) {
    alert("Angka yang Anda masukkan negatif.");
} else {
    alert("Angka yang Anda masukkan nol.");
}

// Nested if
let usia = parseInt(prompt("Masukkan usia Anda:"));
if (usia >= 18) {
    let izin = prompt("Apakah Anda memiliki izin mengemudi? (ya/tidak)").toLowerCase();
    if (izin === "ya") {
        alert("Anda boleh mengemudi.");
    } else {
        alert("Anda belum boleh mengemudi.");
    }
} else {
    alert("Anda belum cukup usia untuk mengemudi.");
}

// Contoh penggunaan switch case
let hari = prompt("Masukkan nama hari (contoh: Senin):").toLowerCase();
switch (hari) {
    case "senin":
    case "selasa":
    case "rabu":
    case "kamis":
    case "jumat":
        alert("Ini adalah hari kerja.");
        break;
    case "sabtu":
    case "minggu":
        alert("Ini adalah hari libur.");
        break;
    default:
        alert("Hari yang Anda masukkan tidak valid.");
}

// Contoh penggunaan for statement
let bilangan = parseInt(prompt("Masukkan sebuah bilangan bulat positif:"));
let faktorial = 1;
for (let i = 1; i <= bilangan; i++) {
    faktorial *= i;
}
alert(`Faktorial dari ${bilangan} adalah ${faktorial}`);

// Contoh penggunaan while loop
let counter = 1;
while (counter <= 5) {
    alert(`Ini adalah perulangan ke-${counter}`);
    counter++;
}

// Contoh penggunaan do while loop
let password;
do {
    password = prompt("Masukkan kata sandi Anda:");
} while (password !== "12345");

// Contoh penggunaan function
function tambah(a, b) {
    return a + b;
}

let angka1 = parseInt(prompt("Masukkan angka pertama:"));
let angka2 = parseInt(prompt("Masukkan angka kedua:"));
let hasil = tambah(angka1, angka2);
alert(`Hasil penjumlahan ${angka1} dan ${angka2} adalah ${hasil}`);