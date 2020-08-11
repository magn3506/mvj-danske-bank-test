// VALIDATION
export const validation = (value, setInput, setValidate, setErrorMSG) => {
  // RESET VALUE WHEN DELETING NUMBERS
  if (value.length === 0) {
    setInput("");
    setValidate(false);
  }

  // TJEK IF NUMBER
  let isNumbRegExp = new RegExp("^([0-9]*$)");
  if (value.match(isNumbRegExp)) {
    // TJEK IF 1-10 CHARACTERS
    let isMinMaxRegExp = new RegExp("^([0-9]{1,10}$)");
    if (!value.match(isMinMaxRegExp)) {
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
