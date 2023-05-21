import './App.css';
import Nav from './components/Nav.js';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';



function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Navbar className="navBar">
        <Container>
          <Navbar.Brand href="#home">Erik</Navbar.Brand>
          <Nav className="right-side-nav-bar">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <Nav />
      <About />
      <Project />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
