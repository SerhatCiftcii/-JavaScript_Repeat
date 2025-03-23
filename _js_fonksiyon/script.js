/*let sayilar=[1,2,3,4]
console.log(sayilar.includes(1));*/

function selamlama(msg)
{
    console.log(msg);

}
selamlama("selam");
selamlama("selam");
selamlama("selam");


function yasHesapla(dogumYili)
{
    return new Date().getFullYear()- dogumYili; 
}
  let yasAhmet =(yasHesapla(1985)); 
let yasAyse =(yasHesapla(2000));
console.log(yasAhmet,yasAyse);

function emekliligeKacYilKaldi(dogumYili,isim)
{
    let yas=yasHesapla(dogumYili);
    let kalanSene=65-yas;
    if(kalanSene>0){
        console.log(`${isim},emekli olamana ${kalanSene}yıl kaldı.`);

    }
    else{
        console.log("zaten emekli oldunuz");
    }
}
emekliligeKacYilKaldi(1980,"ali") 