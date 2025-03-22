
/*let meyveler=["elma","armut","muz","çilek"]
console.log(meyveler.length)

console.log(meyveler[0]);//elma

console.log(meyveler [meyveler.length-1]); //çilek

console.log(meyveler.includes("elma"));//TRUE
console.log(meyveler.includes("Elma"));

meyveler[meyveler.length]="kiraz"; //sonuna ekler
meyveler.push("kirazz"); //buda kısa unshifte basına ekler

//dizin son elemanını sil
//meyveler.pop();
console.log(meyveler);*/

let ogrr1 = [
    "yiğit",
    "Bilgi",
    2010,
    [70, 60, 80]
];
let ogrr2 = [
    "ada",
    "Bilgi",
    2012,
    [80, 80, 90]
];
let ogrr3 = [
    "ahmet",
    "turan",
    2019,
    [60, 60, 70]
];

let ogrenciler = [ogrr1, ogrr2, ogrr3]; // "ogr3" yerine "ogrr3" yazılmalı!

let yigit_yas = new Date().getFullYear() - ogrenciler[0][2];
let ada_yas = new Date().getFullYear() - ogrenciler[1][2];
let ahmet_yas = new Date().getFullYear() - ogrenciler[2][2];

//not bilgileri
let yigit_not=ogrenciler[0][3][0] +ogrenciler[0][3][1]+ogrenciler[0][3][2]/3;
let ahmet_not=ogrenciler[2][3][0] +ogrenciler[2][3][0]+ogrenciler[2][3][0]/3;
let ada_not=ogrenciler[1][3][0] +ogrenciler[1][3][0]+ogrenciler[1][3][0]/3;
console.log(yigit_not.toFixed(1),ada_not.toFixed(1),ahmet_not.toFixed(1));




