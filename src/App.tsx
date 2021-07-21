import React from 'react';
import './style.css';
import Container from './Containers/Container';
import NavBar from './Components/NavBar/NavBar';
import AboutMe from './Components/Sections/AboutMe';

const App = (): React.ReactElement => {
  return (
    <Container>
      <NavBar />
      {/* <p>Hello World</p> */}
      <AboutMe />
    </Container>
  );
}

export default App;
