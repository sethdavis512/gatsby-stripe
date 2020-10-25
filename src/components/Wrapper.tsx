import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    width: 960px;
`

const Wrapper = ({ children }) => <StyledWrapper>{children}</StyledWrapper>

export default Wrapper
