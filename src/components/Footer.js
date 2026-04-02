import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container" style={containerStyle}>
        <div style={copyrightStyle}>
          © 2026 MYBLOG. All rights reserved.
        </div>
        <div style={socialStyle}>
          <a href="#" style={linkStyle}>Facebook</a>
          <a href="#" style={linkStyle}>Instagram</a>
          <a href="#" style={linkStyle}>Twitter</a>
          <a href="#" style={linkStyle}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'var(--primary-color)',
  color: 'white',
  padding: '2rem 0',
  fontSize: '0.9rem',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const copyrightStyle = {
  opacity: 0.7,
};

const socialStyle = {
  display: 'flex',
  gap: '1.5rem',
};

const linkStyle = {
  opacity: 0.7,
  fontSize: '0.8rem',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

export default Footer;
