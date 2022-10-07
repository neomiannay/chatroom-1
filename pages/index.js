import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import io from "socket.io-client";

import HeaderContainer from '../components/HeaderContainer/HeaderContainer'

import HomePage from '../components/HomePage/HomePage'
import Messages from "../components/Messages/Messages";
import MessageInput from "../components/MessageInput/MessageInput";
import Users from "../components/Users/Users";
import LeaveButton from "../components/LeaveButton/LeaveButton";



export default function Home() {

  const [username, setUsername] = useState(null);
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  
  useEffect(() => { 
    //connection au serveur
    const socket = io("https://whispering-chamber-09886.herokuapp.com/");
    setSocket(socket);
    socket.on("connect", () => {
      console.log("Connected to server");
    });
  }, [])

  return (

    <>
      {!isConnected ? (
        <HomePage
          socket={socket}
          setUsername={setUsername}
          setIsConnected={setIsConnected}
        />
      ) : (
        <main className={styles.main}>
          
          <HeaderContainer username={username}/>
          
            <>
              <div className={styles.mainContent}>
                <Messages socket={socket} />
                <Users socket={socket} />
                <MessageInput socket={socket} />
                <LeaveButton socket={socket} setIsConnected={setIsConnected} />
              </div>
            </>
            
        </main>
      )}
    </>

  )
}
