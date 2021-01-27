// let mahasisiwa = ["faisal",19,true];
// console.log(mahasisiwa[1]);
//penulisan array
// let angka = [1, 2, 3, 4, 5,  6, 7];

//array manual
// let hari=[];
// hari[0]="senin";
// hari[1]="selasa";
// hari[2]="rabu";
// jika ada indeks array yang terlewat akan ada 1 slot empty kosong
// console.log(hari.join("\n"));

// let hewan=[" buaya "," kelinci "," kucing "," tikus "];
// //push menambah data di index terahir array
// hewan.push("anjing","babi","monyet");
// //pop menghapus data di index terahir array
// hewan.pop();
// //unshift menambah data di index awal array
// hewan.unshift();
// //shift menghilangkan data di index awal
// hewan.shift();
// //splice menambah data di tengah
// console.log(hewan.splice(2, 0, "siput","koala"));

// let hewan=[" buaya "," kelinci "," kucing "," tikus "];
// length menampilkan panjang array
// console.log(hewan.length);

//sort menyortir data
// let angka = [3,5,6,7,9,1,2,4,8];
// angka.sort();
// console.log(angka);

// let abjad=["a", "d" , "c", "b"];
// abjad.sort();
// console.log(abjad);

// let angka = [3,5,6,7,9,1,2,4,8];
// let tambah = (a, b) => a+b; 
// console.log(angka.reduce(tambah));

//object
// membuat Object literal
// let mhs ={
//     nama : "faisal",
//     kelas : "1c"
// }
// let mhs1 ={
//     nama : "ali",
//     kelas : "1c"
// }

//fungction declaration
// function buatObject(nama,kelas,nim){
//     let mahasisiwa = {};
//     mahasisiwa.nama=nama;
//     mahasisiwa.kelas=kelas;
//     mahasisiwa.nim=nim;
//     return mahasisiwa;
// }
// let mhs2 = buatObject("faisal","1C","209101329")

//constructor
// function mahasisiwa(nama,nim, kelas, jurusan) {
//     this.nama=nama;
//     this.nim=nim;
//     this.kelas=kelas;
//     this.jurusan=jurusan;
// }
// let mhs3=new mahasisiwa("faisal",213123,"1c","TI")

// const namaObject ={
//     nama : "faisal",
//     nim : 223231231

// }
// console.log(namaObject);
// //add
// namaObject.jurusan='teknik informatika';
// console.log(namaObject);

// // update
// namaObject.nama="ali";
// console.log(namaObject);

// //delete
// delete namaObject.nim;
// console.log(namaObject);

//function di dalam object
let orang ={
    nama:"faisal",
    umur: 19,
    sayHai: function(){
        alert("hai nama saya  " + orang.nama + " dan usia saya  " + orang.umur)
    }
}