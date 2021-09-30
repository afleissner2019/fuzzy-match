import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div class="icons">
      <p class="company-name">ABC &copy; 2021, ALL Rights Reserved</p>
      <a href="https://www.facebook.com/" target="_blank">
        <i class="fa fa-facebook fa-1x" target="_blank"></i>
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <i class="fa fa-linkedin fa-1x" target="_blank"></i>
      </a>
      <a href="https://www.instagram.com/">
        <i class="fa fa-instagram fa-1x" target="_blank"></i>
      </a>
      <a href="https://twitter.com/" target="_blank">
        <i class="fa fa-twitter fa-1x"></i>
      </a>
    </div>
  );
}

export default Footer;
