import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // ← ДОБАВИТЬ
import { Container } from '../../shared/ui/Container/Container';
import { mockGames } from '../../entities/game';
import { ProductHero } from './sections/ProductHero/ProductHero';
import { ProductDetails } from './sections/ProductDetails/ProductDetails';
import { SimilarGames } from './sections/SimilarGames/SimilarGames';

export function ProductPage() {
    const { slug } = useParams();
    const { t } = useTranslation(); // ← ДОБАВИТЬ
    const game = mockGames.find((g) => g.slug === slug);

    if (!game) {
        return (
            <Container>
                <div style={{ padding: '80px 0', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>404</h1>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                        {t('product.notFound')} {/* ← ПЕРЕВЕЛИ */}
                    </p>
                    <Link
                        to="/catalog"
                        style={{ color: 'var(--accent)', textDecoration: 'underline' }}
                    >
                        {t('product.backToCatalog')} {/* ← ПЕРЕВЕЛИ */}
                    </Link>
                </div>
            </Container>
        );
    }

    return (
        <>
            <ProductHero game={game} />
            <ProductDetails game={game} />
            <SimilarGames currentGame={game} />
        </>
    );
}