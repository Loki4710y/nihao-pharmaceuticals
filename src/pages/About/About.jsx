import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useSEO } from '../../hooks/useSEO';
import styles from './About.module.css';

const About = () => {
  useScrollReveal();
  useSEO('About Us | Nihao Pharmaceuticals®', 'Learn about Nihao Pharmaceuticals®, our mission, vision, and core values in delivering premium nutraceutical solutions.');

  return (
    <div className={styles.aboutPage}>
      {/* SECTION 1 — PAGE HERO */}
      <section className={styles.pageHero}>
        <div className="container">
          <span className={styles.heroEyebrow}>About Us</span>
          <h1 className={styles.heroTitle}>Built on a Simple Belief.</h1>
          <p className={styles.heroSubtext}>
            That quality healthcare shouldn't be a luxury. Five years ago, we set out to prove it.
          </p>
        </div>
      </section>

      {/* SECTION 2 — OUR STORY */}
      <section className={`${styles.ourStory} reveal-on-scroll`}>
        <div className={`container ${styles.storyContainer}`}>
          <div className={styles.storyLeft}>
            <h2 className={styles.storyHeading}>Our Story</h2>
            <div className={styles.storyText}>
              <p>Nihao Pharmaceuticals® was founded five years ago in Delhi with one clear purpose — to close the gap between high-quality healthcare and everyday affordability.</p>
              <p>We started with a focus on getting the formulations right. Before marketing, before packaging — the product had to work. Our current range reflects years of research into nutraceutical science, skin wellness, hair health, and anti-aging.</p>
              <p>Today we operate from Pitampura, Delhi, serving patients and healthcare professionals who trust our commitment to quality and transparency.</p>
            </div>
          </div>
          <div className={styles.storyRight}>
            <div className={styles.decorativeBlock}>
              <div className={styles.rectLight}></div>
              <div className={styles.rectPrimaryDrop}></div>
              <div className={styles.rectAccentDrop}></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — MISSION & VISION */}
      <section className={`${styles.missionVision} reveal-on-scroll`}>
        <div className={`container ${styles.mvGrid}`}>
          <div className={styles.mvCard}>
            <span className={styles.mvEyebrow}>Our Mission</span>
            <p className={styles.mvText}>To provide high-quality medicines and healthcare solutions to patients at affordable prices.</p>
          </div>
          <div className={styles.mvCard}>
            <span className={styles.mvEyebrow}>Our Vision</span>
            <p className={styles.mvText}>To become a trusted name in wellness-focused pharmaceuticals across India.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CORE VALUES */}
      <section className={`${styles.coreValues} reveal-on-scroll`}>
        <div className="container">
          <h2 className={styles.valuesHeading}>What We Stand For</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueBlock}>
              <h3 className={styles.valueTitle}>Integrity</h3>
              <p className={styles.valueDesc}>We say what we do, and we do what we say. No shortcuts in formulation or communication.</p>
            </div>
            <div className={styles.valueBlock}>
              <h3 className={styles.valueTitle}>Quality</h3>
              <p className={styles.valueDesc}>Ingredient purity and product efficacy are non-negotiable standards.</p>
            </div>
            <div className={styles.valueBlock}>
              <h3 className={styles.valueTitle}>Accessibility</h3>
              <p className={styles.valueDesc}>Effective wellness products should be available to patients who need them most.</p>
            </div>
            <div className={styles.valueBlock}>
              <h3 className={styles.valueTitle}>Transparency</h3>
              <p className={styles.valueDesc}>Full ingredient disclosure, no hidden blends, clear usage information on every product.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section className={`${styles.ctaSection} reveal-on-scroll`}>
        <div className="container">
          <Link to="/products" className={styles.ctaLink}>
            See what we've built &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
