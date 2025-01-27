import React from "react";
import Chakra from '../images/Chakraui.png';
import "../styles/Dashcard2.css";

const CardLayout = () => {
  return (
    <div className="card-layout">
      {/* Card 1 */}
      <div className="card">
        <div className="card-content">
          <p className="card-subtitle">Built by developers</p>
          <h2 className="card-title">Purity UI Dashboard</h2>
          <p className="card-description">
            From colors, cards, typography to complex elements, you will find
            the full documentation.
          </p>
          <a href="#read-more" className="card-link">
            Read more →
          </a>
        </div>
        <img src= { Chakra }/>
      </div>

      {/* Card 2 */}
      {/* <div className="card">
        <div className="card-image chakra">
          <h2>chakra</h2>
        </div>
      </div> */}

      {/* Card 3 */}
      <div className="card">
        <div className="card-image">
          <div className="card-overlay">
            <h2 className="overlay-title">Work with the Rockets</h2>
            <p className="overlay-description">
              Wealth creation is an evolutionarily recent positive-sum game.It
              is all about who takes the opportunity first.
            </p>
            <a href="#read-more" className="card-link" style={{color:"white"}}>
              Read more →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
