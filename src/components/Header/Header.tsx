import serialFriendsLogo from "../../assets/serialFriendsLogo.svg";
import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="title-container">
        <img
          className="header-logo"
          src={serialFriendsLogo}
          alt="Serial Friends Logo"
        />
        <h1 className="header-title">Serial Friends</h1>
      </div>
      <h2 className="header-subtitle">Filter your friends</h2>
    </header>
  );
};

export default Header;
