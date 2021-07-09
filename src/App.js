import logo from "./logo.svg";
import "./App.css";
import Nav from "./nav/nav.js";
import Carousel from "./carousel/carousel.js";
import Smartphone from "./smartphone/smartphone.jsx";
import Laptop from "./laptop/laptop.jsx";
import Promotion from "./promotion/promotion.jsx";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Carousel></Carousel>
      <Smartphone></Smartphone>
      <Laptop></Laptop>
      <Promotion></Promotion>
    </div>
  );
}

export default App;
