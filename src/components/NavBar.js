// Styling
import { Logo, ThemeButton,NavProduct } from "../styles";


const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo to="/">
       <img src="https://cdn.discordapp.com/attachments/797449550616068106/804257171373162526/dark-logo.png" width="300" height="300"alt="Girl in a jacket" className="navbar-brand"/>
       </Logo>
      <div className="navbar-nav ml-auto">
        <NavProduct to= "/products." className="nav-item" style={{ padding: "0.25em 1em" }}>
          Products
        </NavProduct>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
