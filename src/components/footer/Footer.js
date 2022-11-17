import React from "react";
import "./footer.scss";
import { images } from "../../images";

const Footer = () => {
  return (
    <div id="kontakt">
      <footer>
        <div className="footer-art">
          <picture>
            <source medis="(max-width: 767px)" srcSet={images.footer_mob} />
            <img src={images.footer} alt="..." />
          </picture>
        </div>
        <div className="container">
          <div className="footer">
            <div className="footer-header">
              <div className="logo">
                <img src={images.logo} alt="..." />
              </div>
              <div className="social-media-icons">
                <a
                  href="https://www.facebook.com/Delanerro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={images.fb} alt="..." />
                </a>
                <a
                  href="https://twitter.com/search?q=%23rodzina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={images.twitter} alt="..." />
                </a>
                <a
                  href="https://www.instagram.com/explore/tags/rodzina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={images.insta} alt="..." />
                </a>
                <a
                  href="https://pl.pinterest.com/blimsien/rodzina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={images.pinterest} alt="..." />
                </a>
              </div>
            </div>
            <div className="footer-menu">
              <div className="our-company">
                <h4>Artykuły</h4>
                <ul>
                  <a
                    href="https://pl.wikipedia.org/wiki/Rodzina"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>Wikipedia</li>
                  </a>
                  <a
                    href="https://encyklopedia.pwn.pl/haslo/rodzina;4011746.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>PWN</li>
                  </a>
                  <a
                    href="https://zpe.gov.pl/a/rodzina-jest-najwazniejsza/Dcfx6QHgS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>Ministerstwo</li>
                  </a>
                  <a
                    href="https://psychologia.edu.pl/czytelnia/58-maestwo-i-rodzina/673-rodzina-jako-uniwersalny-mikroswiat-czlowieka.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>Psychologia</li>
                  </a>
                </ul>
              </div>
              <div className="our-company">
                <h4>Filmy</h4>
                <ul>
                  <a
                    href="https://www.youtube.com/watch?v=PMA_td7qB6c"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>Rodzina jest super</li>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=TjJLy_9fcyA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>Rodzina jest super 2</li>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=VG1N040JfwA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>Usłyszeć Dzieci</li>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=p18G7xhC3r0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>Rodzina Rodzinie</li>
                  </a>
                </ul>
              </div>
              <div className="our-company">
                <h4>Ciekawostki</h4>
                <ul>
                  <a
                    href="https://miastodzieci.pl/czytelnia/najpiekniejsze-cytaty-o-rodzinie"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>Cytaty o rodzinie</li>
                  </a>
                  <a
                    href="https://www.rmfmaxx.pl/news/Najpiekniejsza-rodzina-swiata-Ich-zdjecia-podbijaja-siec,55403.html#crp_state=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>Najpiękniejsza rodzina</li>
                  </a>
                  <a
                    href="https://lente-magazyn.com/rodzina-i-dzieci-garsc-ciekawostek-o-izraelu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>Rodzina i dzieci</li>
                  </a>
                  <a
                    href="https://warhist.pl/artykul/rodzina-ulmow-tragiczne-bohaterstwo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li>Rodzina Ulmów</li>
                  </a>
                </ul>
              </div>
            </div>
            <p>Radom, 2022 - {new Date().getFullYear()}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
