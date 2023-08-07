import "./Main.css";
import Ellipse from "../assets/images/main/ellipse.svg";
import IMG1 from "../assets/images/main/IMG_4065_1.svg";
import Phone from "../assets/images/main/phone_1.svg";
import IMG2 from "../assets/images/main/IMG_4064_2.svg";
import Ellipse_1 from "../assets/images/main/Ellipse_1841.svg";
import Apple from "../assets/images/main/apple.svg";
import Android from "../assets/images/main/android.svg";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main">
        <div className="main-ellipse">
          <img src={Ellipse} alt="Ellipse" className="ellipse" />
          <div className="ellipse-content">
            <p>
              Looking for a trading platform
              <br /> that brings your Metatrader
              <br /> accounts to your fingertips?
            </p>
            <h2>
              Look no further than
              <br /> the App!
            </h2>
          </div>
        </div>

        <div className="main-phones">
          <div className="phones-box">
            <img src={IMG1} alt="IMG1" className="IMG1" />
            <img src={Phone} alt="Phone" className="phone" />
            <img src={IMG2} alt="IMG2" className="IMG2" />
          </div>
        </div>

        <div className="main-social">
          <img src={Ellipse_1} alt="Ellipse_1" className="ellipse_1" />
          <div className="content-social">
            <p>
              With the MT4 and MT5 platforms included, our app offers
              unparalleled convenience and functionality for traders on-the-go.
            </p>
            <img src={Apple} alt="Apple" className="apple" />
            <img src={Android} alt="Android" className="android" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
