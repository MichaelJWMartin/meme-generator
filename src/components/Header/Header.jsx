import React from 'react';
import styled from 'styled-components';

const HeaderImg = styled.img`
  max-width: 70px;
  margin-right: 6px;
`
const HeaderText = styled.h2`
  font-size: 1.25rem;
  margin-right: auto;
`

const HeaderSubtext = styled.h4`
  font-size: 0.75rem;
  font-weight: 500;
`

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 65px;
  background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);
  color: white;
  padding: 20px;
`

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderImg src="./images/troll-face.png" />
      <HeaderText>Meme Generator</HeaderText>
      <HeaderSubtext>ayy lmao</HeaderSubtext>
    </StyledHeader>
  )
}