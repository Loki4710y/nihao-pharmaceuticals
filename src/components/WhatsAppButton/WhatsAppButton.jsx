import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Link 
      to="/contact"
      className={`${styles.whatsappBtn} ${isVisible ? styles.visible : ''}`}
      aria-label="Contact us"
    >
      <svg viewBox="0 0 24 24" className={styles.icon} fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    </Link>
  );
}
