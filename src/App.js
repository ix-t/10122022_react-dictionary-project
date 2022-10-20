import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="app-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
      </div>
    </div>
  );
}
