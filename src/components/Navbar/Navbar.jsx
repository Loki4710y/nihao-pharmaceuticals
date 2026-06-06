import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle close on outside click, focus trap, and body scroll lock
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      if (e.key === 'Tab') {
        if (menuRef.current) {
          const focusableElements = menuRef.current.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length > 0) {
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // prevent scrolling
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className={styles.topContactBar}>
        <div className={`container ${styles.topContactContainer}`}>
          <a href="tel:+918287801305" className={styles.topContactLink}>
            📞 8287801305
          </a>
          <NavLink to="/contact" className={styles.topContactLink}>
            ✉ nihaopharmaceuticals@gmail.com
          </NavLink>
        </div>
      </div>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`} ref={menuRef}>
        <NavLink to="/" className={styles.brand} onClick={closeMenu}>
          <img src="/logo.png" alt="Nihao Pharmaceuticals® Logo" className={styles.logoImage} />
        </NavLink>

        <button 
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <div className={`${styles.overlay} ${isOpen ? styles.visible : ''}`} onClick={closeMenu} aria-hidden="true"></div>

        <nav 
          aria-label="Main navigation" 
          className={`${styles.navLinks} ${isOpen ? styles.menuOpen : ''}`}
        >
          <NavLink to="/" className={({isActive}) => isActive ? styles.active : ''} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? styles.active : ''} onClick={closeMenu}>About</NavLink>
          <NavLink to="/products" className={({isActive}) => isActive ? styles.active : ''} onClick={closeMenu}>Products</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? styles.active : ''} onClick={closeMenu}>Contact</NavLink>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Navbar;
