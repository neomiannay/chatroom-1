import React, { useEffect, useState, useRef } from "react";

import styles from "../../styles/Home.module.css";


function Messages({ socket }) {
  const [messages, setMessages] = useState([]);

    const useChatScroll = (dep) => {
    const ref = useRef();
    useEffect(() => {
      if (ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    }, [dep]);
    return ref;
  }

  const ref = useChatScroll(messages);

  useEffect(() => {

    const messageListener = (message) => {
      console.log(message);
      setMessages((prevMessages) => {
        console.log(message);
        return [...prevMessages, message];
      });
    };

    const deleteMessageListener = (messageID) => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        delete newMessages[messageID];
        return newMessages;
      });
    };

    socket.on('messages', setMessages);
    socket.on("message", messageListener);
    socket.on("deleteMessage", deleteMessageListener);
    socket.emit("getMessages");

    return () => {
      socket.off("message", messageListener);
      socket.off("deleteMessage", deleteMessageListener);
    };
  }, [socket]);

  return (
    <div ref={ref} className={styles.container}>
        {messages
          .sort((a, b) => a.time - b.time)
          .map((message, index) => (
            <>
            <div
              className={message.user.id === socket.id ? styles.messageRight : styles.messageLeft}
              key={index}
              isUser={message.user.id === socket.id ? true : false}
              title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
            >
              <h2 className={styles.user}>{message.user.name}</h2>
              <p
                className={styles.text}
                style={{
                  backgroundColor: message.user.id === socket.id ? "#6E9FE5" : "white",
                  color: message.user.id === socket.id ? "white" : "black",
                  borderRadius: message.user.id === socket.id ? "8px 8px 0 8px" : "8px 8px 8px 0",
                }}
              >
                {message.value}
              </p>
            </div>
            </>
          ))}
    </div>
  );
}

export default Messages;
