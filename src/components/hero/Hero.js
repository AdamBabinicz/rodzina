import React, { useState } from "react";
import "./hero.scss";
import { images } from "../../images";
import img1 from "../../images/22.jpg";

const Hero = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="hero">
        <div className="right-top-image">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet={images.intro_right_mobile}
            />
            <img src={images.intro_right} alt="..." />
          </picture>
        </div>
        <div className="hero__wrapper container">
          <div className="hero__content">
            <h1 className="title1">
              „Rodzina <br /> - ach rodzina”
            </h1>
            <p className="hero__text">
              - zdaniem socjologów i według najprostszych jej definicji, to
              „najważniejsza, podstawowa grupa społeczna, na której opiera się
              całe społeczeństwo.”
            </p>
            <button className="btn" onClick={() => toggleTab(1)}>
              Czytaj
            </button>

            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">
                  "Kabaret Starszych Panów"
                </h3>
                <p className="services__modal-description">
                  Rodzina, rodzina, rodzina, ach rodzina.
                </p>
                <p className="services__modal-description">
                  Rodzina nie cieszy, nie cieszy, gdy jest.
                </p>
                <p className="services__modal-description">
                  Lecz kiedy jej nima
                </p>
                <p className="services__modal-description">
                  Samotnyś jak pies.
                </p>
                <div className="services__modal-services">
                  <img src={img1} alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div className="hero__image">
            <picture>
              <source media="(max-width:767px)" srcSet={images.intro_mobile} />
              <img src={images.intro_desktop} alt="..." />
            </picture>
          </div>
        </div>
        <div className="left-bottom-image">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet={images.intro_left_mobile}
            />
            <img src={images.intro_left} alt="..." />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// https://ising.pl/kabaret-starszych-panow-rodzinaach-rodzina-piano-version-r9w3n6-tekst
