import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../../shared/ui/Container/Container';
import { Button } from '../../shared/ui/Button/Button';
import { removeFromCart, clearCart } from '../../features/cart/cartSlice';
import styles from './CartPage.module.css';

export function CartPage() {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const total = items.reduce((sum, item) => sum + item.price, 0);

    if (items.length === 0) {
        return (
            <Container>
                <div className={styles.empty}>
                    <h1 className={styles.title}>Корзина пуста</h1>
                    <p className={styles.subtitle}>Загляните в каталог — там много интересного</p>
                    <Button as={Link} to="/catalog" size="large">
                        Перейти в каталог
                    </Button>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div className={styles.page}>
                <h1 className={styles.title}>Корзина</h1>

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
                                    aria-label="Удалить из корзины"
                                >
                                    ✕
                                </button>
                            </article>
                        ))}
                    </div>

                    <aside className={styles.summary}>
                        <h2 className={styles.summaryTitle}>Итого</h2>
                        <div className={styles.summaryRow}>
                            <span>Товаров:</span>
                            <span>{items.length}</span>
                        </div>
                        <div className={styles.summaryTotal}>
                            <span>Сумма:</span>
                            <span>₽{total.toLocaleString('ru-RU')}</span>
                        </div>

                        <Button size="large" fullWidth>
                            Оформить заказ
                        </Button>
                        <button
                            type="button"
                            onClick={() => dispatch(clearCart())}
                            className={styles.clearBtn}
                        >
                            Очистить корзину
                        </button>
                    </aside>
                </div>
            </div>
        </Container>
    );
}