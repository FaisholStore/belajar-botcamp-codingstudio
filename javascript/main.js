// console.log('hello word');


/*
var adalah Penjelasan: Variabel a dideklarasikan dengan var, dan di JavaScript, deklarasi variabel akan "dinaikkan" (hoisted) ke atas scope saat runtime. Ini berarti variabel a ada dalam scope, meskipun dideklarasikan setelah console.log(a).
*/
// contoh menggunakan var

console.log(a); //yang ini adalah undefined kenapa?
var  a = 'string value';
console.log(a);

var  namevariabel = 'percobaan kedua';
console.log(namevariabel);



// contoh penggunakan let dalam variabel js

// let VaribelLet ='ini variabel let';
// console.log(VaribelLet);

let VariabelLet ='ini variabel let';
console.log(VariabelLet)


const c = {value:30};
console.log(c.value); // Output: 30
c.value = 40; // Error: Assignment to constant variable
console.log(c.value);

/*
1. Baris pertama: const c = { value: 30 };

Anda mendeklarasikan variabel c dengan menggunakan kata kunci const.
Anda memberikan nilai berupa objek dengan properti value yang memiliki nilai awal 30.

2. Baris kedua: console.log(c.value);

Anda mencetak nilai properti value dari objek yang disimpan di dalam variabel c.
Output: 30
Baris ketiga: c.value = 40;

Anda mencoba mengubah nilai properti value dalam objek yang ada di dalam variabel c menjadi 40.
Namun, dalam kasus ini, meskipun variabel c dideklarasikan dengan const, Anda dapat mengubah properti objek yang ada di dalamnya. Konsep konstanta pada const mengacu pada variabelnya sendiri, bukan pada objek yang ada di dalamnya.
Baris keempat: console.log(c.value);

Anda mencetak nilai properti value dari objek yang sudah diubah nilainya menjadi 40.
Output: 40
Jadi, kesimpulannya adalah bahwa saat Anda menggunakan const untuk mendeklarasikan variabel, variabel tersebut tidak dapat diubah untuk merujuk ke objek atau nilai yang berbeda. Namun, jika objek atau nilai yang ada dalam variabel tersebut mutable (dapat diubah), Anda masih dapat memodifikasinya.
*/

// variabel dari javascript

// undefined

let undefinedValue ;
console.log(undefinedValue);


// *TIPE DATA NULL*
let nullValue =null;
console.log(null);


// *TIPE DATA NUMBER

let numberValue =10;
console.log(typeof numberValue);

// *TIPE DATA STRINGG
let StringValue ="AKU ADALAH ORANG";
console.log(typeof StringValue);


// * TIPE DATA BOELAN

let BOELAN =false;
console.log(BOELAN);
BOELAN =false
console.log(typeof BOELAN);

// *TIPE DATA OBJECT

const person = {
   firstName: "Alice",
   lastName: "Johnson",
   age: 30,
 };
// Menggunakan tanda kurung untuk melihat isi object
 console.log("person : ", person);
 // menggunakan dot notation untuk memanggil property pada object'
 
// * Penjumlahan (+):
 // Cerita kasus: Menghitung total nilai belanjaan
const price1 = 10;
const price2 = 15;
const total = price1 + price2;
console.log("Total belanjaan: $" + total);


// * PENGURANGAN (-):
// Cerita kasus: Menghitung selisih tinggi dua teman
// Cerita kasus: Menghitung selisih tinggi dua teman
let heightFriend1 = 175;
let heightFriend2 = 160;
let heightDifference = heightFriend1 - heightFriend2;
console.log("Selisih tinggi teman: " + heightDifference + " cm");

// *Perkalian (*):
// Cerita kasus: Menghitung total harga lima buah apel
const pricePerApple = 1.5;
const numberOfApples = 5;
const totalPrice = pricePerApple * numberOfApples;
console.log("Total harga apel: $" + totalPrice);

// * pembagian (/);

// Cerita kasus: Menghitung rata-rata nilai ujian
const totalScore = 450;
const numberOfStudents = 10;
const averageScore = totalScore / numberOfStudents;
console.log("Rata-rata nilai: " + averageScore);


// * MODULUS (%)
// Cerita kasus: Menentukan apakah sebuah angka genap atau ganjil
const number = 100;
if (number % 2 === 0) {
  console.log(number + " adalah angka genap");
} else {
  console.log(number + " adalah angka ganjil");
}

// * Pemangkatan ()**:
// Cerita kasus: Menghitung luas persegi panjang
const length = 10;
const width = 5;
const area = length ** width;
console.log("Luas persegi panjang: " + area + " m²");

// *IF STATEMENT
const age = 18;

if (age >= 18) {
  console.log("Anda sudah dewasa.");
}
// *if...else Statement: Ini adalah ekstensi dari if statement yang menjalankan blok kode dalam if jika kondisinya benar, dan menjalankan blok kode dalam else jika kondisinya salah.

const temperature = 25;

if (temperature > 30) {
  console.log("Suhu sangat panas.");
} else {
  console.log("Suhu cukup nyaman.");
}

// *Penjelasan: Kode di atas akan mencetak "Suhu sangat panas." jika temperature lebih dari 30, dan mencetak "Suhu cukup nyaman." jika tidak.


// * if...else if...else Statement: Ini adalah ekstensi dari if...else statement yang memungkinkan Anda menguji beberapa kondisi secara berurutan.
const score = 75;

if (score >= 90) {
  console.log("Nilai A");
} else if (score >= 80) {
  console.log("Nilai B");
} else if (score >= 70) {
  console.log("Nilai C");
} else {
  console.log("Nilai D");
}



// *switch Statement: Ini adalah cara lain untuk mengevaluasi berbagai kemungkinan nilai ekspresi dan menjalankan blok kode sesuai dengan nilai tersebut.
const day = "SELASA";

switch (day) {
  case "Monday":
    console.log("Hari Senin");
    break;
  case "SELASA":
    console.log("Hari Selasa");
    break;
  case "Wednesday":
    console.log("Hari Rabu");
    break;
  default:
    console.log("Hari lain");
}
const aString = '10';
const aNumber = 10
 
console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda
 

// * Menggabungkan IF/Else dengan OR dan AND
let totalBelanja = 125000;
let jenisMember = "PERAK";
 
if(totalBelanja > 100000 || jenisMember == "Silver"){
    console.log("Selamat, Anda mendapat diskon sebesar 10%");
}
else{
    console.log("Maaf, saat ini Anda belum mendapat diskon");
}

// * Menggabungkan IF/Else dengan OR dan AND
let HASILbelanja = 125000;
let jenisdiskon = "PERAK";
 
if(HASILbelanja > 100000 && jenisdiskon == "Silver"){
    console.log("Selamat, Anda mendapat diskon sebesar 10%");
}
else{
    console.log("Maaf, saat ini Anda belum mendapat diskon");
}
// *Logika Perulangan dalam JavaScript
for(let i=0; i<5; i++){
  console.log("Hello World");
}

console.log("Sudah di luar kondisi for");

// *Perulangan dengan while
let counter = 0;
 
while(counter < 5){
    console.log("Hello World");
    counter++;
}
 
console.log("Sudah di luar kondisi while");
