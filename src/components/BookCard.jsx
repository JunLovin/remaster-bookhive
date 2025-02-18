import { useNavigate } from 'react-router-dom'
import '@styles/App.css'

function BookCard({ thumbnail, title, author, description, id}) {
    const navigate = useNavigate()

    const handleBook = id => {
        navigate(`/bookInfo`)
    }

    return (
        <>
        <div className="book-card-container">
            <div className="book-card">
                <div className="book-image">
                    <img src={thumbnail ? thumbnail : "Imagen no encontrada"} alt={title}/>
                </div>
                <div className="book-info">
                    <div className="book-title-author">
                        <h3>{title && title.length > 24 ? title.substring(0, 26) + "..." : "Título no encontrado"}</h3>
                        <h4>{author}</h4>
                    </div>
                    <div className="book-description">
                        <p>{description && description.length > 80 ? description.substring(0, 80) + "..." : "Descripción no encontrada"}</p>
                    </div>
                </div>
                <div className="book-details-btn">
                    <button onClick={() => handleBook()}>Detalles</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default BookCard