import React from "react";
import "./ModelsPage.css";
// import ToyotaCar from "../../assets/toyotaCar.png";
import balenoCar from "../../assets/balenoCar.jpg";
import { TbCar } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const ModelsPage = () => {
  return (
    <div className="container_vehicle">
      <div className="heading_vehicle">
        <h2>Vehicle Models</h2>
        <p>Home / Vehicle Models</p>
      </div>
      <div className="models_container">
        <div className="carModels">
          <div className="modelCart">
            <div className="carImg">
              <img src={balenoCar} className="ImgCar" />
            </div>
            <div className="carDetails">
              <div className="name">
                <p>Maruti Suzuki Baleno</p>
              </div>
              <div className="carType">
                <p>Manual</p>
                <p className="oilType">Petrol</p>
                <p className="seats">4 Seats</p>
              </div>
              <hr />
              <div className="rent">
                <TbCar className="smallCar" /> <FaRupeeSign className="rupee" />{" "}
                <p>150/hr</p>
                <p className="star">
                  <IoStar />
                </p>
              </div>
              <hr />
              <div className="bookBtn">
                <button>Book Ride</button>
              </div>
            </div>
          </div>
          <div className="modelCart">
            <div className="carImg">
              <img src={balenoCar} className="ImgCar" />
            </div>
            <div className="carDetails">
              <div className="name">
                <p>Maruti Suzuki Baleno</p>
              </div>
              <div className="carType">
                <p>Manual</p>
                <p className="oilType">Petrol</p>
                <p className="seats">4 Seats</p>
              </div>
              <hr />
              <div className="rent">
                <TbCar className="smallCar" /> <FaRupeeSign className="rupee" />{" "}
                <p>150/hr</p>
                <p className="star">
                  <IoStar />
                </p>
              </div>
              <hr />
              <div className="bookBtn">
                <button>Book Ride</button>
              </div>
            </div>
          </div>
          <div className="modelCart">
            <div className="carImg">
              <img src={balenoCar} className="ImgCar" />
            </div>
            <div className="carDetails">
              <div className="name">
                <p>Maruti Suzuki Baleno</p>
              </div>
              <div className="carType">
                <p>Manual</p>
                <p className="oilType">Petrol</p>
                <p className="seats">4 Seats</p>
              </div>
              <hr />
              <div className="rent">
                <TbCar className="smallCar" /> <FaRupeeSign className="rupee" />{" "}
                <p>150/hr</p>
                <p className="star">
                  <IoStar />
                </p>
              </div>
              <hr />
              <div className="bookBtn">
                <button>Book Ride</button>
              </div>
            </div>
          </div>
          <div className="modelCart">
            <div className="carImg">
              <img src={balenoCar} className="ImgCar" />
            </div>
            <div className="carDetails">
              <div className="name">
                <p>Maruti Suzuki Baleno</p>
              </div>
              <div className="carType">
                <p>Manual</p>
                <p className="oilType">Petrol</p>
                <p className="seats">4 Seats</p>
              </div>
              <hr />
              <div className="rent">
                <TbCar className="smallCar" /> <FaRupeeSign className="rupee" />{" "}
                <p>150/hr</p>
                <p className="star">
                  <IoStar />
                </p>
              </div>
              <hr />
              <div className="bookBtn">
                <button>Book Ride</button>
              </div>
            </div>
          </div>
          <div className="modelCart">
            <div className="carImg">
              <img src={balenoCar} className="ImgCar" />
            </div>
            <div className="carDetails">
              <div className="name">
                <p>Maruti Suzuki Baleno</p>
              </div>
              <div className="carType">
                <p>Manual</p>
                <p className="oilType">Petrol</p>
                <p className="seats">4 Seats</p>
              </div>
              <hr />
              <div className="rent">
                <TbCar className="smallCar" /> <FaRupeeSign className="rupee" />{" "}
                <p>150/hr</p>
                <p className="star">
                  <IoStar />
                </p>
              </div>
              <hr />
              <div className="bookBtn">
                <button>Book Ride</button>
              </div>
            </div>
          </div>
          <div className="modelCart">
            <div className="carImg">
              <img src={balenoCar} className="ImgCar" />
            </div>
            <div className="carDetails">
              <div className="name">
                <p>Maruti Suzuki Baleno</p>
              </div>
              <div className="carType">
                <p>Manual</p>
                <p className="oilType">Petrol</p>
                <p className="seats">4 Seats</p>
              </div>
              <hr />
              <div className="rent">
                <TbCar className="smallCar" /> <FaRupeeSign className="rupee" />{" "}
                <p>150/hr</p>
                <p className="star">
                  <IoStar />
                </p>
              </div>
              <hr />
              <div className="bookBtn">
                <button>Book Ride</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelsPage;
