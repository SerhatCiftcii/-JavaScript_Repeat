//get methods
/*let simdi=new Date(); //simdiki tarih
sonuc=simdi
sonuc=simdi.getDate(); // gün
sonuc=simdi.getDay(); //0 pazar
sonuc=simdi.getFullYear();
sonuc=simdi.getTime();*/

 //set methods tarih güncelleme degistirme vs

 /*simdi.setFullYear(2027);
 simdi.setMonth(7); //0 : ocak
 simdi.setDate(15);
 sonuc=simdi*/

 let simdi =new Date()
 let dogumTarihi=new Date(1990,5, 15,)
 sonuc=simdi.getFullYear() - dogumTarihi.getFullYear();
sonuc=simdi-dogumTarihi; //ms cinsinden

 console.log(sonuc); 
console.log(typeof sonuc)   
  
