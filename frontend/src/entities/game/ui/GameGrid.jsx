import { GameCard } from "./GameCard";
import styles from './GameGrid.module.css'

export function GameGrid({games, onAddToCart}){
    if(!games || games.length === 0 ){
        return (
            <div className={styles.empty}>
                <p>Ничего не найдено</p>
                <p className={styles.emptyHint}>Попробуйте именить фильтры</p>
            </div>
        )
    }
    return (
        <div className={styles.grid}>
            {games.map((game)=>(
                <GameCard
                key={game.id}
                game={game}
                onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
}