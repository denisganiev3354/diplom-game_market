import { Hero } from './sections/Hero/Hero';
import {PopularGames } from './sections/PopularGames/PopularGames';
import { PromoBanner } from './sections/PromoBanner/Promobanner';
import { NewsSection } from './sections/NewsSection/NewsSection';


export function HomePage() {
    return(
        // <Container>
        //     <div style={{padding: '60px 0'}}>
        //         <h1>главная</h1>
        //         <p style={{marginBottom: 24}}>Проверяем UI-компоненты</p>
                
        //         <div 
        //         style={{ 
        //             display: 'flex', 
        //             gap:12, 
        //             flexWrap: 'wrap'
        //         }}
        //     >

        //             {mockGames.map((game) =>(
        //                 <GameCard
        //                     key={game.id}
        //                     game={game}
        //                     onAddToCart={(g) => console.log('Добавлено в корзину:', g.title)}
        //                 />
        //             ))}
        //         </div>
        //     </div>
        // </Container>
        <>
            <Hero />
            <PopularGames />
            <PromoBanner />
            <NewsSection />
        </>
    );
}