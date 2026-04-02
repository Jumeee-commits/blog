import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          MY<span>BLOG</span>
        </div>
        <nav className="nav">
          <ul className="nav-list">
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

export default Header;
