import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigateToPolicy = (e) => {
    e.preventDefault();
    navigate('../policy');
  };

  const handleNavigateToUserAgreement = (e) => {
    e.preventDefault();
    navigate('../userAgreement');
  };

  const handleNavigateToCookiePolicy = (e) => {
    e.preventDefault();
    navigate('../CookiePolicy');
  };

  return (
    <footer style={footerStyle}>
      <hr style={hrStyle} />

      <p style={{ ...copyrightStyle, padding: '0', margin: '0' }}>
        &copy; 2024 Clustle. All rights reserved.
        <Link to="../policy" style={linkStyle} onClick={handleNavigateToPolicy}>
          Privacy policies
        </Link>
        <Link to="../userAgreement" style={linkStyle} onClick={handleNavigateToUserAgreement}>
          User Agreement
        </Link>
        <Link to="../CookiePolicy" style={linkStyle} onClick={handleNavigateToCookiePolicy}>
          Cookie Policies
        </Link>
      </p>
    </footer>
  );
};

// Styles
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  width: '100%',
  position: 'sticky',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '10px',
};

const hrStyle = {
  borderColor: '#555',
};

const copyrightStyle = {
  fontSize: '14px',
  marginTop: '10px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'grey',
  justifyContent: 'center',
  marginLeft: '10px',
};

export default Footer;
