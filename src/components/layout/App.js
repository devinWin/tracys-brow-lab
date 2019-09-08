import React from 'react';
import 'components/layout/App.css';
import { Navigation, Home, Meet, Services, Gallery } from '.';
import { Stack } from 'components';

const App = () => {
  return (
    <div style={{ display : 'absolute', height: '100vh' }}>
      <Navigation />
      <Stack vertical>
        <Home />
        <Meet />
        <Services />
        <Gallery />
      </Stack>
    </div>
  );
}

export default App;











// import logo from 'logo.svg';
//{/* <Navigation /> */}
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>