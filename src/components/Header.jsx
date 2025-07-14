import styles from '../styles/Header.module.css';
import Logo from '../../assets/logo-fanpro.svg';


export const Header = () => {
  return (
    <div className={styles.headerContainer}>
        <img src={Logo} className={styles.logoImg}alt="FanPro Logo" />
    </div>
  )
}
