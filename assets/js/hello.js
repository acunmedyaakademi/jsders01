// bu bir yorum satırıdır

// programlama dillerinde veriler türlerine göre ayrılır
// primitive - ilkel - değer tipli veriler

// metin -> string -> js string ifade çift tırnak veya tek tırnak arasında belirtilir
// sayı, küsüratlı sayı -> number (integer, double, float, decimal) -> tırnak vb yoktur doğrudan yazılır
// tarih -> date (datetime) -- js de bununla uğraşmayın 🤢
// binary tipinde 1 ve 0'a benzer true ve false -> bool -> true veya false

// tarayıcı uyarı kutusu
// alert('Merhaba JS Dünyası');

// geliştirici konsolu
// developer console
// 2 yönlü çalışır
// projemiz, sayfamız, uygulamamız burada loglama vb işlemler yapabilir

// console üzerinden js kodları çalıştırabiliriz. tanımladığımız 
// verilere erişebiliriz

console.log('çalışma sırası:');
console.log('sıra 1');
console.log('sıra 2');
console.log('sıra 3');
console.log("orhan'ın javascript kodu");
console.log('eğitimde "orhan" hoca farkı');

console.log('tırnakla ilgili syntax hatası çözme yöntemi:')
// karakterleri escape etmek
// char escaping
console.log('orhan\'ın konsole örnekleri');

// + operatörü metinsel ifadeleri birleştirir
console.log('orhan' + 'ekici');
console.log('orhan' + ' ' + 'ekici');

// konsolu temizler daha önce konsole yazılanları siler
console.clear();

console.log(123);
console.log(12123456789);
console.log(12_123_456_789);
console.log(12.5);
console.log(7.5);
// js küsüratlı sayılara float denir
// tam sayılara integer denir
// ikisi de ayrıştırılmaksızın tip olarak Number olur
// Number = numara

console.clear();

// numaralar üzerinde matematik operatörlerini kullanabiliriz
// +, -, *, /, %
// best practice -> okunurluk için
// operatör kullandığımızda yanlarına ekstra boşluk ekleyelim
console.log(4 + 6);
console.log(5 * 4);
console.log(((4 + 8) * 12) / ((40 * 15) + 25) - 50);
// parantezler işlem önceliğini değiştirir
// en önce en içteki parantez çalıştırılır

// console.log('merhaba ' + prompt('Adınız nedir?'));

// veri dönüştürme
// rakamı metne dönüştürme kısmını pek dert etmeyiz
// çok ihtiyacımız olmaz

// prompt veya form elemanları bize her zaman string verir
// string olan veriyi matematik işlemi yapmak için
// numaraya (number) çevirmemiz gerekiyor

// css'te olduğu gibi büyük küçük harf duyarlılığı var
// js case sensitive bir dildir

// js anormal bir dil olduğu için kendi kendine bazen
// tipleri değiştirebiliyor
// console.log('yaşın: ' + (2024 - Number(prompt('Kaç yılında doğdun?'))));
// yukarıdaki kod kesinlikle okunurluğu zor bir kod
// istediğimiz çıktıyı veriyor

// kullanıcı yaşını girsin, doğum yılını söyleyelim

// kullanıcıya şimdiki yılı soralım, doğum yılını soralım
// yaşını söyleyelim

// kullanıcıya adını soralım, soyadını soralım
// hoş geldin [ad] [soyad] diyelim

// üsttekine ek olarak doğum yılını da soralım ve
// hoş geldin [ad] [soyad], şu an [yas]'ındasın diyelim

// kullanıcıdan sınav notu 1, 2, 3 alalım
// ortalamasını yazdıralım

// bir üçgenin iç açıları toplamı 180'dir
// birinci ve ikinci açıyı girelim. üçüncüyü yazdıralım.

console.clear();

// değişkenler - variables
// içine geçici olarak veri sakladığımız alanlar
// amacı: veriyi tekrar tekrar kullanmak, erişmek
// bonus: kod okunurluğunu arttırması
// geçici = ram 

// değişkenlerin isimleri olur
// programcılıkta değişken isimlendirme standartları vardır
// clean code - readable code

// değişken tanımlamanın - declaring a variable - anahtar kelime "let"
// artık "var" kesinlikle kullanmıyoruz 

// değişken tanımlama yöntemi
// değişken anahtar kelimesi, değişken ismi, atama operatörü, değer
let ad = 'Orhan';
// js de değişkenler camelCase formatında isimlendirilir

console.log(ad);

ad = 'Nihat';

console.log(ad);

console.clear();

// değişkeni koyduğum kod kısmında değişkenin içindeki
// değer yer alır

let isim = prompt('Adınız:'); // -> 'Orhan'
let soyisim = prompt('Soyadınız:');
let tamAd = isim + ' ' + soyisim;
console.log('Hoş geldin ' + tamAd);
