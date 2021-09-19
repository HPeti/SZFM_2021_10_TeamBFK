# Rendszerterv

## 1. A rendszer célja
A rendszer célja, hogy a válaszadók egy átlatható, olvasható és könnyen értelmezhető feladatsort (űrlapot) tölthessenek ki, függetlenül attól, hogy milyen nehézségi szinten teszik ezt. 
Emiatt akár több osztálynak is lehetősége lesz a tanulásra és gyakorlásra is a weboldalon.

A felhasználói élmény érdekében fontos, hogy a kérdések alapján egyértelműen megadhatóak legyenek a válaszok is. 
Minden kérdésblokk egymástól jól látható módon, elkülönítve kell megjelennie akár számítógépről vagy mobileszközről is. A böngészők nagy részével kompatibilis lesz a weboldal, ez értendő a működésre és megjelenítésre

A kitöltés során a válaszmezőkbe csak számokat lehet beírni. A kérdések megválaszolása után le kell adni a feladatot, amely az erre kihelyezett gomb segítségével fog működni.

A kitöltők a sikeres kitöltés után egy visszajelzést kapnak, hogy hány pontot értek el az adott feladatsorból. Ha ez az eredmény nem a legjobb, akkor az adott feladattípushoz tartozó művelet megoldásának oldalát mutathatja a weboldal.
## 2. Projekt terv

## 3. Üzleti folyamatok modelle

## 4. Követelmények

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

## 10. Implementációs terv
    A weboldalt leginkább PHP-, HTML-, CSS-, illetve JavaScriptben fogjuk elkészíteni. A főbb alkotó elemeket külön fileokba csoportosítjuk hogy az esetlegesen felmerülő változtatási
    javaslatokat könyebben tudjuk végrehajtani.

## 11. Tesztterv

## 12. Telepítési terv

## 13. Karbantartási terv
