import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '../../../../shared/ui/Container/Container';
import styles from './NewsSection.module.css';

const news = [
    {
        id: 1,
        dateKey: 'home.news1Date',
        titleKey: 'home.news1Title',
        excerptKey: 'home.news1Excerpt',
        imageUrl: '/images/sale.jpg',
    },
    {
        id: 2,
        dateKey: 'home.news2Date',
        titleKey: 'home.news2Title',
        excerptKey: 'home.news2Excerpt',
        imageUrl: '/images/new_game.jpg',
    },
];

export function NewsSection() {
    const { t } = useTranslation();

    return (
        <section className={styles.section}>
            <Container>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('home.newsTitle')}</h2>
                    <Link to="/news" className={styles.link}>
                        {t('home.newsAll')}
                    </Link>
                </div>

                <div className={styles.grid}>
                    {news.map((item) => (
                        <article key={item.id} className={styles.item}>
                            <div className={styles.image}>
                                <img src={item.imageUrl} alt={t(item.titleKey)} loading="lazy" />
                            </div>
                            <div className={styles.body}>
                                <span className={styles.date}>{t(item.dateKey)}</span>
                                <h3 className={styles.itemTitle}>{t(item.titleKey)}</h3>
                                <p className={styles.excerpt}>{t(item.excerptKey)}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}