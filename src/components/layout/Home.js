import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 900px;
  align-items: center;
  background-color: pink;
  justify-content: center;
`;
const Home = () => {
  return (
    <Container id='home'>
      <h1>Tracy's Brow Lab</h1>
    </Container>
  )
}

export default Home;