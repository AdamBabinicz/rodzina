import React from "react";
import "./info.scss";
import { images } from "../../images";

const Info = () => {
  return (
    <div id="rodzina">
      <div className="we-are-different">
        <div className="container">
          <h2 className="title1 title1--mod">Tata, mama, syn</h2>
          <div className="we-are-different__content">
            <div className="snappy">
              <img src={images.snappy_process} alt="..." />
              <h3>Tata</h3>
              <p>Pracuje, studiuje i gra w koszykówkę.</p>
            </div>

            <div className="affordable">
              <img src={images.affordable_prices} alt="..." />
              <h3>Mama</h3>
              <p>Pracuje, prowadzi dom.</p>
            </div>
            <div className="people">
              <img src={images.people_first} alt="..." />
              <h3>Syn</h3>
              <p>Uczy się, uwielbia dinozaury.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
