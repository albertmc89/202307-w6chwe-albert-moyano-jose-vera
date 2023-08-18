import serialFriendsLogo from "../../assets/serialFriendsLogo.svg";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <img src={serialFriendsLogo} alt="Serial Friends Logo" />
      <h1>Serial Friends</h1>
    </header>
  );
};

export default Header;
