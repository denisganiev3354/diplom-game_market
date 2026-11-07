import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next'; // ← ДОБАВИТЬ
import { Container } from '../../shared/ui/Container/Container';
import { Button } from '../../shared/ui/Button/Button';
import { removeFromCart, clearCart } from '../../features/cart/cartSlice';
import styles from './CartPage.module.css';

export function CartPage() {
    const { t } = useTranslation(); // ← ДОБАВИТЬ
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const total = items.reduce((sum, item) => sum + item.price, 0);

    if (items.length === 0) {
        return (
            <Container>
                <div className={styles.empty}>
                    <h1 className={styles.title}>{t('cart.empty')}</h1>
                    <p className={styles.subtitle}>{t('cart.emptyHint')}</p>
                    <Button as={Link} to="/catalog" size="large">
                        {t('cart.goToCatalog')}
                    </Button>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div className={styles.page}>
                <h1 className={styles.title}>{t('cart.title')}</h1>

                <div className={styles.inner}>
                    <div className={styles.items}>
                        {items.map((item) => (
                            <article key={item.id} className={styles.item}>
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className={styles.image}
                                />
                                <div className={styles.itemInfo}>
                                    <Link to={`/product/${item.slug}`} className={styles.itemTitle}>
                                        {item.title}
                                    </Link>
                                    <p className={styles.itemGenre}>{item.genre}</p>
                                </div>
                                <span className={styles.itemPrice}>
                                    ₽{item.price.toLocaleString('ru-RU')}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                    className={styles.removeBtn}
                                    aria-label={t('cart.remove')}
                                >
                                    ✕
                                </button>
                            </article>
                        ))}
                    </div>

                    <aside className={styles.summary}>
                        <h2 className={styles.summaryTitle}>{t('cart.total')}</h2>
                        <div className={styles.summaryRow}>
                            <span>{t('cart.items')}:</span>
                            <span>{items.length}</span>
                        </div>
                        <div className={styles.summaryTotal}>
                            <span>{t('cart.sum')}:</span>
                            <span>₽{total.toLocaleString('ru-RU')}</span>
                        </div>

                        <Button size="large" fullWidth>
                            {t('cart.checkout')}
                        </Button>
                        <button
                            type="button"
                            onClick={() => dispatch(clearCart())}
                            className={styles.clearBtn}
                        >
                            {t('cart.clear')}
                        </button>
                    </aside>
                </div>
            </div>
        </Container>
    );
}