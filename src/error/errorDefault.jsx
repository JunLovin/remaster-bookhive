import Header from '@components/Header';
import '@styles/App.css'

function ErrorDefault() {

    const handleHome = () => {
        window.open('/', '_self')
    }

    return (
        <>
        <Header/>
        <div className="error-default-container">
            <div className="error-default">
                <div className="error-top">
                    <h2>Error: 404</h2>
                    <p>Oops! Parece que este libro se ha escapado</p>
                </div>
                <div className="error-bottom">
                    <button onClick={handleHome} className="error-button">Encuentra tu próxima aventura</button>                
                </div>
            </div>
        </div>
        </>
    )
}

export default ErrorDefault;