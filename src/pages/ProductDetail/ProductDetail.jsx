import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useSEO } from '../../hooks/useSEO';
import styles from './ProductDetail.module.css';

export default function ProductDetail() {
  useScrollReveal();

  const { slug } = useParams();
  const product = products.find(p => p.id === slug);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const navigate = useNavigate();

  const pageTitle = product ? `${product.name} | Nihao Pharmaceuticals®` : 'Product Not Found | Nihao Pharmaceuticals®';
  const pageDescription = product ? product.shortDescription : 'Product not found.';
  
  useSEO(pageTitle, pageDescription);

  // Reset gallery index on product change
  useEffect(() => {
    setActiveImageIdx(0);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <br />
        <Link to="/products" className="btn-primary">Return to Products</Link>
      </div>
    );
  }

  const relatedMapping = {
    'glutamide-1200': ['agelio-tablets', 'vitz-c'],
    'follihao': ['agelio-tablets', 'agelio-sachet'],
    'agelio-tablets': ['glutamide-1200', 'agelio-sachet'],
    'agelio-sachet': ['agelio-tablets', 'glutamide-1200'],
    'vitz-c': ['glutamide-1200', 'calcicum-d3'],
    'calcicum-d3': ['vitz-c', 'agelio-tablets']
  };

  const relatedProducts = (relatedMapping[slug] || [])
    .map(relatedSlug => products.find(p => p.id === relatedSlug))
    .filter(Boolean);

  const handleEnquireClick = () => {
    navigate(`/contact?product=${encodeURIComponent(product.name)}`);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Can I take this alongside other supplements?",
      a: "While our formulations are generally safe to stack, we recommend consulting your healthcare provider if you are taking multiple supplements or prescribed medications."
    },
    {
      q: "How long until I see results?",
      a: "Nutraceuticals work at the cellular level. While some experience early benefits within 2-4 weeks, clinical results typically manifest between 8-12 weeks of consistent use."
    },
    {
      q: "Are the ingredients safe for long-term use?",
      a: "Yes, our products use clinically studied ingredients at safe, evidence-based dosages. However, we advise following the recommended duration and consulting a doctor for continuous long-term use."
    }
  ];

  return (
    <div className={styles.productDeep}>
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <Link to="/" className={styles.crumb}>Home</Link>
          <span className={styles.crumbSep}>&gt;</span>
          <Link to="/products" className={styles.crumb}>Products</Link>
          <span className={styles.crumbSep}>&gt;</span>
          <span className={styles.crumbActive}>{product.name}</span>
        </div>
      </div>

      {/* 1. PRODUCT HERO */}
      <section className={`${styles.heroSection} reveal-on-scroll`}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroImageCol}>
            {product.gallery ? (
              <div className={styles.galleryWrapper}>
                <div className={styles.imageWrapper} style={{ backgroundColor: `${product.color}0A` }}>
                  <img src={product.gallery[activeImageIdx]} alt={product.name} className={styles.heroImage} loading="eager" fetchPriority="high" decoding="sync" />
                </div>
                <div className={styles.thumbnailStrip}>
                  {product.gallery.map((imgUrl, idx) => (
                    <div 
                      key={idx} 
                      className={`${styles.thumbWrapper} ${activeImageIdx === idx ? styles.thumbActive : ''}`}
                      onClick={() => setActiveImageIdx(idx)}
                      style={{ borderColor: activeImageIdx === idx ? product.color : '#E2E8F0' }}
                    >
                      <img src={imgUrl} alt={`${product.name} view ${idx + 1}`} className={styles.thumbImage} loading="lazy" decoding="async" />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className={styles.imageWrapper} style={{ backgroundColor: `${product.color}0A` }}>
                <img src={product.image} alt={product.name} className={styles.heroImage} loading="eager" fetchPriority="high" decoding="sync" />
              </div>
            )}
          </div>
          <div className={styles.heroContentCol}>
            <div className={styles.metaRow}>
              <span className={styles.category} style={{ color: product.color }}>{product.category}</span>
              <span className={styles.formBadge}>{product.form}</span>
            </div>
            <h1 className={styles.productName}>{product.name}</h1>
            <h2 className={styles.tagline}>{product.tagline}</h2>
            
            <p className={styles.shortDesc}>{product.shortDescription}</p>

            {product.mrp && (
              <div className={styles.mrpBox}>
                <span className={styles.mrpLabel}>MRP</span>
                <span className={styles.mrpValue}>{product.mrp}</span>
              </div>
            )}
            
            <div className={styles.quickFacts}>
              <div className={styles.fact}>
                <span className={styles.factIcon}>✓</span>
                <span>Clinical Grade</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factIcon}>✓</span>
                <span>Transparent Labeling</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factIcon}>✓</span>
                <span>Highly Bioavailable</span>
              </div>
            </div>

            <div className={styles.actionRow}>
              <button 
                className={styles.primaryAction} 
                style={{ backgroundColor: product.color }}
                onClick={handleEnquireClick}
              >
                Enquiry Form
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2, 3, 4, 5, 6. OVERVIEW, BENEFITS, HOW IT WORKS, INGREDIENTS */}
      <section className={`${styles.scienceSection} reveal-on-scroll`}>
        <div className="container">
          <div className={styles.scienceGrid}>
            <div className={styles.scienceLeft}>
              <h3 className={styles.sectionHeading}>Clinical Overview</h3>
              <p className={styles.longDesc}>{product.longDescription}</p>
              
              <div className={styles.howItWorksBox}>
                <h4 className={styles.subHeading}>How It Works</h4>
                <p className={styles.howText}>
                  This formulation operates synergistically at the cellular level. By combining high-potency primary compounds with essential co-factors, it maximizes absorption and ensures that the active ingredients reach their target tissues effectively, bypassing typical degradation pathways.
                </p>
              </div>

              <div className={styles.benefitsBox}>
                <h4 className={styles.benefitsTitle}>Key Benefits</h4>
                <ul className={styles.benefitsList}>
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className={styles.benefitItem}>
                      <span className={styles.bullet} style={{ borderColor: product.color }}></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.scienceRight}>
              <div className={styles.ingredientsPanel}>
                <h3 className={styles.panelHeading}>Ingredient Breakdown</h3>
                <p className={styles.panelSub}>Complete formulation disclosure. No proprietary blends.</p>
                <div className={styles.ingredientStack}>
                  {product.ingredients.map((ing, idx) => (
                    <div key={idx} className={styles.ingredientCard}>
                      <span className={styles.ingName}>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7, 8. HOW TO USE & DURATION */}
      <section className={`${styles.protocolSection} reveal-on-scroll`}>
        <div className={`container ${styles.protocolContainer}`}>
          <div className={styles.protocolHeader}>
            <h3 className={styles.sectionHeading}>Usage Protocol</h3>
            <p className={styles.protocolSub}>Follow these guidelines for optimal clinical efficacy.</p>
          </div>
          
          <div className={styles.protocolGrid}>
            <div className={styles.protocolBox}>
              <div className={styles.protoLabel}>How To Use</div>
              <div className={styles.protoVal}>{product.howToUse}</div>
            </div>
            <div className={styles.protocolBox}>
              <div className={styles.protoLabel}>Recommended Duration</div>
              <div className={styles.protoVal}>{product.duration || 'As directed by your healthcare provider'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9, 12. PRECAUTIONS & MEDICAL DISCLAIMER */}
      <section className={`${styles.disclaimerSection} reveal-on-scroll`}>
        <div className="container">
          <div className={styles.disclaimerWrapper}>
            <h4 className={styles.discHeading}>Precautions & Medical Disclaimer</h4>
            <div className={styles.discContent}>
              <p>Do not exceed the recommended daily dose. Dietary supplements should not be used as a substitute for a varied and balanced diet and healthy lifestyle.</p>
              <p>If you are pregnant, nursing, taking any medications or have any medical condition, consult your doctor before use. Keep out of reach of children. Store in a cool, dry place.</p>
              <p className={styles.fdaWarning}>This product is a dietary supplement. It is not intended to diagnose, treat, cure, or prevent any disease.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className={`${styles.faqSection} reveal-on-scroll`}>
        <div className={`container ${styles.faqContainer}`}>
          <h3 className={styles.sectionHeadingCentered}>Frequently Asked Questions</h3>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${activeFaq === index ? styles.faqActive : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqQuestion}>
                  <span>{faq.q}</span>
                  <span className={styles.faqIcon}>{activeFaq === index ? '−' : '+'}</span>
                </div>
                {activeFaq === index && (
                  <div className={styles.faqAnswer}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className={`${styles.relatedSection} reveal-on-scroll`}>
          <div className="container">
            <h3 className={styles.relatedHeading}>Related Therapies</h3>
            <div className={styles.relatedGrid}>
              {relatedProducts.map(rel => (
                <Link to={`/products/${rel.id}`} key={rel.id} className={styles.relatedCard}>
                  <div className={styles.relImageWrapper}>
                    <img src={rel.image} alt={rel.name} className={styles.relImage} loading="lazy" decoding="async" />
                  </div>
                  <div className={styles.relBody}>
                    <span className={styles.relCat} style={{ color: rel.color }}>{rel.category}</span>
                    <h4 className={styles.relName}>{rel.name}</h4>
                    <span className={styles.relLink} style={{ color: rel.color }}>View Details &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
