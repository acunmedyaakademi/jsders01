// sabit - constant
// içeriğini değişmekten korumak istediğimiz verileri
// burada saklarız. aynı zamanda sadece okunma odaklı olduğu için
// içerisindeki büyük veriye de daha hızlı erişiriz
const font = 'system-ui';
// çok uzunca bir süre endişe etmenize gerek yok. 
// sadece let kullanabilirsiniz

let ad = 'Orhan';
let soyad = 'Ekici';

let tamAd = ad + ' ' + soyad;

let yas = 29;

// değişkenleri tiplerini kontrol etmek için
// typeof kelimesini kullanıyoruz
// örn: typeof ad
// not: typeof sonrasında boşluk olması gerekiyor
// bize cevap verdiği tür string

// yas = yas + 6;
yas += 6;
console.log(yas);

yas++;
console.log(yas);
// ++yas şeklinde bir kullanım daha var.
// iki kullanım arasındaki farkı araştırın, keşfedin

let mesaj = 'Merhaba';
mesaj += ', nasılsınız?';
console.log(mesaj);


// bool tipi değişkenler için isimlendirme önemlidir
// değişken ismi bool sonucunu ifade edecek şekilde
// verilmelidir

let isStudent = true;
let ogrenciMi = true;

let resitMi = false;

// karşılaştırma operatörleri
// bir veya birden fazla durumu karşılaştırıp 
// karşılaştırma sonucunda evet veya hayır ->
// true veya false bilgisi verir
// karşılaştırma operatörü kullanıldığında
// veri tipimiz mutlaka bool olur

console.clear();

// karşılaştırma operatörleri
// eşitlik == veya === (tip kontrol)
// eşit değildir != veya !== (tip kontrol)
// büyüktür >
// küçüktür <
// küçük eşittir <=
// büyük eşittir >=
// ternary ?

let age = 70;
let gender = 'Man';
let legalAge = 18;
// console.log(age >= legalAge);

let isAdult = age >= legalAge;

// yaş, yasal yaştan büyük mü? -> evet veya hayır
// is age greater than legalAge? yes or no -> true or false

// eğer bool ifadelerin başına ! ünlem işareti
// koyarsanız durumu tersine çevirir
// bool sadece true veya false olur
// !true -> false
// !false -> true

// mantıksal operatörler
// && ve operatörü -> hepsi true olmalı
// || veya operatörü -> herhangi biri true olsa yeter
// | pipe
// mantıksal operatörleri boolean döner
// mantıksal operatörlerin içinde boolean veya 
// karşılaştırma operatörleri kullanırız

// tip: okunurluğu arttırmak için 
// parantez içine alabiliriz
let askereGidebilirMi = (age >= 18) && (gender === 'Man');
// let askereGidebilirMi = (true && true);
// istediğiniz kadar yazablirsiniz
// (true && true && true && true && true && true)
console.log(askereGidebilirMi);

let topluTasimaUcretsizMi = (age >= 65) || (age <= 6);
// let topluTasimaUcretsizMi = (true || false);
// -> true

// // input
// let inputAge = prompt('Yaşınız?');
// inputAge = Number(inputAge);

// let isUserAdult = inputAge >= 18;

// // (true || false) && (true || true) && (true || true)

// // kısa koşul yazımı -- shorthand if
// let oyMesaji = (inputAge >= 18) ? "oy verebilirsin" : "oy vermek için beklemen lazım";
// // ? ternary operatörü
// // format olarak karşılaştırma veya bool ifade sonrasında ? (soru işareti) koyulur
// // sonrasında ister string, ister herhangi bir veri tipinde 
// // true kısmını
// // ardından : (iki nokta üst üste) ile ayırıp false kısmını yazabiliriz
// console.log(oyMesaji);

// programcılıkta akış belirlemek ve programın gidişatını kurgulamak için
// koşullar kullanılır
// koşullar 2 türlüdür
// if else (+) veya switch case (bunu araştırın)

let inputAge = prompt('yaş?');
inputAge = Number(inputAge);
if(isNaN(inputAge)) {
  console.log('Yaşınızı yanlış girdiniz!');
  // fonksiyon kullanımı ile hatalı durumda
  // tekrar tekrar girmesini sağlayabiliriz
}
let inputName = prompt('adın?');

// if(true) {
// }

// if (inputName === 'Orhan') {
//   // süslü parantez içine kod yazdığımızda
//   // bu kısma scope (kapsama alanı) diyoruz
//   // koşul gerçekleştiğinde bu scope içindeki
//   // kodlar çalışır
//   console.log('Merhaba admin');
// } else {
//   // eğer if kısmı çalışmazsa mutlaka bu kod çalışır
//   console.log('kimsin sen! çık dışarı');
// }

// if(inputName !== 'Orhan') {
//   console.log('seni tanımıyorum!');
// }

if(inputName === 'Orhan' || inputName === 'Nihat') { // bu koşul
  console.log('Merhaba Admin');
} else if(inputName === 'Furkan') { // üstteki olmadıysa bu olur mu?
  console.log('Oo hocam hoş geldiniz');
} else if(inputName === 'Kıvanç') { // üstteki olmadıysa bu olur mu?
  console.log('    ');
} else if(inputName === 'Lucky') { // üstteki olmadıysa bu olur mu?
  console.log('sana ekstra mama yok');
} else {
  // üsttekilerin herhangi biri gerçekleşmezse
  // bu çalışır
  console.log('yanlış adres!');
}

prompt('Taş Kağıt Makas?');
// kullanıcının seçimini saklıyoruz
let cpuMove = 'Makas';

// berabere, bilgisayar kazandı, oyuncu kazandı