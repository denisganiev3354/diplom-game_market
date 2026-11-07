import { Hero } from './sections/Hero/Hero';
import {PopularGames } from './sections/PopularGames/PopularGames';
import { PromoBanner } from './sections/PromoBanner/Promobanner';
import { NewsSection } from './sections/NewsSection/NewsSection';


export function HomePage() {
    return(
        <>
            <Hero />
            <PopularGames />
            <PromoBanner />
            <NewsSection />
        </>
    );
}