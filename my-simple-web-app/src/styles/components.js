import styled from "styled-components";

// STYLED COMPONENTS
export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
export const Container = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextCon = styled.div``;
export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 0px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const Button = styled.button`
  margin: 0 auto;
  width: 250px;
  height: 45px;
  border: none;
  outline: none;
  color: #fff;
  margin-top: 20px;
  font-size: 14px;
  background-color: #5ab979;
  text-shadow: 0 1px rgba(0, 0, 0, 0.4);
  box-shadow: 0 3px 2px 0 #5ab979;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
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
  margin-top: -0px;
  padding-left: 2px;
  width: 100%;
  font-size: 12px;
`;