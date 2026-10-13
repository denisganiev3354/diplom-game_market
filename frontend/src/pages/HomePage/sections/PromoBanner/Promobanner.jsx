import { Button } from '../../../../shared/ui/Button/Button';
import { Container } from '../../../../shared/ui/Container/Container';
import styles from './PromoBanner.module.css';

export function PromoBanner() {
    return(
        <section className={styles.section}>
            <Container>
                <div className={styles.banner}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            Игровой абонемент <span className={styles.highlight}>Pro</span>
                        </h2>
                        <p className={styles.description}>
                            Получи доступ к библиотеке из 100+ игр, эксклюзивные скидки и ранний доступ к новинкам.
                        </p>
                        <Button size="large" >Подробнее</Button>
                    </div>

                    <div className={styles.badgeWrapper}>
                        <span className={styles.badge}>🔥 -40% на первый месяц</span>
                    </div>
                </div>
            </Container>
        </section>
    );
}