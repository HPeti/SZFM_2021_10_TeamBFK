# Rendszerterv

## 1. A rendszer célja
A rendszer célja, hogy a válaszadók egy átlatható, olvasható és könnyen értelmezhető feladatsort (űrlapot) tölthessenek ki, függetlenül attól, hogy milyen nehézségi szinten teszik ezt. 
Emiatt akár több osztálynak is lehetősége lesz a tanulásra és gyakorlásra is a weboldalon.

A felhasználói élmény érdekében fontos, hogy a kérdések alapján egyértelműen megadhatóak legyenek a válaszok is. 
Minden kérdésblokk egymástól jól látható módon, elkülönítve kell megjelennie akár számítógépről vagy mobileszközről is. A böngészők nagy részével kompatibilis lesz a weboldal, ez értendő a működésre és megjelenítésre

A kitöltés során a válaszmezőkbe csak számokat lehet beírni. A kérdések megválaszolása után le kell adni a feladatot, amely az erre kihelyezett gomb segítségével fog működni.

A kitöltők a sikeres kitöltés után egy visszajelzést kapnak, hogy hány pontot értek el az adott feladatsorból. Ha ez az eredmény nem a legjobb, akkor az adott feladattípushoz tartozó művelet megoldásának oldalát mutathatja a weboldal.

## 2. Projekt terv

A projektben részvevő fejlesztők:
* Halász Dániel
* Hegedűs Péter
* Káplár István
* Nyika Benedek
* Sápi Gábor

A projekt részeinek heti lebontása az alábbi táblázatban látható:

| Funkció | Leírás | Csoportosítás | Prioritás | Határidő | Becslés |Eltelt idő | Hátralévő idő |
|---------|--------|     :---:     |   :---:   |   :---:  |  :---:  |   :---:   |     :---:     |
| Követelmény specifikáció | fejenként 10-20 sor | Dokumentáció | Alacsony | 2021. 09. 13. | 4 | 4 | 0 |
| Funkcionális specifikáció | fejenként 20-40 sor | Dokumentáció | Alacsony | 2021. 09. 13. | 8 | 7 | 0 |
| Rendszerterv | fejenként 40-80 sor + 1-2 ábra| Dokumentáció | Normál | 2021. 09. 20. | 12 | 8 | 4 |
| Fejlesztés | fejenként 100-200 sor | Fejlesztés | Fontos | 2021. 09. 27. | 12 | ? | ? |
| Tesztelés | fejenként 10-20 tesztlépés + dokumentáció ezekről | Fejlesztés | Fontos | 2021. 09. 27. 0:00 | 8 | ? | ? |
| Értékelés | ?| ? | ? | 2021. 10. 4. 0:00 | ? | ? | ? |

## 3. Üzleti folyamatok modelle

## 4. Követelmények
A rendszerrel szemben támasztott __általános követelmények__:
* A rendszer funkcióit bármelyik felhasználó használhatja.
* Webes működés, amely elérhető számítógépekről és mobileszközökről is
* Ha szükséges az adattárolás, akkor MySQL adatbázisba történjen
* Az eredményellenőrzés Javascript segítségével történik (kérdésadatbázis esetén akár PHP-val is történhet a későbbiekben)

__Felülettel__ szemben támasztott követelmények:
* Letisztult és átlátható felülettel rendelkezzen a weboldal
* Gyerekbarát megjelenése legyen az oldalnak, amely játékos vagy mókás benyomást keltsen
* Szines képek használata, amely fel tudja kelteni a figyelmet
* Interaktív felület a kérdések megválaszolásához
* Visszajelzés a válaszok eredményéről, esetleges megoldás megadása
* Reszponzív webdesign mobilos megjelenítés esetén


## 5. Funkcionális terv
* A rendszer résztvevői:
    * Rendszeradmin
    * Tanár (lehetséges fejlesztés)
    * Diák (lehetséges fejlesztés)
    * Guestuser
* A rendszeren belüli hozzáférési jogosultsági körök:
    * Rendszeradmin:
        * Hozzáférhet a rendszer minden részéhez, és bármilyen résztvevőként megtekintheti azt.
        * A rendszeren belüli felhasználok adatait módosíthatják és ellenőrizhetik.
        * A rendszerteszteket létrehozhatja, elvégezheti illetve törölheti azokat.
        * Kiszolgálja a további felhasználok moderátori szintű igényt megkövetelő kéréseit.
    * Tanár (lehetséges fejlesztés)
        * Képes a rendszeren belül új tanulói csoportokat illetve feladatokat/feladatsorokat létrehozni.
    * Diák (lehetséges fejlesztés)
        * A feladatokat tudja csak megoldani.
    * Guestuser
        * Az alapértelmezett felhasználói mód.
        * A feladatokat tudja csak megoldani.
