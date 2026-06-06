import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        
        {/* Column 1: Brand */}
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <img src="/logo.png" alt="Nihao Pharmaceuticals® Logo" className={styles.logoImage} />
          </div>
          <p className={styles.tagline}>Quality wellness, within reach.</p>
          <address className={styles.address}>
            B-48, First Floor, CSC Market<br />
            Pushpanjali Enclave, Pitampura<br />
            Delhi – 110034
          </address>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.linksCol}>
          <h4 className={styles.heading}>QUICK LINKS</h4>
          <nav className={styles.links} aria-label="Footer navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>

        {/* Column 3: Contact */}
        <div className={styles.contactCol}>
          <h4 className={styles.heading}>GET IN TOUCH</h4>
          <div className={styles.contactLinks}>
            <a href="tel:+918287801305">+91 82878 01305</a>
            <NavLink to="/contact">nihaopharmaceuticals@gmail.com</NavLink>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className={`container`}>
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Nihao Pharmaceuticals®. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
