import { useState } from 'react'

import { StyledHeaderContainer } from './HeaderContainer.styles'

import ChannelTitle from './ChannelTitle/ChannelTitle'
import Username from './Username/Username'

const HeaderContainer = ({username}) => {

    return (
        <StyledHeaderContainer>
            <ChannelTitle />
            <Username username={username}/>
        </StyledHeaderContainer>
    )
}

export default HeaderContainer