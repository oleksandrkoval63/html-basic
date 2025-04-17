import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Routes/NavBar";
import AppRoutes from "./components/Routes/AppRoutes";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <AppRoutes />
            <NavBar />
         </BrowserRouter>
      </div>
   );
}

export default App;
