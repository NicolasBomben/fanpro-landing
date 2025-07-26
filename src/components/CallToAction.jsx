import AnimatedContent from "../animations/AnimatedContent/AnimatedContent.jsx";
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

      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        initalScale={1}
        animateOpacity
        scale={1.1}
        threshold={0.1}
        delay= {0.2}
      >
        <div className={styles.actionCard}>
          <h3 className={styles.actionTitle}>HACÉ TU COMPRA</h3>
          <button>
            <a href="https://minorista.fanpro.com.ar/">MINORISTA</a>
          </button>
        </div>
      </AnimatedContent>

      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        initalScale={1}
        animateOpacity
        scale={1.1}
        threshold={0.1}
        delay={0.2}
      >
        <div className={styles.actionCard}>
          <h3 className={styles.actionTitle}>HACÉ TU COMPRA</h3>
          <button>
            <a href="https://mayorista.fanpro.com.ar/">MAYORISTA</a>
          </button>
        </div>
      </AnimatedContent>
    </section>
  );
};
