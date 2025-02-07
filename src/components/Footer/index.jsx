import React from "react";
import "./style.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
      <h1 className="footer-title">Subscribe to newsletter</h1>
      <div className="subcribe">
        <input type="text" placeholder="Email Address" />
        <button>Subcribe</button>
      </div>
      <div className="content">
        <div className="content-item1">
          <div className="logo">
            <img
              src="https://preview.colorlib.com/theme/course/images/logo.png.webp"
              alt=""
            />
            <p>course</p>
          </div>
          <p>
            In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae
            tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor
            fermentum, tempor lacus.
          </p>
        </div>
        <div className="content-item">
          <h2>Menu</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="content-item">
        <h2>Usefull Links</h2>
          <ul>
            <li>Testimonials</li>
            <li>FAQ</li>
            <li>Community</li>
            <li>Campus Pictures</li>
            <li>Tuitions</li>
          </ul>
        </div>
        <div className="content-item2">
        <h2>Contact</h2>
          <div className="item"><FaLocationDot className="icon"/><p>Blvd Libertad, 34 m05200 Arévalo</p></div>
          <div className="item"><FaPhoneAlt className="icon"/><p>0034 37483 2445 322</p></div>
          <div className="item"><IoMailOutline className="icon"/> <p>hello@company.com</p></div>
        </div>
      </div>
      <div className="copyright">
        <div className="copyright-content"><p>Copyright ©2025 All rights reserved | This template is made with <FaHeart className="icon"/> by <a href="">Colorlib</a></p></div>
        <div className="social">
          <FaPinterest className="item"/>
          <FaLinkedinIn className="item"/>
          <FaInstagram className="item"/>
          <FaFacebookF className="item"/>
          <FaTwitter className="item"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
