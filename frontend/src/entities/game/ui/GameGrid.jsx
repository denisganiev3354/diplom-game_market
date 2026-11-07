import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/cart/cartSlice';
import { GameCard } from './GameCard';
import styles from './GameGrid.module.css';

export function GameGrid({ games }) {
    const dispatch = useDispatch();

    if (!games || games.length === 0) {
        return (
            <div className={styles.empty}>
                <p>Ничего не найдено</p>
                <p className={styles.emptyHint}>Попробуйте изменить фильтры</p>
            </div>
        );
    }

    return (
        <div className={styles.grid}>
            {games.map((game) => (
                <GameCard
                    key={game.id}
                    game={game}
                    onAddToCart={(g) => dispatch(addToCart(g))}
                />
            ))}
        </div>
    );
}