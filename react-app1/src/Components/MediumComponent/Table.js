import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../URL/API_URL";
import Button1 from "../SmallComponent/Button1";
import { useNavigate } from "react-router-dom";

const Table = () => {
  // State variables to hold data fetched from the API
  const [API, setAPI] = useState([]); 

  // Function for navigation
  const navigate = useNavigate();

  // Function to fetch data from the API
  const callGetAPI = async () => {
    const resp = await axios.get(API_URL);
    setAPI(resp.data);
  };

  // Use useEffect to call the API when the component mounts
  useEffect(() => {
    callGetAPI();
  }, []);

  // Handle deleting a record
  const handleDelete = async (id) => {
    await axios.delete(API_URL + id);
    callGetAPI();
  };
  //Redirect to the form for updating a record
  const handleUpdate = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="w-50 mx-auto my-5 text-center shadow">
      <table className="table table-hover">
        <thead>
          <tr className="text-light bg-dark">
            <th>S.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {API &&
            API.map((data, index) => (
              <tr key={data.id} className="text-secondary">
                <td>{index + 1}</td>
                <td>{data.first}</td>
                <td>{data.last}</td>
                <td>
                  <Button1
                    className="bg-danger btn mx-2"
                    onClick={() => handleDelete(data.id)}
                  >
                    <i className="fa fa-trash"></i>
                  </Button1>

                  <Button1
                    className="bg-info btn"
                    onClick={() => handleUpdate(data.id)}
                  >
                    <i className="fa fa-pen-to-square"></i>
                  </Button1>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
