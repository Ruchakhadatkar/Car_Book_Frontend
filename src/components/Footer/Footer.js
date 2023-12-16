import React from "react";
import "./Footer.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footerContent">
          <ul className="footer1">
            <li className="li_1">
              <span>CAR</span> Rental
            </li>
            <li className="li_2">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li className="li_3">
              <FiPhoneCall className="call" /> (123) -456-789
            </li>
            <li className="li_4">
              <MdOutlineMail className="mail" />
              carrental@gmail.com
            </li>
          </ul>
          <ul className="footer1 footer2">
            <li className="headingFooter">COMPANY</li>
            <li>New York</li>
            <li>Careers</li>
            <li>Mobile</li>
            <li>Blog</li>
            <li>How we work</li>
          </ul>
          <ul className="footer1">
            <li className="headingFooter">WORKING HOURS</li>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>
          <ul className="footer1">
            <li className="headingFooter">SUBSCRIPTION</li>
            <li>
              <p>Subscribe your Email address for latest news & updates.</p>
            </li>
            <li>
              <input type="email" placeholder="Enter Email Address" />
            </li>
            <li>
              <button>Submit</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
