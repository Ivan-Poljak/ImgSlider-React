import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./App.css";

const images = [
  "images/dog1.JPG",
  "images/dog2.JPG",
  "images/dog3.JPG",
  "images/dog4.JPG",
];
function App() {
  const [index, setIndex] = useState(0);
  const nextImg = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  const previousImg = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const randomImg = () => {
    let newInd = Math.floor(Math.random() * images.length);
    if (newInd === index && newInd <= 2) {
      setIndex(newInd + 1);
    } else if (newInd === index && newInd === images.length - 1) {
      setIndex(newInd - 1);
    } else {
      setIndex(newInd);
    }
  };

  return (
    <div className="main-container">
      <header>
        <h1 className="title">Image Carousel</h1>
      </header>
      <div className="container">
        <div className="img-container">
          <img src={images[index]} alt="" />
        </div>
        <div className="btn-container">
          <button className="btn prevBtn" onClick={previousImg}>
            <FaChevronLeft />
          </button>
          <button className="btn nextBtn" onClick={nextImg}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn randomBtn" onClick={randomImg}>
          Random Image
        </button>
      </div>
    </div>
  );
}

export default App;
