import { Container } from '../../../../shared/ui/Container/Container';
import styles from './ProductDetails.module.css';

export function ProductDetails({ game }) {
  const specs = [
    { label: 'Жанр', value: game.genre },
    { label: 'Год выпуска', value: game.releaseYear },
    { label: 'Рейтинг', value: `★ ${game.rating.toFixed(1)} / 5` },
    { label: 'Платформа', value: 'PC (Windows)' },
    { label: 'Язык интерфейса', value: 'Русский, Английский' },
    { label: 'Теги', value: game.tags?.join(', ') || '—' },
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.description}>
            <h2 className={styles.heading}>Об игре</h2>
            <p className={styles.text}>{game.description}</p>
          </div>

          <aside className={styles.specs}>
            <h3 className={styles.specsTitle}>Характеристики</h3>
            <dl className={styles.specsList}>
              {specs.map((spec) => (
                <div key={spec.label} className={styles.specsRow}>
                  <dt className={styles.specsLabel}>{spec.label}</dt>
                  <dd className={styles.specsValue}>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}
