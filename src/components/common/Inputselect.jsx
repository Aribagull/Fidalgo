import React, { useState } from "react";
import timeOptions from "./TimeData";
import DatePicker from "react-datepicker";
import { IoIosArrowDown } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";

const Inputselect = () => {
  const [selectedPerson, setSelectedPerson] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const CustomInput = ({ value, onClick }) => (
    <button className="custom-input relative" onClick={onClick}>
      <IoIosArrowDown
        className="text-white font-bold p-[2px] absolute left-[325px] "
        style={{
          strokeWidth: "35",
        }}
      />
      {value || "MM/dd/yyyy"}
    </button>
  );

  return (
    <div className="max-w-md mx-auto mt-7 p-4 bg-[#1F3634] text-white">
      <div className="mb-4">
        <select
          id="person"
          value={selectedPerson}
          onChange={(e) => setSelectedPerson(e.target.value)}
          className="w-full bg-[#1F3634] border-none text-white h-12 rounded-md focus:outline-none cursor-pointer"
          style={{
            scrollbarColor: "#D4AF37 #1F3634",
            scrollbarWidth: "thin",
          }}
        >
          {[...Array(10).keys()].map((person) => (
            <option key={person + 1} value={person + 1}>
              {person + 1} Person{person > 0 && "s"}
            </option>
          ))}
        </select>

        <div className="opacity-[40%]">
          <hr />
        </div>
      </div>

      <div className=" mt-7  ">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          customInput={<CustomInput />}
          dateFormat="MM/dd/yyyy"
          className="mb-2"
        />
        <div className="opacity-[40%]">
          <hr />
        </div>
      </div>

      <div className="mb-2">
        <select
          id="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full mt-5 bg-[#1F3634]  border-none "
        >
          {timeOptions.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div className="opacity-[40%]">
        <hr />
      </div>
    </div>
  );
};

export default Inputselect;
