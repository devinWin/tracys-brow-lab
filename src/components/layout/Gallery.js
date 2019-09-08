import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 900px;
  align-items: center;
  background-color: beige;
  justify-content: center;
`;
const Gallery = () => {
  return (
    <Container id='gallery'>
      <h1>Gallery</h1>
    </Container>
  )
}

export default Gallery;