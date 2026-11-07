import { useDispatch } from 'react-redux';
import { Container } from '../../../../shared/ui/Container/Container';
import { Button } from '../../../../shared/ui/Button/Button';
import { addToCart } from '../../../../features/cart/cartSlice';
import styles from './ProductHero.module.css';
import { useTranslation } from 'react-i18next';

export function ProductHero({ game }) {
  const dispatch = useDispatch();
  const { title, genre, tags, price, oldPrice, imageUrl, rating, releaseYear } = game;
  const { t } = useTranslation();

  const hasDiscount = oldPrice && oldPrice > price;
  const discountPercent = hasDiscount
    ? Math.round((1 - price / oldPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    dispatch(addToCart(game));
  };

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.imageWrapper}>
            <img src={imageUrl} alt={title} className={styles.image} />
            {hasDiscount && (
              <span className={styles.discountBadge}>-{discountPercent}%</span>
            )}
          </div>

          <div className={styles.info}>
            <div className={styles.meta}>
              <span className={styles.genre}>{genre}</span>
              {tags?.length > 0 && (
                <div className={styles.tags}>
                  {tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>

            <h1 className={styles.title}>{title}</h1>

            <div className={styles.stats}>
              <span className={styles.rating}>★ {rating.toFixed(1)}</span>
              <span className={styles.year}>{releaseYear}</span>
            </div>

            <div className={styles.prices}>
              <span className={styles.price}>
                ₽{price.toLocaleString('ru-RU')}
              </span>
              {hasDiscount && (
                <span className={styles.oldPrice}>
                  ₽{oldPrice.toLocaleString('ru-RU')}
                </span>
              )}
            </div>

            <div className={styles.actions}>
              <Button size="large" onClick={handleAddToCart}>
                {t('product.addToCart')}
              </Button>
              <Button variant="outline" size="large">
                {t('product.buyNow')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}