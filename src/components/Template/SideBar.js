import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Maksim Y Melnichenko</h2>
        <p><a href="mailto:m.y.melnich@gmail.com">m.y.melnich@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Maksim. I am a forth-year Computer Science Ph.D student at the <a href="https://www.utk.edu/">University of Tennessee Knoxville</a> and
        a graduate research assistant at the <a href="https://icl.utk.edu/">Innovative Computing Laboratory</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Maksim Melnichenko <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
