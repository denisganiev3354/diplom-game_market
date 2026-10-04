export function NotFound() {
    return (
        <div className="container" style={{padding: '80px 20px', textAlign: 'center'}}>
            <h1 style={{fontSize:'4rem'}}>404</h1>
            <p>Страница не найдена</p>
            <Link to="/" style={{display: 'inline-block', marginTop:20}}>На главную</Link>
        </div>
    )
}