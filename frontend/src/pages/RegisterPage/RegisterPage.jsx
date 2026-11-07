import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../../shared/ui/Container/Container';
import { Button } from '../../shared/ui/Button/Button';
import styles from './RegisterPage.module.css';

export function RegisterPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
});
    const [errors, setErrors] = useState({});

    const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
        newErrors.name = 'Введите имя';
    } else if (form.name.trim().length < 2) {
        newErrors.name = 'Минимум 2 символа';
    }

    if (!form.email.trim()) {
        newErrors.email = 'Введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        newErrors.email = 'Некорректный email';
    }

    if (!form.password) {
        newErrors.password = 'Введите пароль';
    } else if (form.password.length < 6) {
        newErrors.password = 'Минимум 6 символов';
    }

    if (!form.confirmPassword) {
        newErrors.confirmPassword = 'Повторите пароль';
    } else if (form.password !== form.confirmPassword) {
        newErrors.confirmPassword = 'Пароли не совпадают';
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

    navigate('/profile');
};

return (
    <Container>
        <div className={styles.page}>
        <div className={styles.card}>
            <h1 className={styles.title}>Регистрация</h1>
            <p className={styles.subtitle}>
            Создайте аккаунт, чтобы начать покупки
            </p>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>Имя</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    autoComplete="name"
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>

            <div className={styles.field}>
                <label htmlFor="password" className={styles.label}>Пароль</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Минимум 6 символов"
                    autoComplete="new-password"
                />
                {errors.password && <span className={styles.error}>{errors.password}</span>}
            </div>

            <div className={styles.field}>
                <label htmlFor="confirmPassword" className={styles.label}>
                Повторите пароль
                </label>
                <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className={`${styles.input} ${errors.confirmPassword ? styles.inputError : ''}`}
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                autoComplete="new-password"
                />
                {errors.confirmPassword && (
                <span className={styles.error}>{errors.confirmPassword}</span>
                )}
            </div>

            <Button type="submit" size="large">
                Зарегистрироваться
            </Button>
            </form>

            <p className={styles.footer}>
                Уже есть аккаунт?{' '}
            <Link to="/login" className={styles.link}>
                Войти
            </Link>
            </p>
        </div>
        </div>
    </Container>
    );
}