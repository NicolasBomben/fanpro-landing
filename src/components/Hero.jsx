import { Container } from "./Container/Container";
import SplitText from "../animations/TextAnimations/SplitText/SplitText";
import styles from "../styles/Hero.module.css";
import AsteriscoBackGround from "../../assets/asterisco.png";
import EstrellaBackGround from "../../assets/estrella.png";
import CorredorBackGround from "../../assets/corredor.png";

export const Hero = () => {
  //constantes para cuadricula
  const totalCells = 14 * 7;
  const cells = Array.from({ length: totalCells });

  return (
    <section className={styles.heroContainer}>
      <Container>
        {/* div que recrea la celda de fondo */}
        <div className={styles.gridOverlay}>
          {cells.map((_, i) => (
            <div key={i} className={styles.gridCell} />
          ))}
        </div>

        {/* Vector # */}
        <img src={AsteriscoBackGround} className={styles.asterisco} alt="" />

        {/* Vector * */}
        <img src={EstrellaBackGround} className={styles.estrella} alt="" />

        {/* Imagen corredor */}
        <img src={CorredorBackGround} className={styles.corredor} alt="" />

        <div className={styles.mainTextContainer}>
          <h1 className={styles.mainTitle}>
            <SplitText
              text="TODO"
              className={styles.mainTitle}
              delay={130}
              duration={2}
              splitType="chars"
              ease="power3.out"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              useScrollTrigger={false} 
            />
            <br />
            <SplitText
              text="CONECTADO"
              className={styles.mainTitle}
              delay={130}
              duration={2}
              splitType="chars"
              ease="power3.out"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              useScrollTrigger={false} 
            />
          </h1>
        </div>
      </Container>
    </section>
  );
};
