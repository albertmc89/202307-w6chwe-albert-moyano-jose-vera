import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = (): React.ReactElement => {
  return (
    <footer className="footer">
      <ul className="footer-navigation">
        <li>
          <NavLink className="navigation__home" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation__create" to="/NewRelationshipPage">
            Add new relationship
          </NavLink>
        </li>
      </ul>
      <div className="footer__info">
        <span aria-label="company">Serial Friends S.L.</span>
        <span aria-label="street">C/ Diputació 37, Barcelona</span>
        <span aria-label="phone">+34 651 447 892</span>
      </div>
    </footer>
  );
};

export default Footer;
