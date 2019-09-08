import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 900px;
  align-items: center;
  background-color: skyBlue;
  justify-content: center;
`;
const Services = () => {
  return (
    <Container id='services'>
      <h1>Services</h1>
    </Container>
  )
}

export default Services;