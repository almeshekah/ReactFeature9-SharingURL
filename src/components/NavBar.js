// Styling
import { Logo, ThemeButton } from "../styles";
import {Link,NavLink} from "react-router-dom"
import {lightlogo} from "../ligtlogo"
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Link to="/">
       <img src={lightlogo} alt="Girl in a jacket" width="20" height="20"className="navbar-brand"/>
       </Link>
      <div className="navbar-nav ml-auto">
        <NavLink to= "/products." className="nav-item" style={{ padding: "0.25em 1em" }}>
          Products
        </NavLink>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
