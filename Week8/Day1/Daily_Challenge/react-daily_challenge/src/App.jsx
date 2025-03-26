import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div className="App">
      <Carousel showThumbs={true}>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg"
            alt="imagen 1"
          />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp"
            alt="imagen 2"
          />
          <p className="legend">Macau</p>
        </div>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp"
            alt="imagen 3"
          />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img
            src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp"
            alt="imagen 3"
          />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
