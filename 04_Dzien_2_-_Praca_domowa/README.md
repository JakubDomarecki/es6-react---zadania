![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `04_Dzien_2_-_Praca_domowa/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz super klasę o nazwie `Insect`. Stwórz również dwie klasy, które będą dziedziczyły z klasy bazowej: `Centipede` oraz `Spider`.

W klasie bazowej `Insect` stwórz konstruktor, który będzie ustawiał imię owada oraz ilość jego nóg.

Stwórz również metodę/metody `getLegs()`, która wypisuje ile nóg, ma dane zwierzę w następujący sposób:

```plain

Cześć mam na imię Lucy jestem stonogą i mam 20 nóg

Cześć mam na imię Majkel jestem pająkiem i mam 8 nóg

```

Wstaw te teksty w odpowiednie paragrafy na stronie: `#info-spider`, `#info-centipede`.


## Zadanie 2

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `04_Dzien_2_-_Praca_domowa/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz funkcję `saySomething()` (Arrow function) i jako parametr przekaż jej następujący obiekt:

```JavaScript
const wally = {
  name: "Wally",
  age: 2,
  profession: "naprawianie innych robotów"
}
```

Następnie za pomocą destrukturyzacji podstaw wszystkie 3 atrybuty obiektu pod takie same nazwy zmiennych. Następnie
zwróć string w postaci:

```HTML
"Cześć mam na imię Wally, mam 2 lata i moim zajęciem jest naprawianie innych robotów."
```

i wyświetl go w konsoli.


## Zadanie 3

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `04_Dzien_2_-_Praca_domowa/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz funkcję `sayHello`, której celem będzie wypisanie `Hello` dla wszystkich jej parametrów. Parametry powinny być stringami. Wykorzystaj Rest/Spread operator.

Spróbuj posłużyć się jedną z metod (`forEach`, `map` lub `reduce`).

Przykładowe wywołania:

```JavaScript
sayHello("Ania", "Kasia", "Steve", "Bogumił");
```

Wynik w konsoli:

```HTML
Hello: Ania

Hello: Kasia

Hello: Steve

Hello: Bogumił
```
