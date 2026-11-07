import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // ← ДОБАВИТЬ
import styles from './Footer.module.css';

export function Footer() {
    const { t } = useTranslation(); // ← ДОБАВИТЬ

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.col}>
                    <div className={styles.logo}>
                        <span>🎮</span>
                        <span className={styles.logoText}>Casper Store Game</span>
                    </div>
                    <p className={styles.copy}>{t('footer.copyright')}</p>
                </div>

                <div className={styles.col}>
                    <h4 className={styles.title}>{t('footer.shop')}</h4>
                    <ul className={styles.list}>
                        <li><Link to="/catalog">{t('nav.catalog')}</Link></li>
                        <li><Link to="/promo">{t('nav.promo')}</Link></li>
                        <li><Link to="/gift-cards">{t('footer.giftCards')}</Link></li>
                    </ul>
                </div>

                <div className={styles.col}>
                    <h4 className={styles.title}>{t('footer.support')}</h4>
                    <ul className={styles.list}>
                        <li><Link to="/faq">{t('footer.faq')}</Link></li>
                        <li><Link to="/refund">{t('footer.refund')}</Link></li>
                        <li><Link to="/contacts">{t('footer.contacts')}</Link></li>
                    </ul>
                </div>

                <div className={styles.col}>
                    <h4 className={styles.title}>{t('footer.social')}</h4>
                    <div className={styles.social}>
                        {/* SVG-иконки оставляем как есть */}
                    </div>
                </div>
            </div>
        </footer>
    );
}