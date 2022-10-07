import { useState, useEffect } from 'react'

import { CorridorContainer } from './Corridor.styles'

function Corridor ({setIsConnected, setIsDoorClicked}) {

    return (
        <CorridorContainer>
            <div onClick={() => setIsDoorClicked(true)}/>
            <img src="couloirFull.png" />

            <div onClick={() => setIsConnected(false)}>
                <p>LOGIN</p>
                <svg width="75" height="14" viewBox="0 0 75 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.76904 10L11 14L0 7.14894L11 0L10.0882 4H75V10H9.76904Z" fill="#017C2B"/>
                </svg>
            </div>
        </CorridorContainer>
    );
}

export default Corridor