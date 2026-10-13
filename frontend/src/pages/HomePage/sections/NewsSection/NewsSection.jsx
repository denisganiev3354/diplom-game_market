import { Link } from 'react-router-dom'
import { Container } from '../../../../shared/ui/Container/Container';
import styles from './NewsSection.module.css';

const news = [
    {
        id: 1,
        date:'12 июня 2026',
        title:'Грандиозная летняя распродажа',
        excerpt: 'Скидки до 75% на тысячи игр. Не упусти свой шанс!',
        imageUrl:'/images/sale.jpg',
    },
    {
        id: 2,
        date:'8 июня 2026',
        title:'Релиз долгожданной новинки',
        excerpt: 'Starfield уже в магазине. Окунись в космическую эпопею.',
        imageUrl:'/images/new_game.jpg',
    },
];

    export function NewsSection() {
        return(
            <section className={styles.section}>
                <Container>
                    <div className={styles.header}>
                        <h2 className={styles.title}>📰 Новости и события</h2>
                        <Link to="/news" className={styles.link}>
                            Все новости →
                        </Link>
                    </div>
                    <div className={styles.grid}>
                        {news.map((item)=>(
                        <article key={item.id} className={styles.item}>
                            <div className={styles.image}>
                                <img src={item.imageUrl} alt={item.title} loading="lazy" />
                            </div>
                            <div className={styles.body}>
                                <span className={styles.date}>{item.date}</span>
                                <h3 className={styles.title}>{item.title}</h3>
                                <p className={styles.excerpt}>{item.excerpt}</p>
                            </div>
                        </article>
                        ))}
                    </div>
                </Container>
            </section>
        );
    }