import '@styles/App.css'
import elPoderDelAhora from '@public/thePowerOfNow.jpg'

function BookCard() {
    return (
        <>
        <div className="book-card-container">
            <div className="book-card">
                <div className="book-image">
                    <img src={elPoderDelAhora} alt="El poder del ahora"/>
                </div>
                <div className="book-info">
                    <div className="book-title-author">
                        <h3>El Poder del Ahora</h3>
                        <h4>Eckhart Tolle</h4>
                    </div>
                    <div className="book-description">
                        <p>Uno de los bestsellers más famosos de todos los tiempos, nos enseña a cómo estar presentes en el momento actual y no sobrepensar.</p>
                    </div>
                </div>
                <div className="book-details-btn">
                    <button>Detalles</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default BookCard