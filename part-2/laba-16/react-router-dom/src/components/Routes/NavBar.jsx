import { Link } from "react-router-dom";

const NavBar = () => {
   return (
      <div>
         <nav>
            <ul>
               <li>
                  <Link to="/">Головна</Link>
               </li>
               <li>
                  <Link to="/about">Про нас</Link>
               </li>
               <li>
                  <Link to="/contact">Контакти</Link>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default NavBar;
