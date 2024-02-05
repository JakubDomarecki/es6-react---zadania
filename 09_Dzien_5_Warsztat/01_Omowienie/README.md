![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `09_Dzien_5_Warsztat/01_Omowienie/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

## Na czym polega warsztat?

## Rozeznanie

Jeśli uruchomisz Webpack Dev Server, zobaczysz, że mamy dwa kalkulatory. Pierwszy to kalkulator binarny. Drugi to kalkulator dziesiętny.

Kalkulator binarny jest już napisany, niestety dziesiętny jeszcze nie. **Twoim zadaniem będzie stworzenie kalkulatora dziesiętnego**.

## Zaplecze

W folderze `js` znajdziesz wszystkie potrzebne pliki. Plikiem wejściowym jest plik `app.js`. To on zostaje przetworzony przez Webpack, który na jego podstawie tworzy plik `out.js`. Plik `out.js` jest dodany do pliku `index.html`.

## Jak powinny działać kalkulatory?

Oba kalkulatory działają w podobny sposób. Możemy dodawać tylko dwie liczby. Po przepełnieniu następuje przeniesienie liczby.

### Zasady dodawania liczb binarnych.

W dodawaniu liczb binarnych należy pamiętać o następujących zasadach:

- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 0 = 1
- 1 + 1 = 10 czyli "0" zostawiamy, a "1" przenosimy o jedną pozycję dalej.

Przykład:

```plain
Liczba1: 0 1 1 0 1
Liczba2: 0 0 1 0 1
Wynik:   1 0 0 1 0
```

Jeśli wciąż nie rozumiesz, zajrzyj tutaj: [http://eduinf.waw.pl/inf/alg/006_bin/0012.php](http://eduinf.waw.pl/inf/alg/006_bin/0012.php).
Rysunkowe wyjaśnienie: [http://www.wikihow.com/Add-Binary-Numbers](http://www.wikihow.com/Add-Binary-Numbers)

## Zasady dodawania liczb dziesiętnych.

W dodawaniu liczb dziesiętnych należy również pamiętać o przeniesieniu.

## Twoje zadanie

Twoim zadaniem jest napisanie kalkulatora dziesiętnego oraz połączenie wszystkich plików tak jak na schemacie poniżej.

![Schemat class](images/abstract_class.jpg)

### Rozbijmy to na kroki:

**1. Dokładne zapoznanie się dostępnym z kodem źródłowym.**

- kalkulator binarny został już napisany przez poprzedniego programistę. (Spójrz do pliku `BinaryCalculator`)
- klasa abstrakcyjna również i to po niej dziedziczy kalkulator binarny. (Spójrz do pliku `Calculator`)

Omówmy te metody od początku:

- `constructor()` - jeśli zajrzymy do naszej klasy abstrakcyjnej (jeżeli nie pamiętasz czym jest klasa abstrakcyjna zajrzyj do slajdów z ES6) `Calculator` to widzimy, że coś już się w nim dzieje. Jak wiesz, po stworzeniu obiektu automatycznie jest wywoływany właśnie konstruktor. Zatem wszystkie ustawienia początkowe możemy zainicjować tutaj. Omówmy go dokładnie:

```JavaScript
//Podczas tworzenia obiektu możemy ustawić mu nazwę
this.name = selectorName;
//Znajdujemy również odpowiedni selektor
this.$calculatorDOMElement = document.querySelector(selectorName);

//Tworzymy 3 tablice odpowiedzialne za:
this.firstNumberArray = []; // przechowywanie pierwszej liczby
this.secondNumberArray = []; // przechowywanie drugiej liczby
this.resultNumberArray = [0,0,0,0,0,0,0,0,0]; // przechowywanie wyniku

//Inicjalizujemy eventy - czyli start
this.initEvents();
```

- `initEvents()` - to metoda, która ustawia event click, na każdym divie przetrzymującym cyfrę. W przypadku kalkulatora binarnego po kliknięciu diva od razu zmienia się ona na przeciwną, z 0 na 1 i na odwrót. Prosta sytuacja, bo w systemie binarnym mamy tylko dwie liczby. Spójrz na metodę `initEvents()` zaimplementowaną w klasie abstrakcyjnej. Co ona robi? Po kliknięciu cyfry wywołuje metodę `changeNumber()` -> przejdźmy zatem do tej metody.

- `changeNumber()` - ta metoda jest również zdefiniowana w klasie abstrakcyjnej `Calculator`, ale nic nie robi. Jeśli zajrzysz do niej, zauważysz informację, że należy ją zaimplementować w klasie dziedziczącej. W klasie `BinaryCalculator` jest już zaimplementowana i działa tak, że zwija lub rozwija dany element DOM z liczbą. Zauważ również, że po zwinięciu/rozwinięciu elementu zostają wywołane kolejne dwie metody `checkNumber()` oraz `updateResult()`

- `checkNumber()` - ta metoda jest już stworzona w klasie abstrakcyjnej. Jej zadanie to pozbieranie wartości (cyfr) z elementów DOM i wysłanie ich do metody `add()`, a także jak zauważysz podstawienie wyniku, który zwróci metoda ` add()` pod tablicę `this.resultNumberArray`.

- `add()` - każdy kalkulator będzie mógł dodawać tylko dwie liczby. Liczby mogą być 8 cyfrowe. Cały wynik jest zapisywany w tablicy. Tablica z wynikiem jest 9 cyfrowa. Dlaczego? Ponieważ w przypadku wpisania przez użytkownika samych cyfr 1 wynik będzie o jedną cyfrę większy. Spójrz:

```JavaScript
Liczba1:  1 1 1 1 1 1 1 1
Liczba2:  1 1 1 1 1 1 1 1
Wynik:  1 1 1 1 1 1 1 1 0
```

Po dodaniu dwóch liczb i zwróceniu poprawnego wyniku w formie tablicy. Zostaje on zapisany do `this.resultNumberArray`. Następnie jak pamiętasz metoda `initEvents()` wywoływała dwie inne metody: `checkNumber()` - którą już omówiliśmy oraz `updateResult()`. Przejdź zatem do niej.

- `updateResult() `- zadaniem tej metody jest zaktualizowanie wyniku na stronie. Wynik mamy przechowywany w tablicy `this.resultNumberArray`, więc na jej podstawie możemy wypełnić elementy DOM, określonymi wartościami.

**2. Napisanie kalkulatora dziesiętnego**

1. Na podstawie schematu klas (rysunek wyżej), stwórz odpowiednie metody oraz konstruktor w klasie `DecCalculator`.

1. W pliku `app.js` importuj odpowiednią klasę oraz stwórz obiekt dla kalkulatora dziesiętnego.

1. **Zmiana liczb** - Zmiana liczb w kalkulatorze binarnym polegała na zmianie tylko dwóch liczb. Niestety nie możemy w ten sam sposób zmieniać cyfr w systemie dziesiętnym, gdyż byłoby to bardzo nie wygodne. (Np. gdyby ktoś chciał ustawić cyfrę 9 musiałby 9 razy klikać).
   Lepszym rozwiązaniem będzie pozwolenie użytkownikowi na wpisanie liczby z klawiatury.
   Nadpisz metodę `changeNumber()` w klasie `DecCalculator`.
   Najprostszym sposobem będzie posłużenie się atrybutem **contenteditable**. Dodaj go do klikniętego elementu (z klasą active) jako atrybut i ustaw mu wartość true. Możesz również wywołać na tym elemencie focus() np. `element.focus();`

1. **Nadpisanie metody initEvents()** Po wpisaniu liczby, nic się nie wydarzy, ponieważ musimy czekać na użytkownika. W związku z tym dobrze by było, gdyby to użytkownik mógł poinformować kalkulator, że już skończył wpisywać liczby i że chce je dodać.
   Ustawmy zatem event click na znaku dodawania (na plusie). A gdzie inicjujemy wszystkie eventy? Tak, oczywiście w klasie `initEvents()`. Wejdźmy zatem do niej (w kalkulatorze dziesiętnym).
   Chcemy, aby event click był ustawiony, ale chcemy również przy kalkulatorze dziesiętnym dodać dodatkowy event click na znaku dodawania. Co musimy zrobić? Musimy rozszerzyć tą metodę. Pamiętasz jak wywołać metodę z klasy abstrakcyjnej?

Po rozszerzeniu dopisujemy nowy event, które po kliknięciu plusa wywoła metodę `checkNumber()` oraz `updateResult()`.

1. **Dodawanie liczb dziesiętnych** Jeżeli użytkownik kliknie plus, powinno nastąpić dodanie liczb i update wyniku. Jeśli spojrzysz na metodę `checkNumber()` przypomnisz sobie, że wywołuje ona metodę `add()`, którą musisz napisać dla kalkulatora dziesiętnego. Spójrz na kalkulator binarny i na tej podstawie stwórz własny algorytm, który doda dwie liczby dziesiętne. Pamiętaj o przeniesieniu.

1. **Zmiana wyniku** - Po kliknięciu naszego plusa oprócz dodania dwóch liczb jest wywołana jeszcze metoda `updateResult()`. Musimy ją nadpisać w kalkulatorze dziesiętnym. Jednym ze sposobów będzie sprawdzanie tablicy `this.resultNumberArray` pobieranie z niej wartości i wstawianie w odpowiednie miejsce w elemencie DOM.

## Dodatkowe metody

1. Walidacja wprowadzanych przez użytkownika znaków do kalkulatora dziesiętnego. Zauważ, że w przypadku kalkulatora dziesiętnego użytkownik może wprowadzić w miejsce, gdzie powinna być liczba cokolwiek. To nie jest pożądana sytuacja. Nasz kalkulator nie potrafi dodawać niczego innego poza liczbami dziesiętnymi.
   Stwórz metodę, która będzie informować użytkownika, że wpisuje zły znak. Pozwól mu wprowadzać tylko jedną cyfrę na jedno pole.

1. Tooltip informujący użytkownika, gdzie ma kliknąć po wpisaniu cyfry, aby zobaczyć wynik. Użytkownik po wpisaniu liczby powinien od razu wiedzieć co zrobić dalej. Przydałby się niewielki tooltip nad znakiem dodawania, mówiący użytkownikowi co ma zrobić. Stwórz metodę, wyświetlającą tooltip. Ustaw odpowiedni event.
