import styles from './ProfileSidebar.module.css';

export function ProfileSidebar({ user,onLogout }){
    return(
        <aside className={styles.sidebar}>
            <div className={styles.avatar}>
                {user.name.charAt(0).toUpperCase()}
            </div>
            
            <h2 className={styles.name}>{user.name}</h2>
            <p className={styles.email}>{user.email}</p>


            <span className={styles.role}>
                {user.role === 'admin' ? '👑 Администратор' : '👤 Пользователь'}
            </span>
            <button 
                type='button'
                onClick={onLogout}
                className={styles.logoutBtn}
            >
                Выйти
            </button>
        </aside>
    );
}