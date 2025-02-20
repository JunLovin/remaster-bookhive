import { useState, useEffect } from 'react'
import '@styles/App.css'
import { useNavigate } from 'react-router-dom'

function IndividualBook() {
    const [bookInfo, setBookInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const  bookId  = localStorage.getItem('bookId')

    const fetchBook = id => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setBookInfo(data)
            setIsLoading(false)
        })
        .then((error) => {
            console.log(error)
            setIsLoading(false)
        })
    } 

    console.log(bookInfo)

    useEffect(() => {
        fetchBook(bookId)
    }, [bookId])

    const handleFillHeart = () => {
        const heartpc = document.getElementById('heart')
        const heartmobile = document.getElementById('heart-mobile')
        heartpc.classList.toggle('fill')
        heartmobile.classList.toggle('fill')
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
        <div className="individualBook-container">
        <div className="bubble-background third-bubble"></div>
            <div className="individualBook">
                <div className="heart-container">
                    <svg className="heart" id="heart" onClick={handleFillHeart} xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                </div>
                <div className="individualBook-image-btns">
                <h2 className="mobile-title">{bookInfo.volumeInfo?.title || "Título no disponible"}</h2>
                <div className="book-image">
                    <img 
                        src={bookInfo.volumeInfo?.imageLinks?.large || bookInfo.volumeInfo?.imageLinks?.thumbnail || "Imagen no disponible"} 
                        alt={bookInfo.volumeInfo?.title || "No disponible"}
                    />
                    <svg className="heart-mobile" id="heart-mobile" onClick={handleFillHeart} xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="#E3E63A"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                </div>
                </div>
                <div className="individualBook-text">
                    <h2 className="pc-title">{bookInfo.volumeInfo?.title || "Título no disponible"}</h2>
                    <h3>{bookInfo.volumeInfo?.authors.join(', ')}</h3>
                    <h4>Rating: {bookInfo.volumeInfo?.averageRating || "?"}/5</h4>
                    <p>{bookInfo.volumeInfo?.description && bookInfo.volumeInfo?.description.substring(0, 820) + "..." || "Descripción no disponible"}</p>
                    <div className="book-buttons">
                        <button onClick={() => {
                            window.open(bookInfo.volumeInfo?.previewLink, "_blank")
                        }}>Preview</button>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default IndividualBook