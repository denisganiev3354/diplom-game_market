import { Link } from 'react-router-dom'
import { Button } from '../../../shared/ui/Button/Button'
import styles from './GameCard.module.css'

export function GameCard({game, onAddToCart}){
    const { slug, title, genre, price, imageUrl } = game;

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onAddToCart?.(game);
    };
    return (
        <article className={styles.card}>
            <Link to={`/product/${slug}`} className={styles.imageLink}>
                <div className={styles.image}>
                    <img src={imageUrl} alt={title} loading='lazy' />
                </div>
            </Link>

            <div className={styles.body}>
                <Link to={`/product/${slug}`} className={styles.titleLink}>
                    <h3 className={styles.title}>{title}</h3>
                </Link>
                <p className={styles.genre}>{genre}</p>
                <div className={styles.footer}>
                    <span className={styles.price}>
                        ₽ {price.toLocaleString('ru-RU')}
                    </span>
                    <Button size="small" onClick={handleAddToCart} >
                        В корзину
                    </Button>
                </div>
            </div>
        </article>
    );
}