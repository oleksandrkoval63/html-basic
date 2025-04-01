import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import About from "../../pages/About";
import Contacts from "../../pages/Contacts";

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/about" element={<About />}></Route>
         <Route path="/contact" element={<Contacts />}></Route>
         <Route path="*" element={<NotFound />}></Route>
      </Routes>
   );
};

export default AppRoutes;
