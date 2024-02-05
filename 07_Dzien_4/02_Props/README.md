![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `07_Dzien_4/02_Props/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz komponent `Hello`. Do `props` przekazuje mu się imię (`name`) oraz nazwisko (`surname`).

Powinien on wyświetlać w elemencie `h1` napis "Hello, name surname" z odpowiednimi danymi. Wyrenderuj go na stronie podając w atrybutach do `props` swoje dane.

Zadanie wykonaj w **dwóch wersjach**:

- Najpierw komponentem w wersji funkcyjnej,
- Oraz tym samym komponentem w wersji zbudowanej z klasy ES6.


## Zadanie 2 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `07_Dzien_4/02_Props/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz komponent o nazwie `AddNumbers`. Do props przekaż mu liczbę A (`numberA`) oraz liczbę B (`numberB`).

Powinien on wyświetlać w elemencie `h1` **sumę tych dwóch liczb**. Wyrenderuj go na stronie podając w atrybutach do props przykładowe liczby.

Zadanie wykonaj w **dwóch wersjach**:

- Najpierw komponentem w wersji funkcyjnej,
- Oraz tym samym komponentem w wersji zbudowanej z klasy ES6.


## Zadanie 3

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `07_Dzien_4/02_Props/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz komponent o nazwie `Sum`. Do `props` przekaż mu tablicę liczb (`numbers`).

Powinien on wyświetlać w elemencie `h1` sumę wszystkich podanych liczb. Możesz do tego wykorzystać znany Ci `reduce()`. Wyrenderuj go na stronie podając w atrybucie do `props` przykładową tablicę liczb.

Należy wykonać to zadanie w oparciu o komponent funkcyjny.


## Zadanie 4

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `07_Dzien_4/02_Props/04_Zadanie_4`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Zmodyfikuj komponent `LikeBox` z poprzedniego tematu (_01_Podstawy/02_Zadanie_2_). Niech przyjmuje w `props` początkową liczbę polubień (`likes`). Wyrenderuj go na stronie podając w atrybucie do `props` przykładową liczbę polubień.


## Zadanie 5

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `07_Dzien_4/02_Props/05_Zadanie_5`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Zmodyfikuj komponent `Menu` z poprzedniego tematu (_01_Podstawy/03_Zadanie_3_). Niech przyjmuje on w props tablicę obiektów z pozycjami menu (`menu`).

Obiekty mają być w takiej formie:

```js
{
  url: 'adres_odnośnika',
  text: 'tekst linku'
}
```

Używając `map()` stwórz z tych obiektów elementy `li`, które będą w głównym elemencie `ul`.

Wyrenderuj go na stronie podając w atrybucie do props następujący atrybut menu:

```js
[
  {
    url: '/',
    text: 'Strona główna',
  },
  {
    url: '/blog',
    text: 'Blog',
  },
  {
    url: '/cennik',
    text: 'Cennik',
  },
  {
    url: '/kontakt',
    text: 'Kontakt',
  },
];
```
