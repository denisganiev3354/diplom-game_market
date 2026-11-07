import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "../../features/theme/useTheme";
import styles from "./Header.module.css";

export function Header() {
    const { theme, toggle } = useTheme();
    const cartCount = useSelector((state) => state.cart.items.length);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.inner}`}>
                <Link to="/" className={styles.logo}>
                    <span className={styles.logoIcon}>🎮</span>
                    <span className={styles.logoText}>Casper Store Game</span>
                </Link>

                <nav className={styles.nav}>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        to="/catalog"
                        className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    >
                        Каталог
                    </NavLink>
                    <NavLink to="/promo" className={styles.navLink}>
                        Акции
                    </NavLink>
                    <NavLink to="/support" className={styles.navLink}>
                        Поддержка
                    </NavLink>
                </nav>

                <div className={styles.actions}>
                    <button
                        type="button"
                        onClick={toggle}
                        className={styles.themeBtn}
                        aria-label={theme === "dark" ? "Светлая тема" : "Тёмная тема"}
                    >
                        {theme === "dark" ? "☀️" : "🌙"}
                    </button>

                    <Link to="/profile" className={styles.profileBtn}>
                        👤 Профиль
                    </Link>
                    <Link to="/login" className={styles.outlineBtn}>
                        Войти
                    </Link>

                    <Link to="/cart" className={styles.primaryBtn}>
                        Корзина
                        {cartCount > 0 && (
                            <span className={styles.cartBadge}>{cartCount}</span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}
