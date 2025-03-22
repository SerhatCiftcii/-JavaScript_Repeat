let ogrenciler= ["çınar","yiğit","serhat"]
/*sonuc=ogrenciler.length;
console.log(sonuc);*/


/*sonuc=ogrenciler.toString();//array to string
sonuc=ogrenciler.join(" ");*/


//eleman silme
//sonuc=ogrenciler.pop(); //son eleman silinir ve silinen eleman geri döndürülür

//sonuc=ogrenciler.shift(); //ilk eleman silinir ve geri  döndürülür


//eleman ekleme
//sonuc=ogrenciler.push("sena"); //dizinin solnuna eleman eklenır

/*sonuc=ogrenciler.unshift("sena"); //listenın ilk elemanına ekler
sonuc=ogrenciler.toString();
console.log(sonuc);*/




let markalar1=["mazda","toyota"]
let markalar2=["opel","renault"]
let markalar3=["mercedes"]

//sonuc=markalar1.concat(markalar2,markalar3); //geriye string dizisi döndürür 

 sonuc =markalar1.splice(0,1,"bmv","audi"); //hem eleman ekleme ve silme
console.log(markalar1);