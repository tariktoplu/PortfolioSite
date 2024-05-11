
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Tarık Toplu.</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="resume.html">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="mycity.html">My City</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="ourheritage.html">Our Heritage</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="interests.html">Interests</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="login.html">Log in</a>
          </li>
        </ul>
        <div className="media-icons">
          <a href="https://www.instagram.com/tarikttoplu/"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/tar%C4%B1ktoplu/"><FaLinkedin /></a>
          <a href="https://github.com/tariktoplu"><FaGithub /></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
