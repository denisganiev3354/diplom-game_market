import { useTranslation } from 'react-i18next'; // ← ДОБАВИТЬ
import { Container } from '../../../../shared/ui/Container/Container';
import styles from './ProductDetails.module.css';

export function ProductDetails({ game }) {
  const { t } = useTranslation(); // ← ДОБАВИТЬ

  const specs = [
    { label: t('product.genre'), value: game.genre },
    { label: t('product.year'), value: game.releaseYear },
    { label: t('product.rating'), value: `★ ${game.rating.toFixed(1)} / 5` },
    { label: t('product.platform'), value: 'PC (Windows)' },
    { label: t('product.language'), value: 'Русский, Английский, Deutsch' },
    { label: t('product.tags'), value: game.tags?.join(', ') || '—' },
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.description}>
            <h2 className={styles.heading}>{t('product.about')}</h2>
            <p className={styles.text}>{game.description}</p>
          </div>

          <aside className={styles.specs}>
            <h3 className={styles.specsTitle}>{t('product.specs')}</h3>
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