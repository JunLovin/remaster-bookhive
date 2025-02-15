import { useParams } from 'react-router-dom'
import '@styles/App.css'
import BookCard from '@components/BookCard'

function Searching() {
    const { book } = useParams() // INFO: Guardo el valor del parámetro definido en routes.jsx ':book' para ser utilizado.

    return (
        <>
        <div className="searched-container">
            <div className="bubble-background second-bubble"></div>
            <h2>Resultados para <span className="searched-book-name">{book}</span></h2> 
            <div className="searched-books-container">
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </div>
        </div>
        </>
    )
}

export default Searching