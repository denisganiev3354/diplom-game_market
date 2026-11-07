import { useTranslation } from 'react-i18next'; // ← ДОБАВИТЬ
import { Button } from '../../../../shared/ui/Button/Button';
import { Container } from '../../../../shared/ui/Container/Container';
import styles from './PromoBanner.module.css';

export function PromoBanner() {
    const { t } = useTranslation(); // ← ДОБАВИТЬ

    return (
        <section className={styles.section}>
            <Container>
                <div className={styles.banner}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            {t('home.promoTitle1')} <span className={styles.highlight}>{t('home.promoTitle2')}</span>
                        </h2>
                        <p className={styles.description}>
                            {t('home.promoDesc')}
                        </p>
                        <Button size="large">{t('home.promoBtn')}</Button>
                    </div>

                    <div className={styles.badgeWrapper}>
                        <span className={styles.badge}>{t('home.promoBadge')}</span>
                    </div>
                </div>
            </Container>
        </section>
    );
}