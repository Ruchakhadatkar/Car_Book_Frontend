import React, { useEffect, useState } from "react";
import "./BookingDetailsPage.css";
import balenoCar from "../../assets/balenoCar.jpg";
import { TbCar } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiCalendarEventLine } from "react-icons/ri";
import { useAuthContext } from "../../hooks/useAuthCotext";
import { Link } from "react-router-dom";


const BookingDetailsPage = () => {
  const { user } = useAuthContext();
  const [bookingInfo, setBookingInfo] = useState([]);

  const fetchData = async () => {
    try {
      if (!user || !user.token) {
        console.error("User or token is null or undefined");
        return;
      }

      const response = await fetch(
        `https://car-on-rent-bakendsevice.onrender.com/api/bookingdetail/details/${user.userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.token}`,
          },
        }
      );

      const data = await response.json();
      setBookingInfo(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <div className="bookingDetail">
      <div className="head">
        <h2>Booking Details</h2>
      </div>
      {bookingInfo.length == 0 && (
        <div>
          {" "}
          <h2> No Cars Booked.</h2>
        </div>
      )}
      {bookingInfo.map((bookingInfo, i) => {
        return (
          <div className="containerB" key={"i"}>
            <div className="details">
              <div className="leftImg">
                <img src={bookingInfo.carId.image} />
              </div>
              <div className="rightDetail">
                <div className="userDetail">
                  <h5>
                    <TbCar className="userCar" />
                    Car Model Name :
                  </h5>{" "}
                  <p>{bookingInfo.carId.carName}</p>
                </div>
                <div className="userDetail">
                  <h5>
                    <FaLocationDot className="userLocation" />
                    Location (Pickup & Dropoff) :
                  </h5>{" "}
                  <p>
                    {" "}
                    {bookingInfo.pickLocation} to {bookingInfo.dropLocation}{" "}
                  </p>
                </div>
                <div className="userDetail">
                  <h5>
                    <RiCalendarEventLine className="userCalendar" />
                    Date (Pickup & Dropoff) :
                  </h5>
                  <p>
                    {" "}
                    {bookingInfo.pickDate} to {bookingInfo.dropDate}
                  </p>
                </div>
                <div className="userDetail">
                  <h5>
                    <FaRupeeSign className="userRupee" />
                    Total amount paid :
                  </h5>{" "}
                  <p> {bookingInfo.totalRent} paid </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="thank">
        <h3>Thank You for Booking !</h3>
      </div>
      <Link to="/models" style={{ textDecoration: "none"}} >
        <button className="continueBtn">Continue Booking</button>
      </Link>
    </div>
  );
};

export default BookingDetailsPage;
