import React, { useEffect } from "react";
import Input1 from "../SmallComponent/Input1";
import Button1 from "../SmallComponent/Button1";
import { useState } from "react";
import { API_URL } from "../../URL/API_URL";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Form = () => {
  // state variables to hold form input values
  const [first, setFirst] = useState(""); // First name input
  const [last, setLast] = useState("");  // Last name input
  const navigate = useNavigate();  // Function for navigation

  //Fetch id from URL
  const { id } = useParams();

  // Fetch data from API when the id parameter changes
  useEffect(() => {
    if (id) {
      axios.get(API_URL + id).then((response) => {
        setFirst(response.data.first);
        setLast(response.data.last);
      });
    }
  }, []);

  // Update the first name state when input changes
  const handleChange1 = (e) => {
    setFirst(e.target.value);
  };

  // Update the last name state when input changes
  const handleChange2 = (e) => {
    setLast(e.target.value);
  };

  // Handle for submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id !== undefined) {
      // If id exists, update and existing  record
      await axios.put(API_URL + id, {
        first,
        last,
      });
    } else {
      // If no id create a new record
      await axios.post(API_URL, {
        first,
        last,
      });
    }
    // Clear input fields and navigate the "/read" route
    setFirst("");
    setLast("");
    navigate("/read");
  };

  return (
    <div className="mt-5">
      <h2 className="text-center text-primary">Form</h2>

      <form className="row w-25 mx-auto text-secondary" onSubmit={handleSubmit}>
        <label className="mt-3 form-label col-lg-12">First Name:</label>
        <Input1 value={first} onChange={handleChange1} />

        <label className="mt-3 form-label col-lg-12">Last Name:</label>
        <Input1 value={last} onChange={handleChange2} />

        <Button1 id="submit" className="border-primary text-primary btn mt-3">
          Submit
        </Button1>
      </form>
    </div>
  );
};
export default Form;
