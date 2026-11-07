import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../shared/ui/Button/Button';
import { Container } from '../../../../shared/ui/Container/Container';
import styles from './Hero.module.css';

export function Hero() {
    const { t } = useTranslation();

    return (
        <section className={styles.hero}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            {t('hero.titlePrefix')}{' '}
                            <span className={styles.highlight}>{t('hero.titleHighlight')}</span>
                        </h1>
                        <p className={styles.subtitle}>
                            {t('hero.subtitle')}
                        </p>
                        <div className={styles.buttons}>
                            <Button as={Link} to="/catalog" size="large">
                                {t('hero.start')}
                            </Button>
                            <Button variant="outline" size="large">
                                {t('hero.trailer')}
                            </Button>
                        </div>
                    </div>

                    <div className={styles.image}>
                        <img src="/images/game_baner.jpg" alt={t('hero.titleHighlight')} />
                    </div>
                </div>
            </Container>
        </section>
    );
}