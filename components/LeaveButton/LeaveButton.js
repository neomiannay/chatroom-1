import React, { useEffect, useState } from "react";

import { LeaveButtonContainer } from "./LeaveButton.styles";

function LeaveButton({ setIsDoorClicked }) {

    // const [room, setRoom] = useState("");
    // const [user, setUser] = useState("");
    
    // useEffect(() => {
    //     socket.on("room", setRoom);
    //     socket.on("user", setUser);
    // }, [socket]);
    
    // const leaveRoom = () => {
    //     socket.emit("leaveRoom", { room, user });
    // };
    
    return (
        <LeaveButtonContainer
            onClick={() => setIsDoorClicked(false)}
        >
            <p>Sortie</p>
            <svg width="88" height="14" viewBox="0 0 88 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M78.231 10L77 14L88 7.14894L77 0L77.9118 4H0V10H78.231Z" fill="#017C2B"/>
            </svg>
        </LeaveButtonContainer>
    );
}

export default LeaveButton;