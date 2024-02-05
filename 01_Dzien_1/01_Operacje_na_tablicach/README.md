![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/01_Operacje_na_tablicach/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Mając do dyspozycji tablicę z nazwami miast, zwróć i wypisz nową tablicę z ilością znaków w nazwie każdego miasta.

Na przykład dla tablicy miast:

```js
const cities = ['Kraków', 'Olsztyn', 'Szczecin', 'Ostrów Wielkopolski'];
```

Wynik powinien być następujący:

```js
[6, 7, 8, 19];
```


## Zadanie 2

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/01_Operacje_na_tablicach/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Mając do dyspozycji tablicę ze zwierzętami, wypisz je kolejno w konsoli.

```js
const animals = ['cat', 'shrimp', 'giraffe'];
```


## Zadanie 3

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/01_Operacje_na_tablicach/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Mając do dyspozycji tablicę z latami, stwórz nową tablicę, która będzie zawierała wiek osoby urodzonej danego roku. Wyświetl nową tablicę w konsoli.

```js
const years = [1995, 1856, 2014, 1987];
```


## Zadanie 4

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/01_Operacje_na_tablicach/04_Zadanie_4`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Mając do dyspozycji tablicę z produktami, wyświetl na stronie tylko te które:

- należą do kategorii `car`,
- ich stan jest `new` i
- cena nie przekracza `45000`.

Wszystkie produkty powinny znaleźć się na liście `<ul id="all-products"></ul>`.
Przefiltrowane powinny pojawić się w `<ul id="filtered-products"></ul>`.

Każdy produkt powinien być elementem `li` w przykładowej strukturze:

```html
<li><strong>Nazwa produktu</strong><span>, cena produktu - stan</span></li>
```

Tablica z produktami znajduje się w pliku `js/app.js`.


## Zadanie 5 - dodatkowe

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/01_Operacje_na_tablicach/05_Zadanie_5_-_dodatkowe`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz funkcję `randomize(param1, param2, callback)`, która jako parametry przyjmuje:

- Dowolne dwie liczby - określające przedział między jakim będziemy losować liczbę
- funkcje anonimową, której zadaniem jest wypisanie wylosowanej liczby.
- niech funkcja `randomize()` sprawdza przed wywołaniem callback czy rzeczywiście jest ona funkcją.
