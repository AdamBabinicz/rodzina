import React, { useState } from "react";
import "./header.scss";
import { images } from "../../images";
import { Link } from "react-router-dom";
import img1 from "../../images/23.jpg";

const Header = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <header>
      <nav className="navbar container">
        <div className="logo">
          <a href="#">
            <img src={images.logo} alt="..." className="oder" />
          </a>
        </div>
        <ul className={open ? "nav-items active" : "nav-items"}>
          <a
            href="#rodzina"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <li>Rodzina</li>
          </a>
          <a
            href="#fototeka"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <li>Fototeka</li>
          </a>
          <a
            href="#kontakt"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <li>Kontakt</li>
          </a>
          <li className="btn btn--nav-btn" onClick={() => toggleTab(1)}>
            Więcej
          </li>
        </ul>
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
            <h3 className="services__modal-title">"Zagadka"</h3>
            <p className="services__modal-description">
              Mama i Tata mają cztery córki. Każda z ich córek ma jednego brata.
              Ile dzieci mają rodzice ?
            </p>
            <div className="services__modal-services">
              <img src={img1} alt="..." />
            </div>
          </div>
        </div>
        <div className="hamburger">
          <img src={images.hamburger} alt="..." onClick={handleClick} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
