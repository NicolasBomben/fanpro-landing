import styles from "../styles/Footer.module.css";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "./Container/Container";

export const Footer = () => {
  //constantes para cuadricula
  const totalCells = 14 * 7;
  const cells = Array.from({ length: totalCells });

  return (
    <footer className={styles.footerContainer}>
      <Container>
        {/* div que recrea la celda de fondo */}
        <div className={styles.gridOverlay}>
          {cells.map((_, i) => (
            <div key={i} className={styles.gridCell} />
          ))}
        </div>

        <h4 className={styles.footerTitle}>CONTACTÁNOS Y SEGUINOS</h4>

        <div className={styles.socialWrapper}>
          <div className={styles.socialCard}>
            <FaWhatsapp size={100} className={styles.icon} />
            <p className={styles.socialText}>+54 9 11 2644-0661</p>
          </div>
          <div className={styles.socialCard}>
            <FaInstagram size={100} className={styles.icon} />
            <p className={styles.socialText}>fanpro.oficial</p>
          </div>
          <div className={styles.socialCard}>
            <FaTiktok size={100} className={styles.icon} />
            <p className={styles.socialText}>fanpro.oficial</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
