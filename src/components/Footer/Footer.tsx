import "./Footer.css";

const Footer = (): React.ReactElement => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <span aria-label="company">Serial Friends S.L.</span>
        <span aria-label="street">C/ Diputació 37, Barcelona</span>
        <span aria-label="phone">+34 651 447 892</span>
      </div>
    </footer>
  );
};

export default Footer;
