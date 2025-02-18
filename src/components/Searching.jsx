import { useParams } from 'react-router-dom'
import { useApi } from '@context/ApiProvider'
import '@styles/App.css'
import BookCard from '@components/BookCard'

function Searching() {
    const { book } = useParams() // INFO: Guardo el valor del parámetro definido en routes.jsx ':book' para ser utilizado.
    const { data } = useApi()

    console.log(data)

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <>
        <div className="searched-container" id="searched-container">
            <div className="bubble-background second-bubble"></div>
            <h2>Resultados para <span className="searched-book-name">{book}</span></h2> 
            <div className="searched-books-container">
                {data.map((element, index) => {
                    return <BookCard title={element.volumeInfo.title} key={index} thumbnail={element.volumeInfo.imageLinks?.thumbnail} description={element.volumeInfo.description} id={element.id}/>
                })}
            </div>
        </div>
        </>
    )
}

export default Searching