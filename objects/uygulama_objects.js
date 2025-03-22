
let siparis_1={
    "id":101,
    "siparisTarih":"30.12.2022",
    "odemeSekli": "kredi karti",
    "kargo_adresi" :
    {

    "mahalle":"yahya kaptan",
    "ilce":"izmit",
    "sehir":"kocaeli"
},
"urunler":[
    { 
        "urun_id":5,
        "urun_adi":"ihone13pro",
        "urun_url":"https:abc.com",
        "urun_fiyat":22000
    },
    {
        "ürün_id":6,
        "urun_adi":"ihone13pro Max",
        "urun_url":"https:abc.com",
        "urun_fiyat":25000
    }
]

};
let siparis_2={
    "id":101,
    "siparisTarih":"30.12.2022",
    "odemeSekli": "kredi karti",
    "kargo_adresi" :
    {

    "mahalle":"yahya kaptan",
    "ilce":"izmit",
    "sehir":"kocaeli"
},
"urunler":[
    {
        "ürün_id":6,
        "urun_adi":"ihone13pro Max",
        "urun_url":"https:abc.com",
        "urun_fiyat":25000
    }
]

};
let siprais1_toplam=(siparis_1.urunler[0].urun_fiyat+siparis_2.urunler[0].urun_fiyat) *1.18;

let siprais2_toplam=(siparis_1.urunler[0].urun_fiyat)*1.18;

let toplam=siprais1_toplam+siprais2_toplam;

console.log("siparis 1 miktar"+siprais1_toplam);
console.log("siparis 1 miktar"+siprais2_toplam);
console.log("toplamodenen :"+toplam);

let siparisler=[siparis_1,siparis_2];//çok sipraiş olursa ne yapcaz bunla yapcaz ve döngüyle yapılır

