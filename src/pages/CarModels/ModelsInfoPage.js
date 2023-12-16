import React, { useEffect, useState } from "react";
import "./ModelsInfoPage.css";
import balenoCar from "../../assets/balenoCar.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { RiCalendarEventLine } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";
import { Link, json, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthCotext";

const ModelsInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useAuthContext();
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [totalFair, setTotalFair] = useState(0);
  const [minDate, setMinDate] = useState("");
  const [fair, setFair] = useState(0);
  const [dayDifference, setDayDifference] = useState(0);

  const [singleCar, setSingleCar] = useState([]);

  const fetchCarData = async () => {
    try {
      if (!user || !user.token) {
        console.error("User or token is null or undefined");
        return;
      }

      const response = await fetch(`https://car-on-rent-bakendsevice.onrender.com/api/cars/${id}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });

      const data = await response.json();
      setSingleCar(data);
      setFair(data.fair);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    if (
      !pickupDate ||
      !dropoffDate ||
      !pickupLocation ||
      !dropoffLocation ||
      !totalFair ||
      !id ||
      !user
    ) {
      return;
    }
    const data = {
      pickLocation: pickupLocation,
      dropLocation: dropoffLocation,
      pickDate: pickupDate,
      dropDate: dropoffDate,
      totalRent: totalFair,
      carId: id,
      userId: user.userId,
    };
    console.log(data);
    const response = await fetch("https://car-on-rent-bakendsevice.onrender.com/api/bookingdetail", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const bookingdetail = await response.json();
    console.log(bookingdetail);
    navigate("/bookingdetails");
  };

  useEffect(() => {
    fetchCarData();
  }, []);

  const createMinDate = () => {
    const date = new Date();

    // Extract year, month, and day components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");

    // Form the 'yyyy-mm-dd' format
    const formattedDate = `${year}-${month}-${day}`;
    setMinDate(formattedDate);
    // console.log(formattedDate); // Output: '2023-12-11'
  };

  useEffect(() => {
    createMinDate();
  }, []);

  useEffect(() => {
    if (!pickupDate && !dropoffDate) return;
    // Convert the date strings to Date objects
    var date1 = new Date(pickupDate);
    var date2 = new Date(dropoffDate);

    // Calculate the difference in milliseconds
    var timeDifference = date2.getTime() - date1.getTime();

    // Convert the time difference to days
    var dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    setDayDifference(dayDifference);
    // Output the result

    calculateTotalFair(dayDifference);
  }, [pickupDate, dropoffDate]);

  const calculateTotalFair = (dayDiff) => {
    if (dayDiff <= 1) {
      setTotalFair(fair);
    } else {
      setTotalFair(fair * dayDiff);
    }
  };

  return (
    <div className="containerMain">
      <div className="containerModel">
        <h2 className="bookCar">{singleCar.carName}</h2>
        <div className="modelInfo">
          <div className="carPic">
            <img src={singleCar.image} />
          </div>
          <form className="infoForm">
            <div className="pick-drop-location">
              <div className="pickup">
                <label>
                  <FaLocationDot className="locationIcon" />
                  <p>Pick-Up</p>
                  <b>*</b>
                </label>
                <select
                  onChange={(e) => {
                    setPickupLocation(e.target.value);
                  }}
                >
                  <option value="">Select pick up location</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="pune">Pune</option>
                  <option value="nagpur">Nagpur</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                </select>
              </div>
              <div className="dropoff">
                <label>
                  <FaLocationDot className="locationIcon" />
                  <p>Drop-Off</p>
                  <b>*</b>
                </label>
                <select
                  onChange={(e) => {
                    setDropoffLocation(e.target.value);
                  }}
                >
                  <option value="">Select drop off location</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="pune">Pune</option>
                  <option value="nagpur">Nagpur</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                </select>
              </div>
            </div>
            <div className="pick-drop-date">
              <div className="pickupTime">
                <label>
                  <RiCalendarEventLine className="calender" />
                  <p>Pick-Up</p>
                  <b>*</b>
                </label>
                <input
                  type="date"
                  id="pickupTime"
                  className="selectDate"
                  onChange={(e) => {
                    setPickupDate(e.target.value);
                  }}
                  min={minDate}
                />
              </div>
              <div className="dropTime">
                <label>
                  <RiCalendarEventLine className="calender" />
                  <p>Drop-Off</p>
                  <b>*</b>
                </label>
                <input
                  type="date"
                  id="dropoffTime"
                  className="selectDate"
                  onChange={(e) => {
                    setDropoffDate(e.target.value);
                  }}
                  min={minDate}
                />
              </div>
            </div>
            <div className="rent">
              <label>
                <FaRupeeSign className="totalAmount" />
                <p>Total Amount</p>
                <b>*</b>
              </label>
              <h4>{totalFair}</h4>
            </div>
            <div
              className="cirnformBtn"
              onClick={(e) => {
                handleBooking(e);
              }}
            >
              <button className="crnBtn">Confirm Booking</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModelsInfoPage;