## 6. Fizikai környezet
* A weboldal Android és bármely webplatfromra lett tervezve rezponzívan.
* A weboldal a népszerű webböngészők közül bármelyiken elfut. (pl.: Chrome, Firefox, Opera, Microsoft Edge, Safari, Brave)
* Fejlesztői szoftvereink:
    * Visual Studio Code
    * Trello
    * Github
    * Phpmyadmin
    * UML Diagram Tool
## 7. Absztrakt domain modell

Alapműveletek: összeadás, kivonás, szorzás, osztás. Ezekhez a műveletekhez fog a program feladatokat adni.
UI: Ezen tud a felhasználó szintet választani, illetve válaszokat adni. A visszajelzés is ezen a felületen jelenik meg.
Kliens-szerver oldalon php/javascript segítségével kiértékelésre kerül a válasz. 

## 8. Architekturális terv

HTML megjeleníti a feladatokat és a feladatokhoz tartozó leírást.
Javascriptnek 2 része van: az egyik amely legenerálja a feladatokat, a másik meg kiértékeli ezekre a választ.
Rendszer bővítésére lehetőség például felhasználó azonosítása (tanár/ diák), A tanárnak lehetősége van feladatokat/ feladatsorokat létrehozni, csoport létrehozás. Diákok eredményeinek tárolása.

## 9. Adatbázis terv

Az alap koncepcióhoz nincs szükség adatbázisra. 
Bővéteés esetén szükség van rá. Ebben az adatbázisban 3 tábla lenne.
1. felhasználók adatbázisa, 
2. feladatsorok adatbázisa, 
3. feladatsorra a válaszok adatbázisa.

SQL kód:
* create database Matematika;
* CREATE TABLE `matematika`.`felhasznalo` ( `nev` VARCHAR(50) NOT NULL , `jelszo` VARCHAR(50) NOT NULL , `tipus` ENUM('tanar','diak') NOT NULL , PRIMARY KEY (`nev`(50))) ENGINE = InnoDB;
* CREATE TABLE `matematika`.`feladatok` ( `id` INT(5) NOT NULL AUTO_INCREMENT , `feladat` VARCHAR(100) NOT NULL , `csoport` ENUM('Kezdő','Közép','Haladő') NOT NULL , `eredmény` INT(100) NOT NULL , PRIMARY KEY (`id`(5))) ENGINE = InnoDB;
* CREATE TABLE `matematika`.`valaszok` ( `id` INT(10) NOT NULL AUTO_INCREMENT , `feladat_id` INT(5) NOT NULL , `felhasznalo_id` INT(50) NOT NULL , `valasz` INT(100) NOT NULL , PRIMARY KEY (`id`(10))) ENGINE = InnoDB;
## 10. Implementációs terv
    A weboldalt leginkább PHP-, HTML-, CSS-, illetve JavaScriptben fogjuk elkészíteni. A főbb alkotó elemeket külön fileokba csoportosítjuk hogy az esetlegesen felmerülő változtatási
    javaslatokat könyebben tudjuk végrehajtani.

## 11. Tesztterv

* Tesztesetek:
    1. Linkek tesztelése
    2. Feladatok tesztelése
    3. Megjelenés tesztelése
    4. Login teszt (opcionális fejlesztés esetén)

* Tesztelési elvek:
    1. Selenium webtesztelés a későbbiekben
    2. A fejlesztők letesztelik a weboldal egyes részeit és dokumentálják
    3. Open beta kiadás (felhasználók visszajelzése/bug report)(opcionális)

## 12. Telepítési terv

A rendszerünk szerver-kliens működési elvet követi.
* Kliens oldali rendszerterv (becslés):
    * Windows:
        * Windows 7 vagy frisebb verzió
        * Intel Pentium 4 vagy újabb ami SSE3-ra alkalmas
        * Egy webböngésző (Pl.: Firefox, Chrome, Brave)
    * Linux:
        * 64-bit Ubuntu 18.04+, Debian 10+, openSUSE 15.2+, vagy Fedora Linux 32+
        * Intel Pentium 4 vagy újabb ami SSE3-ra alkalmas
        * Egy webböngésző (Pl.:Firefox, Chrome, Brave)

* Szerver oldali rendszerterv:
    * Egy webszerver bérlése
        * FTP elérése
        * Adatbázis elérése
        * Adatbázis kezelése

## 13. Karbantartási terv

Általában csak akkor készül el, ha már egy verziót átadtunk és a következő verziót tervezzük.

__A 13. pont módosítási jogát fenntarjuk.__

A szoftver frissítésének esetleges módja:
* FTP
* SSH

A frissítés esetén szükséges elvégezni:
* A szerveren lévő állomány frissítése
* Frissítés dokumentálása
* Teszteket újboli futtatása
* Teszteredméynek dokumentálása
