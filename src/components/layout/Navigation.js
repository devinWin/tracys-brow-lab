import React from 'react';
import { Stack } from 'components';
import Button from '@material-ui/core/Button';

const scrollToElement = (element) => {
  if (document.getElementById(element)) {
    document.getElementById(element).scrollIntoView({ behavior: 'smooth' });
  }
}

const buttonStyle = {
  marginBottom: '20px'
}
const Navigation = () => {
  return (
    <Stack vertical divStyle={{
      // backgroundColor: 'green',
      position: 'fixed',
      right: '4%',
      height: '100%',
    }}>
      <Button size='large' style={buttonStyle} onClick={() => scrollToElement('home')}>Tracy's Brow Lab</Button>
      <Button size='large' style={buttonStyle} onClick={() => scrollToElement('meet')}>Meet Tracy</Button>
      <Button size='large' style={buttonStyle} onClick={() => scrollToElement('services')}>Services</Button>
      <Button size='large' style={buttonStyle} onClick={() => scrollToElement('gallery')}>Gallary</Button>
    </Stack>
  )
}

export default Navigation;