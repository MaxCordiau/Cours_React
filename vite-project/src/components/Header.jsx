import { Link } from "react-router-dom";
import logo from "../assets/img/JL.png"

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
      </nav>
    </header>
  );
}
export default Header;