![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/02_Operatory_rest_i_spread/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz dwie tablice `namesA` i `namesB`. Pierwsza niech zawiera same stringi.
Druga niech zawiera dwa dowolne stringi, a od trzeciego miejsca te same elementy co tablica `namesA`. Ostatnie dwa elementy tablicy `namesB` to niech będą "Jan" i "Karol".

Przykład:

```plain
["Zosia", "Marcin", "Kamil"] // Tablica 1
["Ala", "Puszek", "Zosia", "Marcin", "Kamil", "Jan", "Karol" ] // Tablica 2
```


## Zadanie 2 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/02_Operatory_rest_i_spread/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz funkcję o nazwie `getAverage`, która może przyjąć dowolną liczbę parametrów (w postaci liczb) i która zwraca średnią arytmetyczną tych liczb.

Przykład wywołania:

```js
getAverage(2, 4, 5, 6, 7, 79);
```


## Zadanie 3

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/02_Operatory_rest_i_spread/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz zmienną przechowującą Twoje imię. Za pomocą **operatora rozproszenia** zapisz każdą literkę do tablicy.
Wypisz tablicę w konsoli.


## Zadanie 4

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/02_Operatory_rest_i_spread/04_Zadanie_4`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz dwie tablicę `fruits` i `vegetables`. Następnie stwórz trzecią tablicę `mix`, która będzie połączeniem obu poprzednich tablic. Użyj **operator rozproszenia**.


## Zadanie 5

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/02_Operatory_rest_i_spread/05_Zadanie_5`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

W pliku znajduje się obiekt `state`. Twoim zadaniem jest stworzenie **jego kopii** w zmiennej `stateCopy` wraz ze zmianą dwóch właściwości:

- `availableYears` - powinno teraz zawierać tylko lata do `1999` włącznie (użyj odpowiedniej metody tablicowej)
- `isUserLogged` - powinno mieć wartość `true`

Na koniec sprawdź w konsoli czy obiekt `state` pozostał bez zmian.
