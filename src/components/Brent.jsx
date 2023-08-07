import "./Brent.css";
import MT4 from "../assets/images/header/mt4.svg";
import Ellipse from "../assets/images/Brent/ellipse-1842.svg";
import Phones from "../assets/images/Brent/brent.png";
import Apple from "../assets/images/main/apple.svg";
import Android from "../assets/images/main/android.svg";

function Brent() {
  return (
    <div className="main-container">
      <div className="brent-content">
        <div className="brent-ellipse">
          <img src={Ellipse} alt="Ellipse" className="ellipse" />
          <div className="mt4">
            <p>
              With the App, you can take your trading to the next level. Whether
              you're an experienced trader or just starting out, our platform
              offers the features and functionality you need to trade like a
              pro!
            </p>
            <div className="social only-sp">
              <img src={Apple} alt="Apple" className="apple" />
              <img src={Android} alt="Android" className="android" />
            </div>
            <p className="social-brand only-sp">
              Don't wait - download the App with
              <br /> MT4/MT5 included now!
            </p>
            <img src={MT4} alt="MT4" className="only-pc" />
          </div>
        </div>
        <div>
          <img src={Phones} alt="Phones" className="phones" />
        </div>
      </div>
      <button className="help-section">
        Need Help? <br className="only-sp" /> Visit our <u>Help Section</u>
      </button>
    </div>
  );
}

export default Brent;
