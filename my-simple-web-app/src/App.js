import React, { useState } from "react";
import { validation } from "./scripts/validation";
import { fetchDataChain } from "./scripts/fetchDataChain";

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
  const [newData, setNewData] = useState();

  // HANDLE CHANGE
  const handleChange = (e) => {
    let value = e.target.value;
    validation(value, setInput, setValidate, setErrorMSG);
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDataChain(input, setNewData);
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
          <p>{newData ? `${newData.val3 + newData.val5}` : "No data"}</p>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default App;
