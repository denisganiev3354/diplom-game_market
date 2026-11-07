import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

const LANGUAGES = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
];

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language?.slice(0, 2) || "ru";

    return (
        <div className={styles.switcher}>
            {LANGUAGES.map((lang) => (
                <button
                    key={lang.code}
                    type="button"
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`${styles.langBtn} ${currentLang === lang.code ? styles.active : ""}`}
                    aria-label={`Переключить на ${lang.label}`}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}
