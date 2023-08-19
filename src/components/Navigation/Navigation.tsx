import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = (): React.ReactElement => {
  return (
    <nav className="main-navigation">
      <ul className="navigation-list">
        <li>
          <NavLink className="navigation-list" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation-list" to="/NewRelationshipPage">
            Add new relationship
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
