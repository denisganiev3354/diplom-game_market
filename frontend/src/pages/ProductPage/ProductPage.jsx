import { useParams } from "react-router-dom";

export function ProductPage() {
    const { id } = useParams();
    return (
        <div className="container" style={{padding: '60px 20px'}}>
            <h1>Страница товара </h1>
            <p>ID товара: id</p>
        </div>
    );
}
