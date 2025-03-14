import logo from "./logo.svg";
import "./App.css";
import { cardsData } from "./data/cards.js";
import CardsList from "./components/CardsList/CardsList.jsx";

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <CardsList cards={cardsData} />
         </header>
      </div>
   );
}

export default App;
