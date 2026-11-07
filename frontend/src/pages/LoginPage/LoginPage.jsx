import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container } from "../../shared/ui/Container/Container";
import { Button } from "../../shared/ui/Button/Button";
import { setUser } from "../../features/auth/authSlice";
import styles from "./LoginPage.module.css";

export function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!form.email.trim()) {
            newErrors.email = "Введите email";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Некорректный email";
        }

        if (!form.password) {
            newErrors.password = "Введите пароль";
        } else if (form.password.length < 6) {
            newErrors.password = "Минимум 6 символов";
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: undefined });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        dispatch(
            setUser({
                name: "Casper",
                email: form.email,
                role: "user",
            }),
        );

        navigate("/profile");
    };

    return (
        <Container>
            <div className={styles.page}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Вход</h1>
                    <p className={styles.subtitle}>
                        Войдите, чтобы получить доступ к библиотеке
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit} noValidate>
                        <div className={styles.field}>
                            <label htmlFor="email" className={styles.label}>
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                autoComplete="email"
                            />
                            {errors.email && (
                                <span className={styles.error}>{errors.email}</span>
                            )}
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="password" className={styles.label}>
                                Пароль
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
                                value={form.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                autoComplete="current-password"
                            />
                            {errors.password && (
                                <span className={styles.error}>{errors.password}</span>
                            )}
                        </div>

                        <Button type="submit" size="large">
                            Войти
                        </Button>
                    </form>

                    <p className={styles.footer}>
                        Нет аккаунта?{" "}
                        <Link to="/register" className={styles.link}>
                            Зарегистрироваться
                        </Link>
                    </p>
                </div>
            </div>
        </Container>
    );
}
