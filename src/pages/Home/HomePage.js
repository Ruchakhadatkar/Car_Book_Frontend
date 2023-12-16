import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthCotext";
import useLogout from "../../hooks/useLogout";
import backGround from "../../assets/backgroundd.png";
import "./HomePage.css";
import carImg from "../../assets/carImg.png";
import { FaChevronRight } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import box1 from "../../assets/box1.png";
import box2 from "../../assets/box2.png";
import box3 from "../../assets/box3.png";
import allCar from "../../assets/cars.png";
import boxImg1 from "../../assets/boxImg1.png";
import boxImg2 from "../../assets/boxImg2.png";
import boxImg3 from "../../assets/boxImg3.png";

const HomePage = () => {
  
  return (
    <div className="container_Main">
      <div className="heroSection">
        <div className="containerHome">
          <img src={backGround} className="background" />
          <div className="heroContent">
            <div className="heroContentText">
              <h4>Plan your trip now</h4>
              <h1>
                Save <span>big</span> with our car rental
              </h1>
              <p>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="btnsHome" >
                <Link to="/models" style={{ textDecoration: "none" }}>
                <button className="book">
                  Book Ride
                  <FaRegCheckCircle className="btnIcon" />
                </button>
                </Link>
                <button className="learn">
                  Learn More
                  <FaChevronRight />
                </button>
              </div>
            </div>
            <div className="carImg">
              <img src={carImg} />
            </div>
          </div>
        </div>
      </div>
      <div className="planSection">
        <div className="title">
          <h3>Plan your trip now</h3>
          <h2>Quick & easy car rental</h2>
        </div>
        <div className="boxes">
          <div className="box">
            <img src={box1} />
            <h3>Select Car</h3>
            <p>
              We offers a big range of vehicles for all your driving needs. We
              have perfect car to meet your needs
            </p>
          </div>
          <div className="box">
            <img src={box2} />
            <h3>Contact Operator</h3>
            <p>
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>
          <div className="box">
            <img src={box3} />
            <h3>Let's Drive</h3>
            <p>
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </p>
          </div>
        </div>
      </div>
      <div className="bannerSection">
        <div className="bannerContent">
          <div className="bannerText">
            <h2>Save big with our cheap car rental !</h2>
            <p>
              Top Airports. Local Suppliers. <span>24/7</span> Support.
            </p>
          </div>
        </div>
      </div>
      <div className="allCars">
        <img src={allCar} />
      </div>
      <div className="textContainer">
        <div className="left">
          <h4>Why Choose Us</h4>
          <h2>Best valued deals you will ever find</h2>
          <p>
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <button>
            Find Details <FaChevronRight className="btnFind" />
          </button>
        </div>
        <div className="right">
          <div className="rightBox">
            <img src={boxImg1} className="rightImg" />
            <div className="text">
              <h4>Cross Country Drive</h4>
              <p>
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div className="rightBox">
            <img src={boxImg2} className="rightImg" />
            <div className="text">
              <h4>All Inclusive Pricing</h4>
              <p>
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div className="rightBox">
            <img src={boxImg3} className="rightImg" />
            <div className="text">
              <h4>No Hidden Charges</h4>
              <p>
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default HomePage;
