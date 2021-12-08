# ReactJS Framework yapılandırması Şablonu

## Kişisel kendinden ReactJS / Webpack / Self-server yapılandırmalı sunucu

# Ayarlar

## Babel ayarları
Javascripti ESNext versiyonundan tarayıcıların en fazla kullandıkları popüler yapılara düşürür

- @babel/preset-env
- @babel/preset-react
- @babel/transform-runtime

eklentileri kullanılmıştır 

## Stil Ayarları

sass, scss ve css3 formatları desteklenir, tüm stil formatları tek bir stil dosyasında (all) birleştirilir

## Typescript

Syntax olarak babel ile ES6'a dönüştürülür, modül olarak CommonJS  kullanır ve JSX formatını destekler.

## React Redux

Redux ve React Redux kütüphaneleri aktiftir, örnek olarak bir redux kalıbı bulunmaktadır, ayrıca tarayıcıların redux eklentisi ile uyumludur


## Axios

XHR iletişimi için popüler olarak kullanılan axios projeye dahildir, restful apiler için uygundur.

## Webpack 

### file-loader

- ttf | Font dosyası | fonts/ttf klasöründe saklanır
- woff2 | Font dosyası | fonts/woff2 klasöründe saklanır
- eot | Font dosyası | fonts/eot klasöründe saklanır
- jpeg | Resim dosyası | images klasöründe saklanır
- jpg | Resim dosyası | images klasöründe saklanır
- png | Resim dosyası | images klasöründe saklanır
- svg | Resim dosyası | images klasöründe saklanır

### Copy Plugin

Webpack ortam temizliği için build klasörünü herdefasında temizler, kalıcı dosyalarını src/Public klasörüne yerleştirebilirsiniz böylece her derlemede build klasörüne kopyalanacaktır (var olan dosyaların üzerine yazılmaz)

### HTML Webpack Plugin

React projesinin çalışacağı HTML kalıbını düzenlemek için src/index.html dosyasını düzenleyebilirsiniz, öntanımlı olarak script dosyası index.html içerisinde body taglarının arasına yerleştirilir

# Diğer dahili kütüphaneler

## Moment | zaman kütüphanesi
## jquery | DOM kütüphanesi
## jquery | DOM kütüphanesi
## react-router-dom | React Router eklentisi