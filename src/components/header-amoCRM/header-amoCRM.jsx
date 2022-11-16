import styles from './header-amoCRM.module.scss';
import welbex from '../../images/logo_welbex.png';
import telegram from '../../images/telegram.png';
import whatsapp from '../../images/whatsapp.png';
import phone from '../../images/phone.png';

export default function HeaderAmoCRM() {
  return (
    <div>
      <header>
        <nav className={styles.navigation}>
          <ul className={styles.service}>
            <li className={styles.serviceCart}>
              <img src={welbex} alt="welbex" className={styles.welbexLogo} />
              <span className={styles.welbexText}>крупный интегратор CRM в Росcии и ещё 8 странах</span>
            </li>
            <li className={styles.serviceCart}>
              <button className={styles.services} type="button">
                <span className={styles.serviceCartText}>Услуги</span>
              </button>
            </li>
            <li className={styles.serviceCart}>
              <button className={styles.services} type="button">
                <span className={styles.serviceCartText}>Виджеты</span>
              </button>
            </li>
            <li className={styles.serviceCart}>
              <button className={styles.services} type="button">
                <span className={styles.serviceCartText}>Интеграции</span>
              </button>
            </li>
            <li className={styles.serviceCart}>
              <button className={styles.services} type="button">
                <span className={styles.serviceCartText}>Кейсы</span>
              </button>
            </li>
            <li className={styles.serviceCart}>
              <button className={styles.services} type="button">
                <span className={styles.serviceCartText}>Сертификаты</span>
              </button>
            </li>
            <li className={styles.serviceCart}>
              <button className={styles.services} type="button">
                <span className={styles.phone}>+7 555 555-55-55</span>
              </button>
            </li>
            <li className={styles.serviceCart}>
              <button className={styles.services} type="button">
                <img src={telegram} alt="telegram" className={styles.telegram} />
              </button>
            </li>
            <li className={styles.serviceCart}>
              <button className={styles.services} type="button">
                <img src={phone} alt="telegram" className={styles.phone} />
              </button>
            </li>
            <li className={styles.serviceCart}>
              <button className={styles.services} type="button">
                <img src={whatsapp} alt="telegram" className={styles.whatsapp} />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
