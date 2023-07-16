import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear(); // getFullYear() is a function that returns the current year
  return (
    <footer>
      <p>
        Created by{" "}
        <a href="https://www.linkedin.com/in/chinmay2660/">Chinmay Bhoir</a> |{" "}
        Copyright © {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
