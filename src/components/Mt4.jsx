import "./Mt4.css";
import MT4 from "../assets/images/mt4/mt-04.svg";
import Apple from "../assets/images/main/apple.svg";
import Android from "../assets/images/main/android.svg";

const Mt4 = () => {
  return (
    <div className="main-container">
      <div className="mt4">
        <img src={MT4} alt="MT4" />
        <p>
          Download MT4 for iOS/Android now and gain access
          <br className="only-pc" /> to a wide range of features & over 2100
          derivatives in
          <br className="only-pc" />
          <u> Metals, Energy, Stocks, Indices, Futures</u> & more!
        </p>

        <div className="social">
          <img src={Apple} alt="Apple" className="apple" />
          <img src={Android} alt="Android" className="android" />
        </div>
      </div>
    </div>
  );
};

export default Mt4;
