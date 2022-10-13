import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}
