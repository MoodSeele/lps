import "./Header.css";
import Logo from "../assets/images/header/subtract.svg";
import HeaderBG from "../assets/images/header/header_bg.svg";
import HeaderSP from "../assets/images/header/header-sp.svg";
import MT from "../assets/images/header/mt.svg";
import MT4 from "../assets/images/header/mt4.svg";
import Apple from "../assets/images/main/apple.svg";
import Android from "../assets/images/main/android.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="main-container">
        <img src={Logo} alt="logo" className="logo" />
        <div>
          <img src={HeaderBG} alt="HeaderBG" className="HeaderBG only-pc" />
          <img src={HeaderSP} alt="HeaderSP" className="HeaderBG only-sp" />
          <div className="content">
            <h1>
              Trade Your
              <img src={MT} alt="MT" className="mt" />
              <br className="only-sp" />
              MetaTrader
              <br className="only-sp" />
            </h1>
            <h1>
              Accounts in One
              <br className="only-sp" /> App!
            </h1>
            <img src={MT4} alt="MT4" className="mt4 only-pc" />

            <div className="download only-sp">
              <img src={Apple} alt="Apple" className="apple" />
              <br />
              <img src={Android} alt="Android" className="android" />

              <p>
                Don't wait - download the App with
                <br /> MT4/MT5 included now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
