import styles from './main-amoCRM.module.scss';
import line from '../../images/Line.png';
import redBall from '../../images/redBall.png';
import purpleBall from '../../images/purpleBall.png';
import bigRedBall from '../../images/bigRedBall.png';

export default function MainAmoCRM() {
  return (
    <div>
      <body>
        <main className={styles.main}>
          <img src={bigRedBall} alt="bigRedBall" className={styles.bigRedBall} />
          <img src={redBall} alt="redBall" className={styles.redBall} />
          <img src={purpleBall} alt="purpleBall" className={styles.purpleBall} />
          <h1 className={styles.price}>
            Зарабатывайте больше
            <span className={styles.welbex}> c WELBEX</span>
          </h1>
          <p className={styles.priceText}>Развиваем и контролируем продажи за вас</p>
          <p className={styles.text}>
            Вместе с <span className={styles.consultation}>бесплатной консультацией</span> мы дарим:
          </p>
          <div className={styles.information}>
            <span className={styles.amoCRM}>
              <img src={line} alt="line" className={styles.line} />
              SKYPE АУДИТ
            </span>
            <span className={styles.amoCRM}>
              <img src={line} alt="line" className={styles.line} /> 30 ВИДЖЕТОВ
            </span>
            <span className={styles.amoCRM}>
              <img src={line} alt="line" className={styles.line} /> DASHBOARDS
            </span>
            <span className={styles.amoCRM}>
              <img src={line} alt="line" className={styles.line} /> МЕСЯЦ AMOCRM
            </span>
            <div className={styles.aside}>
              <h4 className={styles.desktop}>
                Виджеты <span className={styles.desktopSpan}>30 готовых решений</span>
              </h4>
              <h4 className={styles.desktop}>
                Dashboard <span className={styles.desktopSpan}>с показателями вашего бизнеса</span>
              </h4>
              <h4 className={styles.desktop}>
                Skype Аудит <span className={styles.desktopSpan}>отдела продаж и CRM системы</span>
              </h4>
              <h4 className={styles.desktop}>
                35 дней <span className={styles.desktopSpan}>использования CRM</span>
              </h4>
            </div>
            <p className={styles.destopText}>Получить консультацию</p>
          </div>
        </main>
      </body>
    </div>
  );
}
