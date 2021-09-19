# Rendszerterv

## 1. A rendszer célja

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

## 11. Tesztterv

## 12. Telepítési terv

## 13. Karbantartási terv
