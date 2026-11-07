import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';

export function useTheme() {
    const theme = useSelector((state) => state.theme.mode);
    const dispatch = useDispatch();

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return {
        theme,
        toggle: () => dispatch(toggleTheme()),
    };
}