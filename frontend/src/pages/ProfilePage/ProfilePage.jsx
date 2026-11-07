import { useSelector, useDispatch } from "react-redux";
import { Container } from "../../shared/ui/Container/Container";
import { ProfileSidebar } from "./sections/ProfileSidebar/ProfileSidebar";
import { ProfileContent } from "./sections/ProfileContent/ProfileContent";
import { clearUser } from "../../features/auth/authSlice";
import styles from "./ProfilePage.module.css";

export function ProfilePage() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user) ?? {
        name: "Гость",
        email: "guest@example.com",
        role: "user",
    };

    const handleLogout = () => {dispatch(clearUser())};

    return (
        <section className={styles.page}>
            <Container>
                <h1 className={styles.title}>Личный кабинет</h1>

                <div className={styles.inner}>
                    <ProfileSidebar user={user} onLogout={handleLogout} />
                    <ProfileContent />
                </div>
            </Container>
        </section>
    );
}
