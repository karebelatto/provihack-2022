import Logo from "../../res/Logo_2.svg";

import "./styles.css";

function Footer() {
  return (
    <div className="foot-bar-container">
      <div className="foot-logo">
        <img src={Logo} />
      </div>
    </div>
  );
}

export default Footer;
