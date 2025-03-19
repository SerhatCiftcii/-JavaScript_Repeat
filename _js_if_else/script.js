/*
let userName="admin";
let password="1234";
let isLoggedin=(userName=="admin" && password=="1234");

if(isLoggedin)
{
console.log("Uygualamaya griş yapildi");
}
else{
    console.log("uygulamaya giriş başarisiz")
}

for(let i = 5; i >= 0; i--)
{
    console.log(i);
}
*/

////////////////////////
//yas>18
// mezuniyet==lise yada mezuniyet==üniversite
/*const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Mezuniyet durumunuzu girin (lise / üniversite): ", function(mezuniyet) {
    rl.question("Yaşınızı girin: ", function(yas) {
        yas = parseInt(yas);

        if (yas >= 18 && mezuniyet.toLowerCase() === "üniversite") {
            console.log("Ehliyet alabilir");
        } else {
            console.log("Ehliyet alamaz");
        }
        
        rl.close();
    });
});*/


//bir sayınıb 10-50 arasında olup olmadığını kontrol eden program
//bir sayaının pozitf yada tek sayı olup olmadığını
//x,y,z, büyüklüğünü karşılaştır
//2 vize 1 sıanv
//50ve üstü geçme altı kalır vize 40 final 60

/*let sayi=51;
if(sayi>=10 && sayi<=50)
{
    console.log("sayı 10-50 arasında");
}
else{
    console.log("sayı 10-50 arasında değil");
}*/

sayi=20;
if(sayi>0 && sayi%2==1)
{
    console.log("sayı pozitif ve tek");
}
else{
    console.log("sayı pozitif ve tek değil");
}
/*
x=10;
y=40;
z=30;
if(x>y && x>z)
{
    console.log("x en büyük");
}
else if(y>x && y>z)
{
    console.log("y en büyük");
}
else if(z>x && z>y)
{
    console.log("z en büyük");
}*/

/*let vize1=50;
let vize2=40;
let final=30;
let ortalama=((vize1+vize2 /2)*0.4)+ (final*0.6);
if(ortalama>=50 && final>=50)
{
    console.log("dersi geçtiniz");
}
else{
    console.log("Kaldınız");
}
*/