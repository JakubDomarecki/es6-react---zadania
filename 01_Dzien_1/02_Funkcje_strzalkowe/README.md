![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/02_Funkcje_strzalkowe/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

### Ważne!

W zadaniach z tego tematu, **nie należy** używać metody `for`. Należy korzystać z metod tablicowych.

---

W pliku `js/app.js` znajdują się funkcje napisane w standardowy sposób. Twoim zadaniem jest przerobienie ich na **funkcje strzałkowe**, tak aby ich wywołania nie powodowały błędów.


## Zadanie 2

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/02_Funkcje_strzalkowe/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Napisz **funkcję strzałkową** `getSecondMaxNumber(array)`, która jako argument przyjmuje tablicę.

Funkcja **ma zwrócić** drugą największą liczbę w tablicy.

Przykład:

```js
const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku
```


## Zadanie 3

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/02_Funkcje_strzalkowe/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Napisz **funkcję strzałkową** `runInterval(n)`, która jako parametr (`n`) przyjmie liczbę całkowitą od `1 - 10`.

Zmienna `n` ma mieć domyślną wartość `8` w razie wywołania funkcji bez żadnej wartości.

Wewnątrz funkcji uruchom interwał (`setInterval`) który ma wyświetlać napis "Hello" w konsoli co `500 ms`.

Napis ten powinien pojawić się określoną ilość razy - ustaloną przez parametr przesłany do funkcji.

Po osiągnięciu, np. 8 powtórzeń interwału, zostaje wyczyszczony.

Przykład:

```js
runInterval(3);

('Hello'); // wait 500 ms
('Hello'); // wait 500 ms
('Hello');

// Clear Interval
```


## Zadanie 4

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `01_Dzien_1/02_Funkcje_strzalkowe/04_Zadanie_4`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

### Część 1

Dopisz funkcję `generateLinks`, która na podstawie istniejącej tablicy z nazwami serwisów internetowych stworzy nową tablicę z linkami do tych stron.

Przykład:

Wejściowa tablica: `["google", "twitter", "facebook"]`  
Nowa tablica: `["https://google.com", "https://twitter.com", "https://facebook.com"]`

### Część 2

W metodzie `insertLinks()` wstaw wygenerowane adresy do listy o id `menu` w pliku `index.html`:

Przykład:

```html
<li><a href="https://google.com">https://google.com</a></li>
```
