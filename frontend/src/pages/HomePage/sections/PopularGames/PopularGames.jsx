import { Link } from 'react-router-dom';
import { Container } from '../../../../shared/ui/Container/Container';
import { GameCard, mockGames } from '../../../../entities/game';
import styles from './PopularGames.module.css';

export function PopularGames() {
    const popular = mockGames.slice(0, 4);

    return(
        <section className={styles.section}>
            <Container>
                <div className={styles.header}>
                    <h2 className={styles.title}>🔥 Популярные игры</h2>
                    <Link to="/catalog" className={styles.link}>
                    Смотреть все →
                    </Link>
                </div>
                <div className={styles.grid}>
                    {popular.map((game)=>(
                        <GameCard
                        key={game.id}
                        game={game}
                        onAddToCart={(g) => console.log('В корзину:' , g.title)}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}