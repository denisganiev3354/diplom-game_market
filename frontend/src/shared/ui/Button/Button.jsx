import styles from './Button.module.css';

console.log('=== Button.jsx loaded ===');
console.log('styles object:', styles);
console.log('styles.button:', styles?.button);
console.log('styles.primary:', styles?.primary);

export function Button({
    children,
    variant = 'primary',
    size = 'medium',
    as: Component = 'button',
    className = '',
    ...rest
}) {
    const classes = [
        styles.button,
        styles[variant],
        styles[size],
        className,
    ]
        .filter(Boolean)
        .join(' ');

        console.log('=== Button render ===');
        console.log('variant:', variant, 'size:', size);
        console.log('styles.button:', styles.button);
        console.log('styles[variant]:', styles[variant]);
        console.log('final classes:', classes);

        return(
            <Component className ={classes} {...rest}>
                {children}
            </Component>
    );
}