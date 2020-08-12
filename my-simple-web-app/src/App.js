import React, { useState } from "react";
import { validation } from "./scripts/validation";

import "./App.css";

// IMPORT STYLED COMPONENTS
import {
  Wrapper,
  Container,
  Form,
  TextCon,
  Input,
  Button,
  FeedBack,
} from "./styles/components";

// APP
const App = () => {
  // STATE
  const [validate, setValidate] = useState(false);
  const [input, setInput] = useState("");
  const [errorMSG, setErrorMSG] = useState("");

  // HANDLE CHANGE
  const handleChange = (e) => {
    let value = e.target.value;
    validation(value, setInput, setValidate, setErrorMSG);
  };

  const fetchDataReq = () => {
    // FIRST FETCH
    fetch(
      "http://192.168.64.3/mvj-danske-bank-test/my-backend/person/index.php?$input$=" +
        input
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        // CHAIN 2
        fetch(
          "http://192.168.64.3/mvj-danske-bank-test/my-backend/facility/index.php?$val1$=" +
            result.val1
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
          });

        // CHAIN 2
        fetch(
          "http://192.168.64.3/mvj-danske-bank-test/my-backend/exposure/index.php?$val2$=" +
            result.val2
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDataReq();
  };

  // APP
  return (
    <Wrapper className='App'>
      <Container>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <TextCon>
            <h1>My simple app</h1>
            <p>Enter a numeric value between 1-10 characters</p>
          </TextCon>
          <Input type='text' onChange={(e) => handleChange(e)} value={input} />
          <FeedBack>{errorMSG ? errorMSG : ""}</FeedBack>

          <Button type='submit' disabled={!validate ? true : false}>
            SUBMIT
          </Button>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default App;
