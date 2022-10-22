import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="app-header">English Dictionary</header>
        <main>
          <Dictionary defaultKeyword="nature" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
