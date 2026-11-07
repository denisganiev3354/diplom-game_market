import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../features/theme/useTheme";
import { LanguageSwitcher } from "../../features/i18n/LanguageSwitcher";
import styles from "./Header.module.css";

export function Header() {
    const { theme, toggle } = useTheme();
    const cartCount = useSelector((state) => state.cart.items.length);
    const { t } = useTranslation();

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
                        {t("nav.home")}
                    </NavLink>
                    <NavLink
                        to="/catalog"
                        className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        }
                    >
                        {t("nav.catalog")}
                    </NavLink>
                    <NavLink to="/promo" className={styles.navLink}>
                        {t("nav.promo")}
                    </NavLink>
                    <NavLink to="/support" className={styles.navLink}>
                        {t("nav.support")}
                    </NavLink>
                </nav>

                <div className={styles.actions}>
                    <LanguageSwitcher />

                    <button
                        type="button"
                        onClick={toggle}
                        className={styles.themeBtn}
                        aria-label={theme === "dark" ? "Светлая тема" : "Тёмная тема"}
                    >
                        {theme === "dark" ? "☀️" : "🌙"}
                    </button>

                    <Link to="/profile" className={styles.profileBtn}>
                        👤 {t("nav.profile")}
                    </Link> 
                    <Link to="/login" className={styles.outlineBtn}>
                        {t("nav.login")}
                    </Link>

                    <Link to="/cart" className={styles.primaryBtn}>
                        {t("nav.cart")}
                        {cartCount > 0 && (
                            <span className={styles.cartBadge}>{cartCount}</span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}
