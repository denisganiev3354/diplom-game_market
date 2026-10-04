import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={'container ${styles.inner}'}>
                <link to="/" className={styles.logo}>
                    <span className={styles.logoIcon}>🎮</span>
                    <span className={styles.logoText}>Casper Store Game</span>
                </link>

                <nav className={styles.nav}>
                    <NavLink 
                        to="/"
                        end
                        className={({isActive}) =>
                            isActive ? '${styles.navLink} ${styles.active}' : styles.navLink
                    }
                    >
                        Главная
                    </NavLink>
                    <NavLink 
                        to="/catalog"
                        className={({ isActive}) =>
                            isActive ? '${styles.navLink} ${styles.active}' : styles.navLink
                        }
                    >
                        Каталог
                    </NavLink>
                    <NavLink to="/promo" className={styles.navLink}>Акции</NavLink>
                    <NavLink to="/support" className={styles.navLink}>Поддержка</NavLink>
                </nav>
                        
                <div className={styles.actions}>
                    <Link to="profile" className={styles.profileBtn}>👤Профиль</Link>
                    <Link to="/login" className={styles.outlineBtn}>Войти</Link>
                    <link to="/cart" className='{styles.primaryBtn}'>Корзина</link>
                </div>
            </div>
        </header>
    );
}