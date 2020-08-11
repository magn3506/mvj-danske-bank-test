import React, { useState } from "react";

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
    validation(e.target.value);
  };

  // VALIDATION
  const validation = (value) => {
    // RESET VALUE WHEN DELETING NUMBERS
    if (value.length == 0) {
      setInput("");
      setValidate(false);
    }

    // TJEK IF NUMBER
    let isNumbReg = new RegExp("^([0-9]*$)");
    if (value.match(isNumbReg)) {
      // TJEK IF 1-10 CHARACTERS
      let reMinMax = new RegExp("^([0-9]{1,10}$)");
      if (!value.match(reMinMax)) {
        setErrorMSG("min-max 1-10 characters");
      } else {
        setInput(value);
        setValidate(true);
        setErrorMSG("");
      }
    } else {
      setErrorMSG("use only numbers");
    }
  };

  // APP
  return (
    <Wrapper className='App'>
      <Container>
        <Form>
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
