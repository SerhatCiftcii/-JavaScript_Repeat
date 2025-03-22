/*let user1=["Serhat","çiftçi",25]
let user2=["Serhat","çiftçi",25]*/ // okunabilir degil

let user1=
{
    "name":"Serhat",
    "last":"Ciftci",
    "yas":25,
    "adres":{
        "sehir":"kocaeli",
        "ilce":"izmit"
    },
    "hobiler":["sinema","spor"]
}
let user2=
{
    "name":"Berat",
    "last":"krg",
    "yas":25,
    "adres":{
        "sehir":"kocaeli",
        "ilce":"izmit"
    },
    "hobiler":["sinema","spor"]
}
 
let sonuc;
//sonuc=user[0];//undefied
sonuc=user1.name;
sonuc=user1["name"];
sonuc=user1.adres.ilce
sonuc=user1.hobiler[0];
console.log(sonuc);

let user3=[
    user1,
    user2
];
sonuc=user3[0].name;
sonuc=user3[1].hobiler[1];
console.log(sonuc);