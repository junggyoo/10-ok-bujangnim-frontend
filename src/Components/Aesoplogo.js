import React from "react";
import { aesopLogoPath } from "../config";
import "./Aesoplogo.scss";

class Aesoplogo extends React.Component {
  render() {
    return (
      <section className="Aesoplogo">
        <div className="logoContainer">
          <svg
            aria-labelledby="ca6be9cd-5480-4526-b1d6-17bb54dbe2b2"
            class="Icon NavLogo-icon"
            role="img"
            viewBox="0 0 489.7 154.3"
          >
            <title id="ca6be9cd-5480-4526-b1d6-17bb54dbe2b2">Aesop logo</title>
            <g>
              <path class="NavLogo-icon--path" d={aesopLogoPath.a}></path>
              <path class="NavLogo-icon--path" d={aesopLogoPath.e}></path>
              <path class="NavLogo-icon--path" d={aesopLogoPath.s}></path>
              <path class="NavLogo-icon--path" d={aesopLogoPath.o}></path>
              <path class="NavLogo-icon--path" d={aesopLogoPath.p}></path>
              <rect
                x="131.8"
                y="13.5"
                class="NavLogo-icon--path"
                width="44.3"
                height="5"
              ></rect>
              <path class="NavLogo-icon--path" d={aesopLogoPath.corp}></path>
            </g>
          </svg>
        </div>
      </section>
    );
  }
}
export default Aesoplogo;
