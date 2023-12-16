import React, { useEffect, useState } from "react";
import "./ModelsPage.css";
// import ToyotaCar from "../../assets/toyotaCar.png";
import balenoCar from "../../assets/balenoCar.jpg";
import { TbCar } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useAuthContext } from "../../hooks/useAuthCotext";
import { useSearchParams, Link } from "react-router-dom";

const ModelsPage = () => {
  const { user } = useAuthContext();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (user && user.token) {
      fetchDataCars();
    }
  }, [user]);

  const fetchDataCars = async () => {
    try {
      if (!user || !user.token) {
        console.error("User or token is null or undefined");
        return;
      }

      const response = await fetch("http://localhost:5000/api/cars", {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });

      const data = await response.json();
      setCars(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container_vehicle">
      <div className="heading_vehicle">
        <h2>Vehicle Models</h2>
      </div>
      <div className="models_container">
        {cars.map((car, i) => {
          return (
            <div className="modelCart" key={i}>
              <div className="carImg">
                <img src={car.image} className="ImgCar" />
              </div>
              <div className="carDetails">
                <div className="name">
                  <p>{car.carName}</p>
                </div>
                <div className="carType">
                  <p>{car.type}</p>
                  <p className="oilType">{car.fuelType}</p>
                  <p className="seats">{car.seats}</p>
                </div>
                <hr />
                <div className="rentDetails">
                  <TbCar className="smallCar" />{" "}
                  <FaRupeeSign className="rupee" /> <p>{car.fair}</p>
                  <div className="review">
                    <IoStar className="star" />
                    <div className="rating">{car.rating}</div>
                  </div>
                </div>
                <hr />
                <div className="bookBtn">
                  <Link
                    to={`/models/${car._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <button>Book Ride</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ModelsPage;
