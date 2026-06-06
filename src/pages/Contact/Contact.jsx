import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useSEO } from '../../hooks/useSEO';
import styles from './Contact.module.css';

export default function Contact() {
  useScrollReveal();
  useSEO('Contact Us | Nihao Pharmaceuticals®', 'Get in touch with Nihao Pharmaceuticals®. We are here to answer your questions and provide support.');
  
  const [submitted, setSubmitted] = useState(false);
  const [productOfInterest, setProductOfInterest] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  
  const location = useLocation();

  useEffect(() => {
    // Check for success param from formsubmit
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('success') === 'true') {
      setSubmitted(true);
    }
    
    // Check for pre-selected product
    const product = searchParams.get('product');
    if (product) {
      setProductOfInterest(product);
    }
  }, [location]);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || import.meta.env.EMAILJS_SERVICE_ID || '';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || import.meta.env.EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.EMAILJS_PUBLIC_KEY || '';

    if (!serviceId || !templateId || !publicKey) {
      setErrorMsg(`Missing EmailJS Configuration. Please ensure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY are set in your secrets.`);
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey: publicKey,
        }
      );
      console.log('Success:', result.text);
      setSubmitted(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMsg(error?.text || error?.message || 'Unable to send enquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className={`${styles.heroSection} page-section reveal-on-scroll`}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.eyebrow}>Contact</div>
          <h1 className={styles.heroTitle}>Let's Talk.</h1>
          <p className={styles.heroSubtext}>
            Whether you have product questions, want to place an order, or are a healthcare professional seeking information — we're here.
          </p>
        </div>
      </section>

      <section className={`${styles.contactSection} page-section reveal-on-scroll`}>
        <div className={`container ${styles.contactContainer}`}>
          <div className={styles.formColumn}>
            <h2 className={styles.columnHeading}>Send Us a Message</h2>
            {submitted ? (
              <div className={styles.successMessage}>
                <h3 className={styles.successTitle}>Thank You!</h3>
                <p className={styles.successText}>Thank you for contacting Nihao Pharmaceuticals®. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form 
                className={styles.contactForm} 
                ref={formRef}
                onSubmit={sendEmail}
              >
                {errorMsg && <div className={styles.errorMessage} style={{color: '#EF4444', marginBottom: '16px', padding: '12px', backgroundColor: '#FEE2E2', borderRadius: '6px', fontSize: '14px', fontWeight: '500'}}>{errorMsg}</div>}

                <div className={styles.formGroup}>
                  <label htmlFor="fullName" className={styles.label}>Full Name</label>
                  <input type="text" id="fullName" name="Name" className={styles.input} required aria-required="true" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phoneNumber" className={styles.label}>Phone Number</label>
                  <input type="tel" id="phoneNumber" name="Phone" className={styles.input} required aria-required="true" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="emailAddress" className={styles.label}>Email Address</label>
                  <input type="email" id="emailAddress" name="Email" className={styles.input} required aria-required="true" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="city" className={styles.label}>City</label>
                  <input type="text" id="city" name="City" className={styles.input} required aria-required="true" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="product" className={styles.label}>Product Interested In</label>
                  <select 
                    id="product" 
                    name="Product" 
                    className={styles.input}
                    value={productOfInterest}
                    onChange={(e) => setProductOfInterest(e.target.value)}
                  >
                    <option value="">-- Select Product --</option>
                    <option value="Glutamide-1200™">Glutamide-1200™</option>
                    <option value="Agelio® Tablets">Agelio® Tablets</option>
                    <option value="Follihao™">Follihao™</option>
                    <option value="Agelio® Sachet">Agelio® Sachet</option>
                    <option value="Calcicum-D3 Nano Shot">Calcicum-D3 Nano Shot</option>
                    <option value="Vitz-C Tablet">Vitz-C Tablet</option>
                    <option value="Multiple Products">Multiple Products</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea id="message" name="Message" className={styles.textarea} required aria-required="true"></textarea>
                </div>
                
                <button type="submit" disabled={isSubmitting} className={`btn-primary ${styles.submitButton}`}>
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
                <div className={styles.formNote}>We typically respond within 24 hours. Your enquiry will be sent directly to nihaopharmaceuticals@gmail.com</div>
              </form>
            )}
          </div>
          
          <div className={styles.infoColumn}>
            <h2 className={styles.columnHeading}>Contact Details</h2>
            
            <div className={styles.infoBlocks}>
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>Our Office</div>
                <div className={styles.infoValue}>
                  B-48, First Floor, CSC Market<br/>
                  Pushpanjali Enclave, Pitampura<br/>
                  Delhi – 110034
                </div>
              </div>
              <div className={styles.separator}></div>
              
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>Phone</div>
                <div className={styles.infoValue}>
                  <a href="tel:+918287801305" className={styles.infoLink}>+91 82878 01305</a>
                </div>
              </div>
              <div className={styles.separator}></div>
              
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>WhatsApp</div>
                <div className={styles.infoValue}>
                  <a href="tel:+918287801305" className={styles.infoLink}>+91 82878 01305</a>
                </div>
              </div>
              <div className={styles.separator}></div>
              
              <div className={styles.infoBlock}>
                <div className={styles.infoLabel}>Email</div>
                <div className={styles.infoValue}>
                  <span className={`${styles.infoLink} ${styles.emailLink}`}>nihaopharmaceuticals@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div className={styles.mapLabel}>Visit Us</div>
            <div className={styles.mapPlaceholder}>
              B-48, CSC Market, Pitampura, Delhi
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.bottomStrip} page-section reveal-on-scroll`}>
        <div className="container">
          <div className={styles.bottomText}>
            Nihao Pharmaceuticals® — Pitampura, Delhi
          </div>
        </div>
      </section>
    </>
  );
}
