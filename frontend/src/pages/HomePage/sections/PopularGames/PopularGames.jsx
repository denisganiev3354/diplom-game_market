import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '../../../../shared/ui/Container/Container';
import { GameGrid, mockGames } from '../../../../entities/game';
import styles from './PopularGames.module.css';

export function PopularGames() {
    const { t } = useTranslation(); // ← ОБЯЗАТЕЛЬНО
    const popular = mockGames.slice(0, 4);

    return (
        <section className={styles.section}>
            <Container>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('home.popular')}</h2> {/* ← ПЕРЕВОД */}
                    <Link to="/catalog" className={styles.link}>
                        {t('home.viewAll')} {/* ← ПЕРЕВОД */}
                    </Link>
                </div>
                <GameGrid games={popular} />
            </Container>
        </section>
    );
}