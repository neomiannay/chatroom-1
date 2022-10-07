import { useState, useEffect } from 'react'
import Image from 'next/image'

import { HomePageContainer } from './HomePage.styles'
import NameInput from '../NameInput/NameInput'


function HomePage ({socket, setUsername, setIsConnected}) {
    
        // const [username, setUsername] = useState(null);
    
        return (
            <HomePageContainer>
                
                <h1>Le Couloir</h1>
                <img src="loginDoor.png" />
                <NameInput
                    socket={socket}
                    setUsername={setUsername}
                    setIsConnected={setIsConnected}
                />
                <span>
                    Lina Aboussair<br/>
                    Néo Miannay
                </span>

            </HomePageContainer>
        )
}

export default HomePage