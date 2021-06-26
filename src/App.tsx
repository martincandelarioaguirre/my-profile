import React from 'react';
import './style.css';
import Container from './Containers/Container';
import NavBar from './Components/NavBar/NavBar';

const App = (): React.ReactElement => {
  return (
    <Container>
      <NavBar />
      {/* <p>Hello World</p> */}
    </Container>
  );
}

export default App;
