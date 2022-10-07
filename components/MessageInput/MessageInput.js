import React, { useState, useEffect } from "react";


import { MessageInputContainer } from "./MessageInput.styles";

const NewMessage = ({ socket }) => {

  const [value, setValue] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    socket.emit("message", value);
    setValue("");
  };

  const inputFocus = () => {
    document.getElementById("messageInput").focus();
  };

  useEffect(() => {
    window.onkeydown = inputFocus
  }, [socket])

  return (
    <MessageInputContainer onSubmit={submitForm}>
      <input
        id="messageInput"
        autoFocus
        maxLength="171"
        value={value}
        placeholder="Envoyer un message"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
    </MessageInputContainer>
  );
};

export default NewMessage;
