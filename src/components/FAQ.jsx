import '@styles/App.css'
import Header from '@components/Header'

function FAQ() {

    const handleQuestion = () => {
        const response = prompt('Escribe tu pregunta:')
        if (!response) {
            alert('Por favor, introduce una pregunta coherente.')
            return
        } else {
            alert(`¡Muchas Gracias! Tu pregunta fue: ${response}, revisaremos tu pregunta y nos pondremos en contacto contigo.`)
        }
    }
    
    return (
        <>
        <Header />
        <div className="faq">
            <div className="bubble-background api-bubble"></div>
            <div className="faq-container">
                <div className="faq-title">
                    <h2>FAQ</h2>
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
                        <p>Siguiendo la <a href="https://developers.google.com/books/docs/overview">documentación oficial</a> podrás utilizar la API de Google para cualquier página.</p>
                    </div>
                </div>
                <div className="faq-button">
                    <button onClick={handleQuestion}>Haz tu pregunta</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default FAQ