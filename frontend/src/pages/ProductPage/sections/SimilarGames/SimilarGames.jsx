import { Link } from 'react-router-dom';
import { Container } from '../../../../shared/ui/Container/Container';
import { GameGrid, mockGames } from '../../../../entities/game';
import styles from './SimilarGames.module.css';

export function SimilarGames({currentGame}) {
    const similar = mockGames
        .filter((g) => g.genre === currentGame.genre && g.id !== currentGame.id)
        .sort((a,b) => b.rating - a.rating)
        .slice(0, 4);

    if(similar.length === 0) {
        return null;
    }

    return(
        <section className={styles.section}>
            <Container>
                <div className={styles.header}>
                    <h2 className={styles.title}>Похожие игры</h2>
                    <Link to="/catalog" className={styles.link}>
                        Смотреть все →
                    </Link>
                </div>
                <GameGrid games={similar} />
            </Container>
        </section>
    );
}