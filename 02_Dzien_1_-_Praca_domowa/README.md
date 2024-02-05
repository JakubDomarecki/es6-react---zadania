![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `02_Dzien_1_-_Praca_domowa/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz funkcję (Arrow function) o nazwie `getNumbers`, która przyjmuje jako parametr tablicę z liczbami. Następnie mnoży każdy element tablicy przez dwa i zwraca wynik.

Spróbuj posłużyć się jedną z metod (`forEach`, `map` lub `reduce`).


## Zadanie 2

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `02_Dzien_1_-_Praca_domowa/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz funkcję o nazwie `Weather`, która będzie konstruktorem. Stwórz obiekt na bazie tego konstruktora, któremu przekaż tablicę z 3 pomiarami temperatury w ciągu dnia. Rozszerz konstruktor `Weather` o metodę `getAvgTemperature` (dodaj ją do prototypu), której celem jest zwrócenie średniej temperatury dnia. Wstaw tą wartość do elementu o id `avg-temp`.

Spróbuj posłużyć się jedną z metod (`forEach`, `map` lub `reduce`).

Przykładowe wywołania:

```JavaScript
const day1 = new Weather([-2, 4.4, 3]);

console.log( day1.getAvgTemperature());
```
