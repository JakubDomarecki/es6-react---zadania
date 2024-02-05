![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/04_Export_i_import/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Zainstaluj bibliotekę `date-fns` z repozytorium NPM.

Następnie użyj metody `formatDistanceToNow` do której przekaż jako parament obiekt `new Date(2018, 4, 5)`.

Metoda ta wyświetla w formacie tekstowym ile czasu upłynęło od podanej daty do teraz -> [https://date-fns.org/v2.6.0/docs/formatDistanceToNow](https://date-fns.org/v2.6.0/docs/formatDistanceToNow).

Wynik sprawdź w konsoli.


## Zadanie 2

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/04_Export_i_import/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

W folderze z zadaniem znajdziesz 3 pliki:

- `Polygon.js` - zawierający klasę opisującą figurę geometryczną (wielokąt)
- `Square.js` - zawierający klasę dziedziczącą po klasie polygon
- `app.js` - w którym tworzony jest obiekt na bazie klasy Square.

Twoim zadaniem jest połączenie plików w taki sposób, aby `Square` widział `Polygon`, a plik `app.js` widział klasę `Square`.
