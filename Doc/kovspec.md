# Számtan gyakorló követelmény specifikáció

## 1. Jelenlegi helyzet
A Debreceni Általános Iskolában az alsós osztályokban kisebb tanulási problémák merültek fel, amely főleg a gondolkozási időkben nyílvánult meg.  
A házi feladatokból és az órán megfigyelt teljesítményből az a kövezkeztetés jött le, hogy feljeszteni kell a tanulás módszerét.

Az igazgatónőnek az az ötlete támadt, hogy valamilyen digitális formában kellene megszerettetni és megértetni a számolási módszereket.

A jelenlegi módszer az iskolában munkafüzetekben lévő példák, néha a tábláról másolt feladatok megoldása.  
A délutáni időszakban egy pedagógus van a napköziben, aki sajnos a tanulók magas száma miatt nem tud mindenkire külön figyelmet fordítani.

A fejlődéshez egy oldal, ami mindenkinek külön segítséget tudna nyújtani, megoldást jelenthet.  
A délutáni időszakban a tanulók fáradtak, új módszerek bevezetésével a lemaradt tanulók akár a szülők segítségével is tudnának fejlődni számtanból.

## 2. Vágyott rendszer
Az alsó osztályos tanulóknak a számítógépen interaktív felület segítségével szórakoztató formában a szorzótábla megtanítása és számtani műveletek gyakorlása.

A weboldal rövid leírást is ad a művelet elvégzéséről.

Segítséget lehet kérni a műveletek elvégzéséhez. (Pl. az oldal segít a 6x6 szorzás elvégzésében összeadás segítségével. 6+6+6+6+6+6).

A művelet elvégzése után apró ábra megdicséri a tanulót, ha jól válaszolt, különben pedig újra megpróbáljatja.

A szint skálázható, attól függően, hogy hanyadik osztályos tanulóról van szó.

A különböző számtani műveletek a szorzás, osztás, összeadás, kivonás.

A felület alapvetően játékos kell legyen, a tanulókat le kell, hogy kösse.

A példák megoldása után a felület megoldást ad.

Az elvégzett feladatsor után eredményt is ad a felület.

## 3. Jelenlegi üzleti folyamatok
* 3.1. Eszközök beszerzése
    * 3.1.1. Munkafüzetek, tankönyvek beszerzése tanárok és esetleg diákok számára
    * 3.1.2. Nem digitalizált módon történő oktatáshoz szükséges eszközök: Kréta, papír, nyomtató, nyomtató karbantartásához szükséges eszközök (színes és fekete patron stb.)
* 3.2. Műveletek elmagyarázása (osztályfüggő)
  * 3.2.1. összeadás
  * 3.2.2. kivonás
  * 3.2.3. szorzás
  * 3.2.4. osztás
* 3.3. feladatok megoldása közösen (esetleges további magyarázás)
    * 3.3.1. Különórák, tanárok idejének speciális beosztása
    * 3.3.2. Délutáni különórák esetében további felmerülő költségek: Tanárok bérezése, télen sötétedés után világítás stb.
* 3.4. feladatok megoldása önállóan
* 3.5. számonkérés

## 4. Igényelt üzleti folyamatok
* 4.1. Weboldal működésének elmagyarázása a tanárok részére
  * 4.1.1. Oldal részeinek bemutatása
  * 4.1.2. Oldalon történő navigálás bemutatása
  * 4.1.3. Példa feladatok megoldásának bemutatása
* 4.2. Tantermi eszközök
  * 4.2.1. Osztálytermi laptop vagy számítógép bekapcsolása és a weboldal betöltése
  * 4.2.2. Projektor bekapcsolása és a kép kivetítése
* 4.3. Műveletek elmagyarázása a tanulók részére
  * 4.3.1. Művelethez szükséges elmélet és a módszerek bemutatása
  * 4.3.2. Példák bemutatása (akár képeken keresztül)
* 4.4. Weboldal használata a tanulókkal közösen
* 4.5. A tanóra keretein belül tanulók gyakorolhatnak, akár gépterembe is(módosítva)

## 5. A rendszerre vonatkozó szabályok
* A webes felület HTML, CSS, és JavaScript használatával készüljön.
* Egy webszerver segítségével működjön a honlap akár helyileg, akár online is.
* A képek JPG vagy PNG formátumúak legyenek.

## 6. Követelménylista
| kód| követelmény | részletes leírás|
| :---: | :--- | :---  |
| K01 | Letisztult felület| Könnyen használható/átlátható felület.|
| K02 | Gyerekbarát megjelenés |Játékos, mókás megjelenés. |
| K03 | Színes képek használata | A felület legyen eléggé izgalmas egy gyermek figyelmének felkeltésére. |
| K04 | Interaktív felület | A felhasználó részvételére alapuljon. |
| K05 | Feladatok generálása | Az oldal legyen képes feladatokat generálni.|
| K06 | Kihívást jelentő feladatok | Feladatok nehézségi szintje legyen választható. |
| K07 | A megoldások kiértékelése | A weboldal tudja megállapítani a válaszok helyességét.|
| K08 | Megfelelő visszajelzés | A visszajelzés a válasz helyességétől függően. |
| K09 | Megoldás megadása | A hibás válasz esetén megmutatja a helyes megoldás módszerét. |
| K10 | Elakadás segítő | Tippek adása hogy milyen úton kezdje el (ha elakadna). |
| K11 | Tanárok segítése | Útmutató a tanároknak (tutorial). |


