import React from 'react';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBoxOpen } from 'react-icons/fa';

const NavTop = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" style={{height : "5vh"}}>
        <Container>
            <div>
                <img src="https://i.pinimg.com/736x/73/9d/92/739d92f600c0f710912013c15c58bf3b.jpg" alt="" width="20px" />
            </div>
          <p style={{color : "white" , paddingTop : "10px"}}><FaBoxOpen /> Free shopping for order $500</p>
        </Container>
      </Navbar>
    </>
  );
};

export default NavTop;
