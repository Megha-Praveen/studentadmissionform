import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar style={{zIndex:1}} className="bg-primary position-fixed w-100">
        <Container>
          <Navbar.Brand className='fs-5 text-white'>Student Admission Form</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
