import '@styles/App.css'
import Header from '@components/Header'

function FAQ() {
    return (
        <>
        <Header />
        <div className="faq">
            <div className="faq-container">
                <div className="faq-title">
                    <h2>FAQ (Frequently Asked Questions)</h2>
                </div>
                <div className="faq-questions">
                    <div className="question">
                        <h2>¿Cúal es la API usada?</h2>
                        <p>La API utilizada en esta página es la de <a href="https://books.google.com">Google Books</a>.</p>
                    </div>
                    <div className="question">
                        <h2>¿Realmente puedo comprar libros?</h2>
                        <p>No, esta página tiene fines didáctios. Fue hecha para practicar el uso de las API y saber cómo funciona una página de compras detrás de todo. No se puede comprar ningún libro aquí. Si se desea, se puede redirigir al sitio de <a href="books.google.com">Google Books</a> y allí comprar el libro deseado.</p>
                    </div>
                    <div className="question">
                        <h2>¿Cómo puedo utilizar la API?</h2>
                        <p>Es sencillo, en <a href="https://developers.google.com/books/docs/v1/getting_started" target="_blank">esta página</a> Google te enseña a cómo utilizar su API, es cuestión de leer la documentación y listo, no es tan complicado.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FAQ