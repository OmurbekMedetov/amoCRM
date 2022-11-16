import styles from './footer-amoCRM.module.scss';
import telegram from '../../images/telegram.png';
import whatsapp from '../../images/whatsapp.png';
import phone from '../../images/phone.png';

export default function FooterAmoCRM() {
  return (
    <div className={styles.footerAMO}>
      <footer className={styles.footer}>
        <h3 className={styles.company}>О КОМПАНИИ</h3>
        <p className={styles.program}>Партнёрская программа</p>
        <p className={styles.vacation}>Вакансии</p>

        <h3 className={styles.menu}>МЕНЮ</h3>
        <div className={styles.service}>
          <ul className={styles.serviceUl}>
            <li className={styles.serviceLi}>
              <span className={styles.text}>Расчёт стоимости</span>
            </li>
            <li className={styles.serviceLi}>
              <span className={styles.text}>Благодарность клиентов</span>
            </li>
            <li className={styles.serviceLi}>
              <span className={styles.text}>Услуги</span>
            </li>
            <li className={styles.serviceLi}>
              <span className={styles.text}>Кейсы</span>
            </li>
            <li className={styles.serviceLi}>
              <span className={styles.text}>Виджеты</span>
            </li>
            <li className={styles.serviceLi}>
              <span className={styles.text}>Сертификаты</span>
            </li>
            <li className={styles.serviceLi}>
              <span className={styles.text}>Интеграции</span>
            </li>
            <li className={styles.serviceLi}>
              <span className={styles.text}>Блог на Youtube</span>
            </li>
            <li className={styles.serviceLi}>
              <span className={styles.text}>Наши клиенты</span>
            </li>
            <li className={styles.serviceLi}>
              <span className={styles.text}>Вопрос / Ответ</span>
            </li>
          </ul>
        </div>
        <h3 className={styles.contact}>КОНТАКТЫ</h3>
        <button type="button" className={styles.number}>
          +7 555 555-55-55
        </button>
        <div className={styles.connects}>
          <button className={styles.netWork} type="button">
            <img className={styles.telegram} src={telegram} alt="телеграмм" />
          </button>
          <button className={styles.netWork} type="button">
            <img className={styles.phone} src={phone} alt="телефон" />
          </button>
          <button className={styles.netWork} type="button">
            <img className={styles.whatsapp} src={whatsapp} alt="вотс" />
          </button>
        </div>
        <p className={styles.address}>Москва, Путевой проезд 3с1, к 902</p>
        <p className={styles.welbex}>©WELBEX 2022. Все права защищены.</p>
        <p className={styles.confidentionally}>Политика конфиденциальности</p>
      </footer>
    </div>
  );
}
