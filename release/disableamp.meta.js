// ==UserScript==
// @name Disable AMP 
// @name:ar تعطيل AMP 
// @name:be Адключыць AMP 
// @name:bg Деактивирайте AMP 
// @name:bn-IN AMP নিষ্ক্রিয় করুন 
// @name:cs Zakázat AMP 
// @name:da Deaktiver AMP 
// @name:de AMP deaktivieren 
// @name:el Απενεργοποίηση AMP 
// @name:es Deshabilitar AMP 
// @name:et Keela AMP 
// @name:fa غيرفعالسازي شتاب دهنده صفحات موبایل 
// @name:fi Poista AMP käytöstä 
// @name:fr Désactiver AMP 
// @name:he AMP השבת 
// @name:hr Onemogući AMP 
// @name:hu AMP letiltása 
// @name:id Nonaktifkan AMP 
// @name:it Disattiva AMP 
// @name:ja AMPを無効化 
// @name:ko AMP 비활성화 
// @name:lt Išjungti AMP 
// @name:lv Atspējot AMP 
// @name:ms Nyahdayakan AMP 
// @name:ne-NP AMP लाई असक्षम पार्नुहोस् 
// @name:nl AMP uitschakelen 
// @name:no Skru av AMP 
// @name:pl Wyłącz AMP 
// @name:pt-PT Desativar AMP 
// @name:pt Desativar AMP 
// @name:ro Dezactivare AMP 
// @name:ru Отключить AMP 
// @name:sk Vypnúť AMP 
// @name:sl Onemogoči AMP 
// @name:sr Isključi sve 
// @name:sv Stäng av AMP 
// @name:tr AMP'yi devre dışı bırak 
// @name:uk Вимкнути AMP 
// @name:vi Vô hiệu hóa AMP 
// @name:zh-HK 停用 AMP 
// @name:zh-TW 禁用加速的行動頁面（AMP） 
// @name:zh 禁用 AMP 
// @namespace    adguard
// @version      1.0.59
// @description This is a very simple userscript that disables AMP on the Google search results page. 
// @description:ar هذا سكربت بسيط جدا، يعمل على تعطل AMP في صفحات بحث Google. 
// @description:be Гэта - вельмі просты скрыпт, які прыбірае AMP з вынікаў пошуку Google. 
// @description:bg Това е много прост потребителски скрипт, който деактивира AMP на страницата с резултати от търсенето с Google. 
// @description:bn-IN এটি একটি খুব সাধারণ ইউজারস্ক্রিপ্ট যা গুগল অনুসন্ধান ফলাফল পৃষ্ঠায় AMP নিষ্ক্রিয় করে। 
// @description:cs Jedná se o velmi jednoduchý uživatelský skript, který zakáže AMP na stránce s výsledky vyhledávání Google. 
// @description:da Dette er et meget simpelt userscript, der deaktiverer AMP på Googles søgeresultatside. 
// @description:de Dies ist ein sehr einfaches Userscript, das AMP auf der Seite der Google-Suchergebnisse deaktiviert. 
// @description:el Αυτό είναι ένα πολύ απλό userscript που απενεργοποιεί το AMP στη σελίδα αποτελεσμάτων αναζήτησης Google. 
// @description:es Este es un userscript muy simple que deshabilita AMP en la página de resultados de búsqueda de Google. 
// @description:et Tegemist on lihtsa kasutajaskriptiga, mis keelab Google otsingutulemustes AMP-i. 
// @description:fa این یک یوزراسکریپت بسیار ساده است که شتاب دهنده صفحات موبایل را در نتایج صفحه جستجو گوگل غیرفعال می کند. 
// @description:fi Tämä on hyvin yksinkertainen käyttäjäskripti, jolla AMP kytketään pois käytöstä Googlen hakutulossivulla. 
// @description:fr C'est un script utilisateur très simple pour désactiver AMP sur les pages de résultats de Google. 
// @description:he זהו סקריפט משתמש פשוט מאוד שמשבית את AMP בדף תוצאות החיפוש של גוגל 
// @description:hr Ovo je jednostavan userscript koji onemogućuje AMP u Google rezultatima pretraživanja. 
// @description:hu Ez egy nagyon egyszerű szkript, amely letiltja az AMP szolgáltatást a Google keresési eredményoldalán. 
// @description:id Ini adalah userscript yang sangat mudah yang dapat menonaktifkan AMP pada halaman hasil pencarian Google. 
// @description:it Questo è uno script utente molto semplice che rimuove AMP dai risultati nelle pagine di ricerca di Google. 
// @description:ja Google検索結果ページでAMPを無効にするシンプルなユーザースクリプトです。 
// @description:ko 이것은 Google 검색 결과 페이지에서 AMP를 비활성화하는 매우 간단한 사용자 스크립트입니다. 
// @description:lt Tai labai paprastas naudotojo skriptas, atjungiantis AMP Google paieškos rezultatų puslapyje. 
// @description:lv Tas ir ļoti vienkāršs lietotāja skripts, kas atspējo AMP Google meklēšanas rezultātu lapā. 
// @description:ms Ini adalah skrip pengguna sangat ringkas yang menyahdayakan AMP pada laman hasil carian Google. 
// @description:ne-NP यो एक धेरै साधारण उपयोगकर्ता स्क्रिप्ट हो जसले गुगल खोज परिणाम पृष्ठमा AMP असक्षम गर्दछ। 
// @description:nl Dit is een eenvoudig userscript dat AMP uitschakelt op de Google zoek resultaatspagina. 
// @description:no Dette er et veldig enkelt brukerskript som skrur av AMP på Google-søkeresultatssider. 
// @description:pl Jest to bardzo prosty skrypt użytkownika, który wyłącza AMP na stronie wyników wyszukiwania Google. 
// @description:pt-PT Este é um script muito simples que desativa as AMP na página de resultados de pesquisa do Google. 
// @description:pt Este é um script muito simples que desativa o AMP na página de resultados de pesquisa do Google. 
// @description:ro Dezactivați AMP în pagina de rezultate căutare Google cu acest foarte simplu script utilizator. 
// @description:ru Это очень простой скрипт, который убирает AMP из результатов поиска Google. 
// @description:sk Toto je veľmi jednoduchý používateľský skript, ktorý na stránke s výsledkami vyhľadávania Google zakáže AMP. 
// @description:sl To je zelo preprost uporabniški skript, ki onemogoči AMP na Googlovi strani z rezultati iskanja. 
// @description:sr Ovo je veoma jednostavan userscript koji isključuje AMP na stranici sa rezultatima Google pretrage. 
// @description:sv Det här är ett väldigt enkelt användarskript som förhindrar AMP i Googles sökresultat. 
// @description:tr Bu, Google arama sonuçları sayfasında AMP’yi devre dışı bırakan çok basit bir kullanıcı betiğidir. 
// @description:uk Це дуже простий користувацький скрипт, який вимикає AMP на сторінці результатів пошуку Google. 
// @description:vi Đây là một mô tả người dùng rất đơn giản, vô hiệu hóa AMP trên trang kết quả tìm kiếm của Google. 
// @description:zh-HK 這是個簡單輕巧的腳本，用來停用 Google 搜尋結果的 AMP 功能。 
// @description:zh-TW 這是一個非常簡單的使用者腳本，其禁用於 Google 搜尋結果頁面上之加速的行動頁面（AMP）。 
// @description:zh 这是一个非常简单的用于在 Google 搜索结果页禁用 AMP 的用户脚本。 
// @downloadURL https://raw.githubusercontent.com/gnadgnaoh/Userscripts/release/release/disableamp.user.js
// @updateURL https://raw.githubusercontent.com/gnadgnaoh/Userscripts/release/release/disableamp.meta.js
// @homepageURL  https://adguard.com/
// @author       AdGuard
// @include      https://www.google.*/*
// @include      https://news.google.*/*
// @include      https://yandex.*/*
// @include      https://*.turbopages.org/*
// @include      https://*/amp/*
// @include      https://*/*/amp/*
// @include      https://amp.*
// @include      https://*/*/amp
// @include      https://*/*.amp*
// @include      https://*/*-amp*
// @include      https://*/*_amp*
// @include      https://*/*=amp*
// @include      https://*/?amp*
// @include      https://*/*&amp*
// @include      https://*/*&amp=1*
// @include      https://*?amp=*
// @include      https://*/*?amp=1*
// @include      https://*/amp-*/*
// @include      https://*/ampNews/*
// @include      https://*/NewsViewAmp/*
// @include      https://*/*/amp_articleshow/*
// @include      https://*/*/?noamp=*
// @exclude      https://www.orfonline.org/*
// @exclude      https://tehnichka.pro/*
// @exclude      https://yandex.ru/turbo/s/terrnews.com/*
// @exclude      https://amp.dev/*
// @run-at       document-end
// ==/UserScript==