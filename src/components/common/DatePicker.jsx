import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const CustomInput = ({ value, onClick }) => (
    <button className="custom-input " onClick={onClick}>
      <FaCalendarAlt className="text-gray-600  mr-2" />
      {value || "Select a date"}
    </button>
  );

  return (
    <div className="flex justify-center items-center h-screen ">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        customInput={<CustomInput />}
        dateFormat="MM/dd/yyyy"
      />
    </div>
  );
};

export default CustomDatePicker;
