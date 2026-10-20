import styles from './Button.module.css';



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

        return(
            <Component className ={classes} {...rest}>
                {children}
            </Component>
    );
}