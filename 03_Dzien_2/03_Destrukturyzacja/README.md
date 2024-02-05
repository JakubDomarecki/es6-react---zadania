![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/03_Destrukturyzacja/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Podstaw pod zmienne pierwszą i ostatnią wartość następującej tablicy: `[ "snow", "rain", "sun" ]`. Wypisz zmienne w konsoli.


## Zadanie 2 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/03_Destrukturyzacja/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz obiekt `slider`, taki jak poniżej:

```js
const slider = {
  type: 'infinite',
  numberOfItems: 10,
  center: true,
  autoStart: true,
};
```

Podstaw do zmiennych `type` oraz `autoStart` odpowiednie wartości z obiektu `slider`.


## Zadanie 3

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/03_Destrukturyzacja/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz tablicę z 3 imionami. Następnie każde imię przypisz do kolejnej zmiennej np. `name1`, `name2`, `name3`. Wykorzystaj destrukturyzację.


## Zadanie 4

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/03_Destrukturyzacja/04_Zadanie_4`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz funkcję `generateRandomNumbers()`, której zadaniem jest wylosowanie i zapisanie do tablicy 6 liczb (0-5) oraz zwrócenie tej tablicy.

Zapisz do zmiennych pierwszą i trzecią liczbę ze zwróconej tablicy. Wyświetl te zmienne w konsoli.


## Zadanie 5

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `03_Dzien_2/03_Destrukturyzacja/05_Zadanie_5`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz funkcję `showAnimal()`, która przyjmie obiekt:

```js
const cat = {
  name: 'Mruczek',
  age: 10,
  getVoice: () => 'miau miau',
};
```

I wyświetli w konsoli: `Kot ${name} ma ${catAge} lat i robi ${getVoice()}`.

#### Warunki

- Zmienna `catAge` powinna zawierać wartość z pola `age`
- Przypisanie wartości kluczy obiektu do zmiennych powinno nastąpić już w procesie deklaracji funkcji (nie w jej ciele)
