import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import styles from './Products.module.css';

export default function Products() {
  return (
    <div className={styles.productsPage}>
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.eyebrow}>Our Portfolio</div>
          <h1 className={styles.heroTitle}>Clinical Healthcare Solutions</h1>
          <p className={styles.heroSubtext}>
            Meticulously formulated products targeting key areas of dermal, cellular, and structural wellness. Backed by science.
          </p>
        </div>
      </section>

      <section className={styles.portfolioSection}>
        <div className="container">
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id} className={styles.productCard}>
                <div className={styles.cardImageWrapper}>
                  <img src={product.image} alt={product.name} className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCategory} style={{ color: product.color }}>
                      {product.category}
                    </span>
                    <span className={styles.cardForm}>
                      {product.form}
                    </span>
                  </div>
                  <h2 className={styles.cardTitle}>{product.name}</h2>
                  <p className={styles.cardTagline}>{product.tagline}</p>
                  
                  <div className={styles.cardDesc}>{product.shortDescription}</div>
                  
                  <div className={styles.cardAction}>
                    <span className={styles.actionText} style={{ color: product.color }}>View Full Details &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.inquirySection}>
        <div className="container">
          <div className={styles.inquiryContainer}>
            <h2 className={styles.inquiryHeading}>Looking for a Specific Formulation?</h2>
            <p className={styles.inquirySubtext}>
              Contact us for detailed product dossiers, bulk orders, or healthcare professional queries.
            </p>
            <Link to="/contact" className={styles.inquiryButton}>Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
