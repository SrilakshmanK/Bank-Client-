// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { HashRouter,Routes,Route } from 'react-router-dom';
// import Register from './register';
// import CashBack from './cashback';
// import Alldata from './alldata';
// import Deposit from './deposit';
// import UserContext from './context.js'; 

// function App() {
//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>

//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#register">Register</Nav.Link>
//             <Nav.Link href="#deposit">Deposit</Nav.Link>
//             <Nav.Link href="#cashback">CashBack</Nav.Link>
//             <Nav.Link href="#alldata">Alldata</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       <HashRouter>
//         <UserContext.Provider value={{"users":[{
//           name:"xyz",
//           email:"xyz@gmail.com",
//           password:"xyz",
//           amount:1000}]}}>
//         <Routes>
//           <Route path = "/register" element={<Register></Register>}></Route>
//           <Route path = "/deposit" element={<Deposit></Deposit>}></Route>
//           <Route path ="/cashback" element={<CashBack></CashBack>}></Route>
//           <Route path ="/alldata" element={<Alldata></Alldata>}></Route>
//         </Routes>
//         </UserContext.Provider>
//       </HashRouter>

//     </>
//   );
// }

// export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Register from './register';
import Deposit from './deposit';
import Cashback from './cashback';
import Alldata from './alldata';
import { UserProvider } from './context';

function Home() {
    return (
        <div className="video-container">
            <video autoPlay muted loop className="background-video">
                <source src={require("./Home.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div>
        </div>
    );
}


function App() {
    return (
        <HashRouter>
            <UserProvider>
                <Navbar bg="dark" variant="dark" expand="md" className="fixed-top">
                    <Container>
                        {/* Logo */}
                        <Navbar.Brand href="#/" className="navbar-brand">
                            <Image
                                src={require("./Legacy.png")}
                                alt="Bank Logo"
                                className="hoverable bounce"
                            />
                        </Navbar.Brand>

                        {/* Toggle Button for Mobile */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        {/* Navbar Links */}
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#/">HOME</Nav.Link>
                                <Nav.Link href="#/register">CREATE</Nav.Link>
                                <Nav.Link href="#/deposit">DEPOSIT</Nav.Link>
                                <Nav.Link href="#/cashback">CASHBACK</Nav.Link>
                                <Nav.Link href="#/alldata">ALL-DATA</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* Page Content */}
                <Container className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/deposit" element={<Deposit />} />
                        <Route path="/cashback" element={<Cashback />} />
                        <Route path="/alldata" element={<Alldata />} />
                    </Routes>
                </Container>
            </UserProvider>
        </HashRouter>
    );
}

export default App;
