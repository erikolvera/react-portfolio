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
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Footer from './components/Footer';
{/* <Header /> */ }
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



function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/portfolio' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
