import styles from './ProfileContent.module.css';

const mockOrders = [
    {
        id: 'ORD-2024-001',
        date: '05.06.2026',
        games:['Cyberpunk 2077', 'The Witcher 3'],
        total: 3498,
        status: 'Выполнен',
    },
    {
        
        id: 'ORD-2024-002',
        date: '28.05.2026',
        games: ['Red Dead Redemption 2'],
        total: 2299,
        status: 'Выполнен',
    },
    {
        id: 'ORD-2024-003',
        date: '15.05.2026',
        games: ['Starfield', 'Elden Ring', 'Hollow Knight'],
        total: 6897,
        status: 'Выполнен',
    },
];

export function ProfileContent(){
    return(
        <div className={styles.content}>
            <section className={styles.card}>
                <h2 className={styles.cardTitle}>📦 История заказов</h2>

                <div className={styles.orders}>
                    {mockOrders.map((order) => (
                        <article key={order.id} className={styles.order}>
                            <div className={styles.orderHeader}>
                                <span className={styles.orderId}>{order.id}</span>
                                <span className={styles.orderDate}>{order.date}</span>
                                <span className={styles.orderStatus}>{order.status}</span>
                            </div>
                            <p className={styles.orderGames}>{order.games.join(', ')}</p>
                            <div className={styles.orderFooter}>
                                <span className={styles.orderTotal}>
                                    Итого: ₽{order.total.toLocaleString('ru-RU')}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className={styles.card}>
                <h2 className={styles.cardTitle}>⚙️ Настройки</h2>
                <div className={styles.settings}>
                    <button className={styles.settingsBtn} type="button">Изменить пароль</button>
                    <button className={styles.settingsBtn} type="button">Уведомления</button>
                    <button className={styles.settingsBtn} type="button">Приватность</button>
                </div>
            </section>

        </div>
    )
}