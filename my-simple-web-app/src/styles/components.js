import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
export const Container = styled.div`
  max-width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px 40px;
  box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextCon = styled.div`
  h1 {
    color: #003755;
  }
  p {
    color: #000;
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 0px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
`;
export const Button = styled.button`
  margin: 0 auto;
  width: 150px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  border-radius: 1000px;
  cursor: pointer;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.02) 7%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0.12) 100%
  );
  background-color: #009edd;

  &:hover {
    box-shadow: 1px 1px 2px rgb(0, 0, 0, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    background-color: #cccccc;
    color: #666666;
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.1);
    text-shadow: 0 0px rgba(0, 0, 0, 0.4);
    cursor: not-allowed;
  }
`;

export const FeedBack = styled.p`
  color: red;
  min-height: 20px;
  margin-top: 2px;
  padding-left: 2px;
  width: 100%;
  font-size: 12px;
`;

// MODAL OVERLAY
export const Modal = styled.p`
  width: 100vw;
  height: 100vh;
  position: relative;
  margin: 0;
  background: rgba(0, 0, 0, 0.8);

  .container {
    max-width: 600px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    background-color: #043553;
    padding: 20px 20px;
  }
  .close {
    width: 20px;
    height: 20px;
    color: white;
    text-align: center;
    border-radius: 50%;
    border: 1px solid white;
    font-size: 14px;
    &:hover {
      cursor: pointer;
      background: white;
      color: #000;
    }
  }
  .results {
    margin: 0 auto;
    text-align: center;
    color: white;
    padding: 0px 45px;
    h2 {
      font-size: 3em;
    }
    p {
      font-size: 2em;
    }
  }
`;
