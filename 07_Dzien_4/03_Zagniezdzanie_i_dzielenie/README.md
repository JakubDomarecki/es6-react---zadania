![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `07_Dzien_4/03_Zagniezdzanie_i_dzielenie/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz funkcyjny komponent `CurrencyConverter`, który przyjmuje przez `props`:

- sygnaturę waluty bazowej `from`
- sygnaturę waluty kwotowanej `to`
- kwotę `value`
- przelicznik `rate`

Komponent ma zwracać taką przykładową strukturę HTML:

```html
<div><strong>200.00</strong> EUR => <strong>224.55</strong> USD</div>
```

dla wywołania:

```js
<CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
```

Stwórz również komponent `App`, który będzie renderował **trzy komponenty** `CurrencyConverter`, przekazując różne wartości w `props`.


## Zadanie 2

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `07_Dzien_4/03_Zagniezdzanie_i_dzielenie/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

W pliku do zadania znajduje się komponent `Header` wyświetlający nagłówek strony internetowej.

Jest on napisany w sposób klasowy. Przepisz go oraz komponent `App` na działające **funkcje**.
