import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DOBPicker = ({ value, onChange }) => {
  const [maxDate] = useState(new Date()); // Set max date to present date

  const handleDateChange = (date) => {
    onChange(date);
  };

  return (
    <DatePicker
      selected={value}
      onChange={handleDateChange}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      placeholderText="DD/MM/YY"
      dateFormat="dd/MM/yyyy"
      maxDate={maxDate} // Set max date
      className="w-full py-2 px-4 text-black bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400"
    />
  );
};

export default DOBPicker;
