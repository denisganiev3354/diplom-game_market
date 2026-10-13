import { Link } from 'react-router-dom'
import { Button } from '../../../shared/ui/Button/Button'
import styles from './GameCard.module.css'

export function GameCard({game, onAddToCart}){
    const { slug, title, genre, tags, price, oldPrice, imageUrl } = game;
    const hasDiscount =oldPrice && oldPrice >price;


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
                    {hasDiscount && (
                        <span className={styles.discountBadge}>
                            -{Math.round((1 - price/ oldPrice)* 100)}%
                        </span>
                    )}
                </div>
            </Link>

            <div className={styles.body}>
                <Link to={`/product/${slug}`} className={styles.titleLink}>
                    <h3 className={styles.title}>{title}</h3>
                </Link>

                <p className={styles.genre}>
                    {genre}
                    {tags?.length > 0 && `, ${tags[0]}`}
                </p>

                <div className={styles.footer}>
                    <span className={styles.price}>
                        ₽ {price.toLocaleString('ru-RU')}
                    </span>
                    {hasDiscount && (
                        <span className={styles.oldPrice}>
                            ₽{oldPrice.toLocaleString('ru-RU')}
                        </span>
                    )}
                    <Button size="small" onClick={handleAddToCart} >
                        В корзину
                    </Button>
                </div>
            </div>
        </article>
    );
}