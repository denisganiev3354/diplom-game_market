// export function HomePage() {
//     return(
//     <div className="container" style={{padding: '60px 20px'}}>
//         <h1>Главная</h1>
//         <p>Здесь будет Hero игры, акции, новости.</p>
//     </div>
//     )
// }

import { Button } from '../../shared/ui/Button/Button';
import { Container } from '../../shared/ui/Container/Container'

export function HomePage() {
    return(
        <Container>
            <div style={{padding: '60px 0'}}>
                <h1>главная</h1>
                <p style={{marginBottom: 24}}>Проверяем UI-компоненты</p>
                
                <div style={{ display: 'flex', gap:12, flexWrap: 'wrap'}}>
                    <Button variant="primary" size="large">Primary large</Button>
                    <Button variant="primary">Primary medium</Button>
                    <Button variant="primary" size="small">Primary small</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="profile">Профиль</Button>
                    <Button variant="primary" disabled>Disabled</Button>
                </div>
            </div>
        </Container>
    );
}