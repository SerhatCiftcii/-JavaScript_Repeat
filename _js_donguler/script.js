/*let toplam=0;
for(i=0; i<10 ; i++)
    {
//console.log(i);
toplam +=i;
}
console.log(toplam);*/

let toplam=0;
let sayilar=[1,4,5,9,6,8];
console.log(sayilar[0]+sayilar[1]);

//bunun yerine daha kolay yol for
//for(i=0;i<sayilar.length;i++){
//toplam=toplam+i;
///}

for(let sayi in sayilar) {
 console.log(sayi);
}

console.log(toplam);




///////////////
let user={
    "name":"serhat çiftçi",
    "username":"serhatcfc",
    "password":123,
    "email":"s.@gmail.com",

}
for(var i in user){
    console.log(i); //name,username i ... yazdırır
    console.log(user[i]);//userın içindkeiler yazdırı serhat...serhatcfc falan
}