import Logo from "../../res/Logo.svg";
import { NavigationContainer } from "./NavigationContainer";

import "./styles.css";

function NavigationBar() {
  return (
    <div className="nav-bar-container">
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className="nav-options">
        <NavigationContainer />
      </div>
    </div>
  );
}

export default NavigationBar;
