import React from "react";
import "./BookingDetailsPage.css";
import balenoCar from "../../assets/balenoCar.jpg";
import { TbCar } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiCalendarEventLine } from "react-icons/ri";

const BookingDetailsPage = () => {
  return (
    <div className="bookingDetail">
      <div className="containerB">
        <div className="head">
          <h2>Booking Details</h2>
        </div>
        <div className="details">
          <div className="leftImg">
            <img src={balenoCar} />
          </div>
          <div className="rightDetail">
            <div className="userDetail">
              <h5>
                <FaUser className="userIcon" />
                Car booked by :
              </h5>{" "}
              <p>ABC</p>
            </div>
            <div className="userDetail">
              <h5>
                <TbCar className="userCar" />
                Car Model Name :
              </h5>{" "}
              <p> Baleno</p>
            </div>
            <div className="userDetail">
              <h5>
                <FaLocationDot className="userLocation" />
                Location (Pickup & Dropoff) :
              </h5>{" "}
              <p> Mumbai to Pune </p>
            </div>
            <div className="userDetail">
              <h5>
                <RiCalendarEventLine className="userCalendar" />
                Date (Pickup & Dropoff) :
              </h5>
              <p> 10-12-2023 to 14-12-2023</p>
            </div>
            <div className="userDetail">
              <h5>
                <FaRupeeSign className="userRupee" />
                Total amount paid :
              </h5>{" "}
              <p> 2000 paid </p>
            </div>

            <div className="thank">
              <h3>Thank You for Booking !</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsPage;
