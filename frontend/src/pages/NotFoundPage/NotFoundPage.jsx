import { Link } from "react-router-dom";
import { Container } from "../../shared/ui/Container/Container";
import { Button } from "../../shared/ui/Button/Button";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
  return (
    <Container>
      <div className={styles.page}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Страница не найдена</h2>
        <p className={styles.text}>
          Возможно, она была удалена, или вы ошиблись в адресе
        </p>

        <div className={styles.actions}>
          <Button as={Link} to="/" size="large">
            На главную
          </Button>
          <Button as={Link} to="/catalog" variant="outline" size="large">
            В каталог
          </Button>
        </div>
      </div>
    </Container>
  );
}
