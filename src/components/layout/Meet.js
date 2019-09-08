import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 900px;
  align-items: center;
  background-color: lightGreen;
  justify-content: center;
`;
const CalibriFont = styled.span`
  font-family: avenir-lt-w01_35-light1475496, sans-serif;
  //font-family: Calibri;
  font-size: 24px
`;
const ArialFont = styled.span`
  font-family: Arial,Helvetica,sans-serif;
  //font-family: Calibri;
  font-size: 35px;
  font-weight: 300;
`;
const Meet = () => {
  return (
    <Container id='meet'>
      <CalibriFont>Meet Tracy</CalibriFont>
      <ArialFont>Hi, I'm Tracy</ArialFont>
    </Container>
  )
}

export default Meet;