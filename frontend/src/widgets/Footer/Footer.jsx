import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
    return (
        <footer className="{styles.footer}">
            <div className={'container ${styles.inner}'}>
                <div className={styles.col}>
                    <div className={styles.logo}>
                        <span>🎮</span>
                        <span className={styles.logoText}>Casper Store Game</span>
                    </div>
                    <p className={styles.copy}>© 2026 Casper Store Game. Все права защищены.</p>
                </div>
                <div className={styles.col}>
                    <h4 className={styles.title}>Магазин</h4>
                    <ul className={styles.list}>
                        <li><Link to="/catalog">Каталог</Link></li>
                        <li><Link to="/promo">Акции</Link></li>
                        <li><Link to="/gift-card">Подарочные карты</Link></li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h4 className={styles.title}>Поддержка</h4>
                        <ul className={styles.list}>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/refund" >Возврат</Link></li>
                            <li><Link to="/contacts" >Контакты</Link></li>
                        </ul>
                </div>
                <div className={styles.col}>
                    <h4 className="styles title">Социальные сети</h4>
                    <div className={styles.social}>
                        <a href="https://t.me" target="_blank" rel="nooper noreferrer" className={styles.socialLink} aria-label="Telegram">📱</a>
                        <a href="https://twitter.com" target="_blank" rel="nooper noreferrer" className={styles.socialLink} aria-label="Twitter">🐦</a>
                        <a href="https://youtube.com" target="_blank" rel="nooper noreferrer" className={styles.socialLink} aria-label="Youtube">"▶️/</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}