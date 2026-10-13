import { Link } from 'react-router-dom';
import { Button } from '../../../../shared/ui/Button/Button'
import { Container } from '../../../../shared/ui/Container/Container';
import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
            <Container>
                    <div className={styles.inner}>
                        <div className={styles.content}>
                            <h1 className={styles.title}>
                                Погрузись в<span className={styles.highlight}>новые миры</span>
                            </h1>
                            <p className={styles.subtitle}>
                                Огромный выбор PC-игр, эксюзивные скидки и мгновенная доставка ключей
                            </p>
                            <div className={styles.buttons}>
                                <Button as={Link} to="/catalog" size='large'>
                                    Начать покупки
                                </Button>
                                <Button variant="outline" size='large'>
                                    Смотреть трейлер
                                </Button>
                            </div>
                        </div>
                    <div className={styles.image}>
                        <img src="/images/game_baner.jpg" alt="Игровой банер" />
                    </div>
                </div>
            </Container>
        </section>
    );
}