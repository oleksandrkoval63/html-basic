import logo from "../../logo.svg";
import styles from "./Header.css";

const Header = () => {
   return (
      <header className={styles.header}>
         <img src={logo} className="App-logo" alt="logo" />
         <h2>Це заголовок сайту</h2>
      </header>
   );
};

export default Header;
