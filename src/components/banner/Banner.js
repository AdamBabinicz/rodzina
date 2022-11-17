import React, { useState } from "react";
import "./banner.scss";
import { images } from "../../images";
import img1 from "../../images/12.png";

const Banner = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="banner container">
        <picture>
          <source media="(max-width:767px)" srcSet={images.works_mobile} />
          <img src={images.works_desktop} alt="..." />
        </picture>
        <div className="banner__wrapper">
          <div className="title">
            <h2 className="title1">
              Zwyczajni,
              <br /> niezwyczajni
            </h2>
          </div>
          <div className="button">
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
                <h3 className="services__modal-title">"Przyszłość rodziny"</h3>
                <p className="services__modal-description">
                  "We wszystkich okresach życia człowiek potrzebuje jakiegoś
                  rodzaju bliskości ze swoimi krewnymi, poczucia równowagi,
                  możliwości oddalenia się i dystansu z jednoczesnym poczuciem,
                  że dobrze jest mieć zawsze dokąd wrócić - zarówno po to, by
                  pochwalić się sukcesami jak i po to, by leczyć rany po
                  niepowodzeniach" - podkreślała prof. Brzezińska. - Wbrew
                  potocznym opiniom nawet starsi oczekują od swych bliskich nie
                  tylko pomocy i opieki, ale także kłótni, spojrzenia z
                  dystansu, zademonstrowania swego zdania, wyrażenia niezgody".
                </p>
                <div className="services__modal-services">
                  <img src={img1} alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
