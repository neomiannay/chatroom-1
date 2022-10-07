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
                  backgroundColor: message.user.id === socket.id ? "#3B82F6" : "white",
                  color: message.user.id === socket.id ? "white" : "black",
                }}
              >{message.value}</p>
              {message.user.id === socket.id ? (
                  <svg width="22" height="12" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.00447 3.41647C0.710416 14.1637 14.9683 18.8465 27.2516 20.4594C30.1815 20.8441 31.547 17.0223 29.5979 14.8011C27.4083 12.3058 26.2617 10.0444 25.7957 8.08338C25.1649 5.42928 22.6305 1 19.9024 1H3.72942C2.31309 1 1.04321 2.00068 1.00447 3.41647Z" fill="#3B82F6" stroke="#313131"/>
                  </svg>
                ) : (
                  <svg className={message.user.id === socket.id ? "" : styles.svgRight}
                    width="22" height="12" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.00447 3.41647C0.710416 14.1637 14.9683 18.8465 27.2516 20.4594C30.1815 20.8441 31.547 17.0223 29.5979 14.8011C27.4083 12.3058 26.2617 10.0444 25.7957 8.08338C25.1649 5.42928 22.6305 1 19.9024 1H3.72942C2.31309 1 1.04321 2.00068 1.00447 3.41647Z" fill="#FBFBFB" stroke="#313131" stroke-width="2"/>
                  </svg>
                )}
            </div>
            </>
          ))}
    </div>
  );
}

export default Messages;
