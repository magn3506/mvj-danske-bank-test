import React, { useState } from "react";
import "./App.css";

// IMPORT FUNCTIONS
import { validation } from "./scripts/validation";
import { fetchDataChain } from "./scripts/fetchDataChain";

// IMPORT STYLED COMPONENTS
import {
  Wrapper,
  Container,
  Form,
  TextCon,
  Input,
  Button,
  FeedBack,
  Modal,
} from "./styles/components";

const App = () => {
  // STATE
  const [validate, setValidate] = useState(false);
  const [input, setInput] = useState("");
  const [errorMSG, setErrorMSG] = useState("");
  const [newData, setNewData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // HANDLE CHANGE
  const handleChange = (e) => {
    let value = e.target.value;
    validation(value, setInput, setValidate, setErrorMSG);
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDataChain(input, setNewData, setIsModalOpen);
  };

  // HANDLE CLOSE MODAL
  const handeCloseModal = (e) => {
    setIsModalOpen(false);
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
      {isModalOpen && (
        <Modal>
          <div className='container'>
            <div onClick={(e) => handeCloseModal(e)} className='close'>
              X
            </div>
            <div className='results'>
              <h2>Results</h2>
              {newData && (
                <p>
                  {newData.val3}(val3) + {newData.val5}(val5) ={" "}
                  {parseInt(newData.val3) + parseInt(newData.val5)}
                </p>
              )}
            </div>
          </div>
        </Modal>
      )}
    </Wrapper>
  );
};

export default App;
