// components/Carousel.jsx
import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  handleNext = () => {
    this.setState((prevState) => {
      const nextIndex = (prevState.currentIndex + 1) % images.length;
      return {
        currentIndex: nextIndex,
      };
    });
  };

  handlePrev = () => {
    this.setState((prevState) => {
      const newIndex =
        (prevState.currentIndex - 1 + images.length) % images.length;
      return {
        currentIndex: newIndex,
      };
    });
  };
  handleIndexChange = (newIndex) => {
    this.setState({ currentIndex: newIndex });
  };

  render() {
    const { currentIndex } = this.state;
    const totalImages = images.length;
    const nextIndex = (currentIndex + 1) % totalImages;
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages;

    return (
      <div className="my-carousel-container">
        <button
          className="my-prev-btn"
          onClick={() => this.handleIndexChange(prevIndex)}
        >
          Prev
        </button>
        <div className="image-container">
          <img
            className="my-carousel-image"
            src={images[currentIndex].img}
            alt={images[currentIndex].title}
          />
          <div className="image-text title">
            <h2>{images[currentIndex].title}</h2>
          </div>
          <div className="image-text subtitle">
            <p>{images[currentIndex].subtitle}</p>
          </div>
        </div>
        <button
          className="my-next-btn"
          onClick={() => this.handleIndexChange(nextIndex)}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Carousel;
