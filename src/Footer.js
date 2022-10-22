import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/ixchel-t/"
          target="_blank"
          rel="noreferrer"
        >
          Ixchel
        </a>
        ,
      </div>
      is{" "}
      <a
        href="https://github.com/ix-t/10122022_react-dictionary-project"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on Github
      </a>{" "}
      and{" "}
      <a
        href="https://beamish-macaron-ce9df3.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        hosted on Netlify
      </a>
    </footer>
  );
}
