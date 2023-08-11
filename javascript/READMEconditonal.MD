Conditional statements (pernyataan kondisional) adalah bagian penting dari bahasa pemrograman yang memungkinkan Anda menjalankan kode berdasarkan kondisi tertentu. Dengan conditional statements, Anda dapat membuat keputusan dalam program Anda berdasarkan nilai dari ekspresi atau variabel tertentu.

Ada beberapa jenis conditional statements di JavaScript, yang paling umum adalah `if`, `else if`, `else`, dan `switch`. Berikut adalah contoh-contoh lengkap dari masing-masing jenis conditional statement beserta penjelasannya:

1. **if Statement** :
   Ini adalah kondisional paling dasar yang hanya menjalankan blok kode jika kondisinya benar (nilai ekspresi adalah `true`).

   ```
   const age = 18;

   if (age >= 18) {
     console.log("Anda sudah dewasa.");
   }

   ```

   Penjelasan: Kode di atas akan mencetak "Anda sudah dewasa." hanya jika `age` sama dengan atau lebih besar dari 18.
2. **if...else Statement** :
   Ini adalah ekstensi dari if statement yang menjalankan blok kode dalam `if` jika kondisinya benar, dan menjalankan blok kode dalam `else` jika kondisinya salah.

   ```
   const temperature = 25;

   if (temperature > 30) {
     console.log("Suhu sangat panas.");
   } else {
     console.log("Suhu cukup nyaman.");
   }

   ```

   **Penjelasan: Kode di atas akan mencetak "Suhu sangat panas." jika `temperature` lebih dari 30, dan mencetak "Suhu cukup nyaman." jika tidak.**
3. **if...else if...else Statement** :
   Ini adalah ekstensi dari if...else statement yang memungkinkan Anda menguji beberapa kondisi secara berurutan.

```
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

```

    4.**switch Statement** :
Ini adalah cara lain untuk mengevaluasi berbagai kemungkinan nilai ekspresi dan menjalankan blok kode sesuai dengan nilai tersebut.

```
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Hari Senin");
    break;
  case "Tuesday":
    console.log("Hari Selasa");
    break;
  case "Wednesday":
    console.log("Hari Rabu");
    break;
  default:
    console.log("Hari lain");
}

```


Penjelasan: Kode di atas akan mencetak hari berdasarkan nilai `day`.

Conditional statements sangat penting untuk mengontrol alur eksekusi program berdasarkan kondisi tertentu. Dengan menggunakan kondisional, Anda dapat membuat program yang lebih dinamis dan responsif terhadap situasi yang berbeda.
