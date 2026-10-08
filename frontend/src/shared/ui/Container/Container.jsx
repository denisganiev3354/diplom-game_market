import styles from './Container.module.css';

export function Container({children, className ='', as: Component = 'div'}){
    return(
        <Component className={'${styles.container} ${className}'}>
            {children}
        </Component>
    );
} 