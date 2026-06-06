import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useSEO } from '../../hooks/useSEO';
import styles from './Home.module.css';
import homeBanner from './homebannerr.webp';


const Home = () => {
  useScrollReveal();
  useSEO('Nihao Pharmaceuticals® | Premium Nutraceutical Solutions', 'Nihao Pharmaceuticals® offers premium nutraceutical solutions for skin wellness, hair wellness, anti-aging support, immunity and bone health.');
  
  const [activeFaq, setActiveFaq] = useState(null);
  
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const featuredSix = products;

  const navigate = useNavigate();

  const handleEnquiry = (productName = '') => {
    if (productName) {
      navigate(`/contact?product=${encodeURIComponent(productName)}`);
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className={styles.home}>
      {/* SECTION 2 - HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroLeft}>
            <span className={styles.eyebrow}>Nihao Pharmaceuticals®</span>
            <h1 className={styles.h1}>Premium Nutraceutical Solutions<br />for Skin, Hair & Wellness</h1>
            <p className={styles.subtext}>
              Clinical-grade formulations designed with high-bioavailability ingredients. Bridging the gap between dermatology and daily wellness.
            </p>
            <div className={styles.heroButtons}>
              <Link to="/products" className="btn-primary">View Products</Link>
              <button onClick={() => handleEnquiry()} className={styles.btnSecondaryOutline}>Enquiry Form</button>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroImageContainer}>
              <img src={homeBanner} alt="Nihao Pharmaceuticals® Premium Products Composition" className={styles.heroMainImage} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className={`${styles.trustSection} reveal-on-scroll`}>
        <div className={`container ${styles.trustGrid}`}>
          <div className={styles.trustItem}>
            <h4>5+ Years</h4>
            <p>Experience</p>
          </div>
          <div className={styles.trustItem}>
            <h4>6 Premium</h4>
            <p>Products</p>
          </div>
          <div className={styles.trustItem}>
            <h4>Quality Focused</h4>
            <p>Formulations</p>
          </div>
          <div className={styles.trustItem}>
            <h4>Delhi Based</h4>
            <p>Company</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - ABOUT NIHAO */}
      <section className={`${styles.aboutSection} reveal-on-scroll`}>
        <div className={`container ${styles.aboutContainer}`}>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutHeading}>Five years of quality formulations. Delhi-based excellence.</h2>
            <p className={styles.aboutText}>
              Founded on the principle that effective healthcare should be accessible without compromising on clinical standards. We meticulously source premium compounds—from marine collagen to highly stable L-Glutathione—to create products that deliver tangible results. Our mission is to provide high-quality, transparent, and affordable wellness solutions.
            </p>
            <Link to="/about" className={styles.aboutLink}>Get to know us &rarr;</Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 - HEALTH & WELLNESS CATEGORIES */}
      <section className={`${styles.categoriesSection} reveal-on-scroll`}>
        <div className="container">
          <h2 className={styles.categoriesHeading}>Clinical Focus Areas</h2>
          <div className={styles.categoryGrid}>
            <div className={styles.categoryEditorial}>
              <span className={styles.catNum}>01</span>
              <div>
                <h3 className={styles.catTitle}>Skin Wellness</h3>
                <p className={styles.catDesc}>Formulations designed to inhibit oxidative stress and support dermal radiance from the cellular level.</p>
              </div>
            </div>
            <div className={styles.categoryEditorial}>
              <span className={styles.catNum}>02</span>
              <div>
                <h3 className={styles.catTitle}>Hair Wellness</h3>
                <p className={styles.catDesc}>Targeted micro-nutrients to reduce follicular shedding and stimulate the anagen phase of hair growth.</p>
              </div>
            </div>
            <div className={styles.categoryEditorial}>
              <span className={styles.catNum}>03</span>
              <div>
                <h3 className={styles.catTitle}>Anti-Aging</h3>
                <p className={styles.catDesc}>Bioavailable compounds that replenish structural proteins like collagen and maintain cellular hydration.</p>
              </div>
            </div>
            <div className={styles.categoryEditorial}>
              <span className={styles.catNum}>04</span>
              <div>
                <h3 className={styles.catTitle}>Immunity & Bone</h3>
                <p className={styles.catDesc}>Foundational health support utilizing highly absorbable complexes to maintain bone matrix and defense systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS (Grid) */}
      <section className={`${styles.featuredShowcase} reveal-on-scroll`}>
        <div className="container">
          <h2 className={styles.portfolioSectionHeading}>Product Portfolio</h2>
          <div className={styles.portfolioGrid3Col}>
            {featuredSix.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImageWrapper} style={{ backgroundColor: `${product.color}0A` }}>
                  <img src={product.image} alt={product.name} className={styles.productImg} loading="lazy" decoding="async" />
                </div>
                <div className={styles.productInfo}>
                  <span className={styles.productCategory} style={{ color: product.color }}>{product.category}</span>
                  <h3 className={styles.productTitle}>{product.name}</h3>
                  <p className={styles.productShortDesc}>{product.shortDescription}</p>
                  
                  <div className={styles.productActions}>
                    <Link to={`/products/${product.id}`} className={styles.btnSolidSmall} style={{ backgroundColor: product.color }}>
                      View Details
                    </Link>
                    <button onClick={() => handleEnquiry(product.name)} className={styles.btnWhatsappSmall}>
                      Enquiry Form
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT COMPARISON */}
      <section className={`${styles.comparisonSection} reveal-on-scroll`}>
        <div className="container">
          <h2 className={styles.portfolioSectionHeading}>Compare Our Products</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th className={styles.featureCol}>Benefit / Area</th>
                  <th>Glutamide-1200™</th>
                  <th>Agelio® Tablets</th>
                  <th>Agelio® Sachet</th>
                  <th>Follihao™</th>
                  <th>Vitz-C</th>
                  <th>Calcicum D3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.featureCol}>Skin Brightening</td>
                  <td><span className={styles.check}>✓</span></td>
                  <td></td>
                  <td><span className={styles.check}>✓</span></td>
                  <td></td>
                  <td><span className={styles.check}>✓</span></td>
                  <td></td>
                </tr>
                <tr>
                  <td className={styles.featureCol}>Anti-Aging</td>
                  <td></td>
                  <td><span className={styles.check}>✓</span></td>
                  <td><span className={styles.check}>✓</span></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className={styles.featureCol}>Hair Wellness</td>
                  <td></td>
                  <td></td>
                  <td><span className={styles.check}>✓</span></td>
                  <td><span className={styles.check}>✓</span></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className={styles.featureCol}>Immunity Support</td>
                  <td><span className={styles.check}>✓</span></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><span className={styles.check}>✓</span></td>
                  <td><span className={styles.check}>✓</span></td>
                </tr>
                <tr>
                  <td className={styles.featureCol}>Bone Health</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><span className={styles.check}>✓</span></td>
                </tr>
                <tr>
                  <td className={styles.featureCol}>Antioxidant Support</td>
                  <td><span className={styles.check}>✓</span></td>
                  <td><span className={styles.check}>✓</span></td>
                  <td><span className={styles.check}>✓</span></td>
                  <td></td>
                  <td><span className={styles.check}>✓</span></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 7 - QUALITY & EFFICACY */}
      <section className={`${styles.whyNihao} reveal-on-scroll`}>
        <div className="container">
          <h2 className={styles.whyHeading}>Clinical Standards</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyBlock}>
              <h3 className={styles.whyTitle}>GMP Certified Manufacturing</h3>
              <p className={styles.whyText}>Produced in Good Manufacturing Practice (GMP) certified facilities, ensuring absolute consistency and hygiene.</p>
            </div>
            <div className={styles.whyBlock}>
              <h3 className={styles.whyTitle}>Third-Party Lab Tested</h3>
              <p className={styles.whyText}>Every formulation undergoes rigorous independent testing for purity, potency, and safety before release.</p>
            </div>
            <div className={styles.whyBlock}>
              <h3 className={styles.whyTitle}>100% Transparent Labeling</h3>
              <p className={styles.whyText}>No proprietary blends. Every active ingredient and its exact dosage is printed clearly on the packaging.</p>
            </div>
            <div className={styles.whyBlock}>
              <h3 className={styles.whyTitle}>Evidence-Based Dosages</h3>
              <p className={styles.whyText}>Compounds are included at concentrations proven to be effective in peer-reviewed clinical literature.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={`${styles.faqSection} reveal-on-scroll`}>
        <div className="container">
          <h2 className={styles.portfolioSectionHeading}>Frequently Asked Questions</h2>
          <div className={styles.faqAccordion}>
            {[
              {
                q: "What products does Nihao Pharmaceuticals® offer?",
                a: "Nihao Pharmaceuticals® offers nutraceutical products focused on skin wellness, hair wellness, anti-aging support, immunity, and bone health."
              },
              {
                q: "How can I enquire about a product?",
                a: "You can contact us directly through WhatsApp, phone, email, or the enquiry form available on the website."
              },
              {
                q: "Are your products available across India?",
                a: "Please contact our team for product availability and distribution information."
              },
              {
                q: "How should these products be used?",
                a: "Products should be used as directed on the label or as advised by a healthcare professional."
              },
              {
                q: "How can distributors or business partners contact Nihao Pharmaceuticals®?",
                a: "Distributors and business partners can reach us through the contact page, email, phone, or WhatsApp."
              }
            ].map((faq, index) => (
              <div key={index} className={`${styles.faqItem} ${activeFaq === index ? styles.faqActive : ''}`}>
                <button className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <span className={styles.faqIcon}>{activeFaq === index ? '−' : '+'}</span>
                </button>
                <div className={styles.faqAnswerWrapper}>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - CONTACT CTA */}
      <section className={`${styles.contactCta} reveal-on-scroll`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>Professional Inquiries & Support</h2>
            <p className={styles.ctaSubtext}>For healthcare providers, bulk orders, or product consultations, our team is at your disposal.</p>
            <Link to="/contact" className={styles.btnOutlineWhite}>Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
