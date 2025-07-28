import styles from "../styles/Footer.module.css";
import AnimatedContent from "../animations/AnimatedContent/AnimatedContent.jsx";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "./Container/Container";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Container>
        <h4 className={styles.footerTitle}>CONTACTÁNOS Y SEGUINOS</h4>

        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={true}
          duration={2}
          ease="power3.out"
          threshold={0.1}
          delay={0.6}
        >
          <div className={styles.socialWrapper}>
            <div className={styles.socialCard}>
              <FaWhatsapp size={100} className={styles.icon} />
              <a
                className={styles.socialText}
                href="https://wa.me/5491126440661"
                target="_blank"
                rel="noopener"
              >
                +54 9 11 2644-0661
              </a>
            </div>
            <div className={styles.socialCard}>
              <FaInstagram size={100} className={styles.icon} />
              <a
                className={styles.socialText}
                href="https://www.instagram.com/fanpro.oficial/"
              >
                fanpro.oficial
              </a>
            </div>
            <div className={styles.socialCard}>
              <FaTiktok size={100} className={styles.icon} />
              <a
                className={styles.socialText}
                href="https://www.tiktok.com/@fanprook"
              >
                fanpro.oficial
              </a>
            </div>
          </div>
        </AnimatedContent>
      </Container>
    </footer>
  );
};
