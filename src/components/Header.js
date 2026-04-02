import React from 'react';

const Header = () => {
  return (
    <header className="header" style={headerStyle}>
      <div className="container" style={containerStyle}>
        <div className="logo" style={logoStyle}>
          MY<span>BLOG</span>
        </div>
        <nav className="nav" style={navStyle}>
          <ul style={ulStyle}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/pages">Pages</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="cta">
          <button className="btn-primary">My Account</button>
        </div>
      </div>
    </header>
  );
};

const headerStyle = {
  padding: '1.5rem 0',
  borderBottom: '1px solid var(--border-color)',
  backgroundColor: 'var(--bg-white)',
  position: 'sticky',
  top: 0,
  zIndex: 100,
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: '800',
  letterSpacing: '-1px',
};

const navStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
};

const ulStyle = {
  display: 'flex',
  gap: '2rem',
  fontWeight: '600',
  fontSize: '0.9rem',
};

export default Header;
