// Styling
import { Logo, ThemeButton } from "../styles";
import {Link} from "react-router-dom"
import {lightlogo} from "src/lightlogo.png"
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Link to="/">
       <img src="lightlogo" alt="Girl in a jacket" width="20" height="20"className="navbar-brand"/>
       </Link>
      <div className="navbar-nav ml-auto">
        <Link to= "/products." className="nav-item" style={{ padding: "0.25em 1em" }}>
          Products
        </Link>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
