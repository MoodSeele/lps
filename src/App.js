import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import DocSwiper from "./components/Swiper";
import Mt4 from "./components/Mt4";
import Brent from "./components/Brent";

function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}
      <DocSwiper />
      <Mt4 />
      <Brent />
    </>
  );
}

export default App;
