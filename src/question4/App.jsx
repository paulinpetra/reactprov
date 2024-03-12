// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import First from "./FirstChild";
import Second from "./SecondChild";
function App() {
  return (
    <ThemeProvider>
      <h1>Theme Toggle</h1>
      <ThemeToggle />
      <h1>First Child Component</h1>
      <First />
      <h1>Second Child Component</h1>
      <Second />
    </ThemeProvider>
  );
}

export default App;
