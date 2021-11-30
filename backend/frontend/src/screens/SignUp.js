import React, { useState } from "react";
import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import { useHistory } from "react-router-dom";
import api from '../global/api';
export default function Page2() {
  const history = useHistory();

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age:"",
    groupCode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({personalInfo});
    api
      .post(`register`, personalInfo)
      .then((res) => {
        console.log({res});
        localStorage.setItem("userId",res.data.userId);
        localStorage.setItem("groupCode", res.data.groupCode);
        history.push("/visual");
        // localStorage.setItem("userInfo", JSON.stringify(userInfo));
        // setLocalSuccess(true);
        // console.log("ALL GOOD");
        // history.push("/overview");
        // setIsSuccess(true);
      })
      .catch(() =>{
        console.log("ERROR");
      })
      
   // history.push("/page3");
  }


  return (
    <div>
      <CustomNavbar />
      <div style={styles.directions}>
        Please enter your personal information
      </div>
      <div style={styles.main}>
        <div style={styles.formDiv}>
        <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control onChange={(e) =>
                setPersonalInfo((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              } type="text" placeholder="Enter first name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control onChange={(e) =>
                setPersonalInfo((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              } type="text" placeholder="Enter last name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={(e) =>
                setPersonalInfo((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              } type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Select onChange={(e) =>
                setPersonalInfo((prev) => ({
                  ...prev,
                  age: e.target.value,
                }))
              } aria-label="Default select example">
  <option>Enter your age</option>
  <option value="<18">{`<18`}</option>
  <option value="18-24">18-24</option>
  <option value="25-30">25-30</option>
  <option value="30-36">30-36</option>
  <option value=">37">{`>37`}</option>
</Form.Select>
  <Form.Select style={styles.formSelect} onChange={(e) =>
                setPersonalInfo((prev) => ({
                  ...prev,
                  groupCode: e.target.value,
                }))
              } aria-label="Enter your group code">
  <option>Enter your group code</option>
  <option value="A">A</option>
  <option value="B">B</option>
</Form.Select>
 
  <Button  style={styles.button} variant="primary" type="submit">
    Submit
  </Button>
</Form>


         
        </div>
      </div>
    </div>
  );
}

const styles = {
  main: {
    paddingTop: 100,
    paddingLeft: "20%",
    paddingRight: "20%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  formDiv: {
    flexDirection: "column",
    width: "100%",
  },
  nameDiv: {
    flexDirection: "column",
  },
  labelBasic: {
    width: 130,
  },
  input: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 8,
    paddingBottom: 8,
    fontWeight: 500,
    fontSize: 20,
    marginTop: 20,
  },
  directions: {
    paddingTop: 100,
    fontSize: 30,
    fontWeight: 700,
  },
  formSelect:{
    marginTop: 30
  }
};
