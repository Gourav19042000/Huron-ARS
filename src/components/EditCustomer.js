import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { Form, Button, Container, Alert } from "react-bootstrap";

//import "./update.css";

const PatientUpdate = () => {
  const {id} = useParams();
  const editURL = `http://localhost:5043/api/Customers/${id}`;
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    CustomerId: "",
    Name: "",
    Address1: "",
    License: "",
    Age: "",
    Username: "",
    Password: "",
    Phone: "",
  });

  useEffect(() => {
    axios
      .get(editURL)
      .then((response) => {
        const Data = response.data;
        setUserData(Data);
        console.log(response.data);
      })
      .catch((error) => {
        alert("Error Ocurred getting Customer detail:" + error);
      });
  }, []);
  //console.log(CustomerId)
  const onChanges = (e) => {
    const { id, value } = e.target;
    setUserData((preData) => ({
      ...preData,
      [id]: value,
    }));
    console.log(e.target.value);
  };

  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .put(editURL + id, {
        userData
      })
      .then((response) => {
        alert("Patient " + userData.CustomerId + " updated!");
        navigate("/read");
      })
      .catch((error) => {
        alert("Error Ocurred updating employee:" + error);
      });
  };

  return (
    <>
      <div className="body">
        <Container>
          <Form onSubmit={submitActionHandler} id="data">
            <div className="content">
              <Form.Group controlId="form.id">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  value={userData.CustomerId}
      
                  className="bg-gray-200"
                />
              </Form.Group>
              <Form.Group controlId="form.Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.Name}
                  onChange={onChanges}
                  placeholder="Enter Your Name"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.Address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.Address1}
                  onChange={onChanges}
                  placeholder="Enter the Address"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.License">
                <Form.Label>License No</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.License}
                  onChange={onChanges}
                  placeholder="Enter License"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <br />

              <Form.Group controlId="form.Age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.Age}
                  onChange={onChanges}
                  placeholder="Enter Your Age"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.Username">
                <Form.Label>UserName</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.Username}
                  onChange={onChanges}
                  placeholder="Enter UserName"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.Password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.Password}
                  onChange={onChanges}
                  placeholder="Change Your Password"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>
              <Form.Group controlId="form.Phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.Phone}
                  onChange={onChanges}
                  placeholder="Please enter your phone number"
                  required
                  className="border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </Form.Group>

              <br />
              <Button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Update Customer
              </Button>
              <Button
                type="button"
                onClick={() => navigate("/patienthome")}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
};
export default PatientUpdate;
