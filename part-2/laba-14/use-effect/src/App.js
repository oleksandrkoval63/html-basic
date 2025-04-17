import logo from "./logo.svg";
import "./App.css";
import ColorBlock from "./components/ColorBlock/ColorBlock";

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ColorBlock />
         </header>
      </div>
   );
}

export default App;
