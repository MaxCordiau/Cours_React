import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/JL.png"
import "../styles/Header.css"

function Header() {
  return (
    <header>
      {/* appel la fonction Link pour rendre l'image clickable */}
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <nav>
          <ul>
            <li>
              <NavLink to="/"><a>Home</a></NavLink>
            </li>
            <li>
              <NavLink to="/about"><a>About</a></NavLink>
            </li>
            <li>
              <NavLink to="/Meteo"><a>Météo</a></NavLink>
            </li>
          </ul>
      </nav>
    </header>
  );
}
export default Header;