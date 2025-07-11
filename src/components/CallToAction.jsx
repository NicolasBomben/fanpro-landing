import { Container } from "./Container/Container";
import styles from "../styles/CallToAction.module.css";
import waveBackGround from "../../assets/wave.svg";

export const CallToAction = () => {
  return (
    <section className={styles.actionContainer}>

        <img
          src={waveBackGround}
          alt="onda decorativa"
          className={styles.waveImg}
        />

        <div className={styles.actionCard}>
          <h3 className={styles.actionTitle}>HACÉ TU COMPRA</h3>
          <button>
            <a href="https://minorista.fanpro.com.ar/">MINORISTA</a>
          </button>
        </div>
        <div className={styles.actionCard}>
          <h3 className={styles.actionTitle}>HACÉ TU COMPRA</h3>
          <button>
            <a href="https://mayorista.fanpro.com.ar/">MAYORISTA</a>
          </button>
        </div>
    
    </section>
  );
};
