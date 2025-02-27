import { useState, useEffect } from 'react'
import '@styles/App.css'

function IndividualBook() {
    const [isInCart, setIsInCart] = useState(false)
    const [booksToBuy, setBooksToBuy] = useState(() => {
        const storedBooks = localStorage.getItem('savedBooksInfo')
        return storedBooks ? JSON.parse(storedBooks) : []
    })
    const [likedBooks, setLikedBooks] = useState(() => {
        const storedBooks = localStorage.getItem('likedBooks')
        return storedBooks? JSON.parse(storedBooks) : []
    })
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

    const saveBook = (title, thumbnail, id) => {
        const newBooksToBuy = [...booksToBuy, {title: title, thumbnail: thumbnail, id: id}]
        setBooksToBuy(newBooksToBuy)
        localStorage.setItem('savedBooksInfo', JSON.stringify(newBooksToBuy))
        alert(`¡Has agregado "${title}" al carrito!`)
        console.log("Libros en el carrito: ", newBooksToBuy)
    }

    const saveLikedBook = (title, thumbnail, id) => {
        if (likedBooks.includes(title, thumbnail)) {
            setTimeout(() => console.log("Ya en el carrito"), 2000)
            return
        }
        const newLikedBooks = [...likedBooks, {title: title, thumbnail: thumbnail, id: id, url: location.pathname}]
        setLikedBooks(newLikedBooks)
        localStorage.setItem('likedBooks', JSON.stringify(newLikedBooks))
        console.log("Libros likeados ", newLikedBooks)
    }

    return (
        <>
        <div className="individualBook-container">
        <div className="bubble-background third-bubble"></div>
            <div className="individualBook">
                <div className="heart-container">
                    <svg className="heart" id="heart" onClick={() => {
                        handleFillHeart()
                        saveLikedBook(bookInfo.volumeInfo?.title, bookInfo.volumeInfo?.imageLinks?.thumbnail, bookInfo.id)
                    }} xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                </div>
                <div className="individualBook-image-btns">
                <h2 className="mobile-title">{bookInfo.volumeInfo?.title || "Título no disponible"}</h2>
                <div className="book-image">
                    <img 
                        src={bookInfo.volumeInfo?.imageLinks?.large || bookInfo.volumeInfo?.imageLinks?.thumbnail || "Imagen no disponible"} 
                        alt={bookInfo.volumeInfo?.title || "No disponible"}
                    />
                    <svg className="heart-mobile" id="heart-mobile" onClick={() => {
                        handleFillHeart()
                        saveLikedBook(bookInfo.volumeInfo?.title, bookInfo.volumeInfo?.imageLinks?.thumbnail, bookInfo.id)
                    }} xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="#E3E63A"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
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
                        <button onClick={() => saveBook(bookInfo.volumeInfo?.title, bookInfo.volumeInfo?.imageLinks?.thumbnail, bookInfo.id)}>{isInCart ? 'Ya en el carrito' : 'Comprar'}</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default IndividualBook