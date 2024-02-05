![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `06_Dzien_3_-_Praca_domowa/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Po załadowaniu się strony wyświetl użytkownikowi dwa razy `prompt(text)`, zachęcając do podania imienia i wieku. Odpowiedzi przechowuj w odpowiednich zmiennych.

Następnie za pomocą React wyrenderuj w elemencie o id `app` element `h1`, w którym będzie się wyświetlało:

```
{firstName} is {age} years old
```

z odpowiednimi danymi.


## Zadanie 2

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `06_Dzien_3_-_Praca_domowa/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz tablicę reprezentującą 5 przykładowych kolorów i przechowaj ją w zmiennej.

Następnie za pomocą React wyrenderuj w elemencie o id `app` element `div`, w którym będą się wyświetlały wszystkie kolory w jednej linii, np.

```html
<div>Niebieski, Zielony, Żółty</div>
```

Wszystkie operacje wykonuj bezpośrednio w wyrażeniu w danym tagu JSX. Przyda Ci się metoda `join(separator)`.


## Zadanie 3

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `06_Dzien_3_-_Praca_domowa/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

W kodzie stwórz zmienną z dowolnym rozmiarem (poprawny rozmiar CSS), np.:

```JavaScript
const size = "500px";
```

Następnie za pomocą React wyrenderuj w elemencie o id `app` element `div` z następującym stylem:

- Szerokość: ta ze zmiennej `size`,
- Wysokość: ta ze zmiennej `size`,
- Kolor: niebieski.

Wszystkie operacje wykonuj bezpośrednio w wyrażeniu w danym tagu JSX. Każdorazowa zmiana tej zmiennej powinna zmienić wielkość `div`-a.
