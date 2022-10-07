import React, { useState } from "react";

import { StyledForm } from './NameInput.styles'

const NameInput = ({ socket, setUsername, setIsConnected }) => {

  const [value, setValue] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    socket.emit("setUsername", value);
    setValue("");
    setUsername(value);
    setIsConnected(true);
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <h3>Veuillez indiquer votre identité afin de pouvoir rentrer</h3>
      <input
        id="messageInput"
        autoFocus
        value={value}
        maxLength="20"
        // placeholder="Set your name"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </StyledForm>
  );
};

export default NameInput;