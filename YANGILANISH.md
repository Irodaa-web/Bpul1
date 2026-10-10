# Birinchi Pul — sozlamalar va tungi rejim

## Qo‘shildi
- Ota-ona va farzand menyularida Sozlamalar.
- Birinchi tashrifda yorug‘ rejim. Tungi rejim tanlovi brauzerda saqlanadi.
- Animatsiyalarni yoqish/o‘chirish, qurilmaning reduced-motion sozlamasini hurmat qilish.
- Ota-onada mavjud Telegram ulash, holatni tekshirish va uzish funksiyalari.
- Farzandda Telegram xabarnomalarini ota-ona ulashi haqida tushuntirish.
- Profil ma’lumoti, tizimdan chiqish, boshqa akkauntga kirish.
- Headerdagi barg belgisi asosidagi sayt ikonka (favicon).
- 3D hover effektlari va chap menyudagi scroll chizig‘ini yashirish.

## Mavjud klonlangan loyihaga ko‘chirish
Quyidagi 10 faylni mos joyiga ko‘chiring. O‘zingizdagi .env.local, .git va node_modules papkalarini almashtirmang.

app/layout.js
app/settings.css
app/icon.svg
app/parent/[section]/page.js
app/child/[section]/page.js
components/Dashboard.js
components/Icon.js
components/TelegramConnect.js
components/ThemeProvider.js
components/Settings.js

Yangi papkada ishga tushirsangiz: npm ci, keyin npm run dev.

## Tekshiruv
- Production build muvaffaqiyatli tugadi.
- Mavjud testlar: 25 ta o‘tdi, MongoDB integratsiya testi sozlanmagani uchun 1 ta o‘tkazib yuborildi.
- JS/JSX va CSS sintaksisi tekshirildi.
- Bosh sahifa, login, ikkala settings yo‘li va ikonka HTTP 200 qaytardi.
- Tema tanlovi, saqlanishi, tablararo yangilanish, saqlash bloklangan holat va animatsiya tanlovi alohida tekshirildi.
- Chromium yuklanmagani sababli vizual brauzer tekshiruvi bajarilmadi.
- Haqiqiy login va Telegram bilan to‘liq tekshiruv bajarilmadi.
- Backend, API, DB, .env.local, package.json va package-lock.json asl arxiv bilan bir xil.

## Siz tekshiring
Ota-ona va bola akkauntlarida Sozlamalar ochilishi; dark mode va sahifani yangilash; mobil ko‘rinish; Telegram ulash; tizimdan chiqib boshqa akkauntga kirish.

## Push
Faqat yuqoridagi app va components fayllarini stage qiling. .env.local faylini push qilmang.
