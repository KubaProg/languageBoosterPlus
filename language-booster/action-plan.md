# Plan Nauki: Angular Typed Forms + PrimeNG

W ramach tego planu stworzymy zaawansowany formularz rejestracji/profilu użytkownika w aplikacji "Language Booster". Nauczymy się obsługi silnie typowanych formularzy (Angular 14+), integracji z komponentami PrimeNG oraz tworzenia niestandardowych walidatorów.

## Scenariusz: Profil Ucznia Language Booster
Stworzymy komponent `UserProfileComponent`, który pozwoli użytkownikowi ustawić swoje preferencje naukowe.

### Elementy Formularza:
1.  **Nazwa Użytkownika (`username`)**: `FormControl<string>`
    *   Walidacja: wymagane, min. 3 znaki.
    *   Komponent: `p-inputtext`.
2.  **Email (`email`)**: `FormControl<string>`
    *   Walidacja: wymagane, format email.
    *   Komponent: `p-inputtext`.
3.  **Poziom Języka (`level`)**: `FormControl<string | null>`
    *   Opcje: Beginner, Intermediate, Advanced.
    *   Komponent: `p-select` (lub `p-dropdown` w starszych wersjach).
4.  **Dzienny Cel Minut (`dailyGoal`)**: `FormControl<number>`
    *   Walidacja: wymagane, min. 5, max. 120.
    *   Komponent: `p-inputnumber`.
5.  **Preferowana Godzina Nauki (`studyTime`)**: `FormControl<string>`
    *   **Custom Validator**: Godzina musi być między 06:00 a 23:00.
    *   Komponent: `p-datepicker` (time only).
6.  **Zgoda na powiadomienia (`notifications`)**: `FormControl<boolean>`
    *   Komponent: `p-checkbox`.

---

## Kroki Realizacji:

### Krok 1: Przygotowanie i Konfiguracja
*   Import `ReactiveFormsModule` do projektu.
*   Dodanie niezbędnych modułów PrimeNG.
*   Stworzenie szkieletu komponentu `UserProfileComponent`.

### Krok 2: Definicja Silnie Typowanego Formularza
*   Stworzenie interfejsu/typu dla danych formularza.
*   Inicjalizacja `FormGroup` z użyciem `NonNullableFormBuilder`.
*   Zrozumienie różnicy między `FormControl` a `FormControl<string>`.

### Krok 3: Integracja z PrimeNG i Obsługa Błędów
*   Powiązanie pól formularza z UI PrimeNG.
*   Wyświetlanie komunikatów o błędach (np. `p-message` lub stylizacja `.ng-invalid`).

### Krok 4: Implementacja Custom Validatora
*   Stworzenie funkcji walidującej zakres godzinowy.
*   Dynamiczna walidacja zależna od innych pól (opcjonalnie).

### Krok 5: Reaktywność i Subskrypcje
*   Użycie `valueChanges` do reagowania na zmiany w czasie rzeczywistym.
*   Prezentacja podglądu danych "na żywo".

---

## Cel Końcowy:
Będziesz potrafił zbudować formularz, który jest:
1.  **Bezpieczny typowo**: TypeScript będzie wiedział, jakie dane są w formularzu.
2.  **Estetyczny**: Wykorzystamy pełną moc PrimeNG.
3.  **Zwalidowany**: Kompleksowa obsługa błędów, w tym własna logika biznesowa.

Czy taki plan Ci odpowiada? Jeśli tak, zaczynamy od **Kroku 1**.