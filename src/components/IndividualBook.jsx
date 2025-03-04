import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '@styles/App.css'

function IndividualBook() {
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

    useEffect(() => {
        if (!isLoading && bookInfo.id) {
            const isLiked = likedBooks.some(book => book.id === bookInfo.id)
            if (isLiked) {
                const heartpc = document.getElementById('heart')
                const heartmobile = document.getElementById('heart-mobile')
                if (heartpc && heartmobile) {
                    heartpc.style.fill = '#F3F1FF'
                    heartmobile.style.fill = '#E3E63A'
                }
            }
        }
    })

    const handleFillHeart = () => {
        const heartpc = document.getElementById('heart')
        const heartmobile = document.getElementById('heart-mobile')
        if (likedBooks.some(book => book.id === bookInfo.id)) {
            return
        } else {
            heartpc.classList.toggle('fill')
            heartmobile.classList.toggle('fill')
        }
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    const saveBook = (title, thumbnail, id) => {
        if (booksToBuy.some(book => book.id === bookInfo.id)) {
            alert("Ya está en el carrito de compras, si deseas adquirir otro hazlo desde el carrito, por favor.")
            return
        }
        const newBooksToBuy = [...booksToBuy, {title: title, thumbnail: thumbnail, id: id}]
        setBooksToBuy(newBooksToBuy)
        localStorage.setItem('savedBooksInfo', JSON.stringify(newBooksToBuy))
        alert(`¡Has agregado "${title}" al carrito!`)
        console.log("Libros en el carrito: ", newBooksToBuy)
    }

    const saveLikedBook = (title, thumbnail, id) => {
        if (likedBooks.some(book => book.id === bookInfo.id)) {
            alert("Ya está en favoritos, si deseas eliminarlo por favor hazlo desde favoritos")
            return
        }
        const newLikedBooks = [...likedBooks, {title: title, thumbnail: thumbnail, id: id, url: location.pathname}]
        setLikedBooks(newLikedBooks)
        localStorage.setItem('likedBooks', JSON.stringify(newLikedBooks))
        console.log("Libros likeados ", newLikedBooks)
    }

return (
        <>
        <AnimatePresence mode='wait'>
        <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    duration: 0.5
                }
            }}
            exit={{ 
                opacity: 0, 
                scale: 0.98,
                y: -10,
                transition: { duration: 0.3 }
            }}
            >
                <div className="individualBook-container">
        <div className="bubble-background third-bubble"></div>
            <div className="individualBook">
                <div className="heart-container">
                <motion.svg 
                        className="heart" 
                        id="heart" 
                        onClick={() => {
                            handleFillHeart()
                            saveLikedBook(bookInfo.volumeInfo?.title, bookInfo.volumeInfo?.imageLinks?.thumbnail, bookInfo.id)
                        }} 
                        xmlns="http://www.w3.org/2000/svg"  
                        width="48"  
                        height="48"  
                        viewBox="0 0 24 24"  
                        fill="none"  
                        stroke="currentColor"  
                        strokeWidth="2"  
                        strokeLinecap="round"  
                        strokeLinejoin="round"
                        whileTap={{ scale: 1.3 }}
                        animate={{ 
                            scale: [1, 1.3, 1],
                            transition: { duration: 0.5 }
                        }}
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </motion.svg>
                </div>
                <div className="individualBook-image-btns">
                <h2 className="mobile-title">{bookInfo.volumeInfo?.title || "Título no disponible"}</h2>
                <div className="book-image">
                    <img 
                        src={bookInfo.volumeInfo?.imageLinks?.large || bookInfo.volumeInfo?.imageLinks?.thumbnail || "Imagen no disponible"} 
                        alt={bookInfo.volumeInfo?.title || "No disponible"}
                    />
                                        <motion.svg 
                        className="heart-mobile" 
                        id="heart-mobile" 
                        onClick={() => {
                            handleFillHeart()
                            saveLikedBook(bookInfo.volumeInfo?.title, bookInfo.volumeInfo?.imageLinks?.thumbnail, bookInfo.id)
                        }} 
                        xmlns="http://www.w3.org/2000/svg"  
                        width="48"  
                        height="48"  
                        viewBox="0 0 24 24"  
                        fill="none"  
                        stroke="#E3E63A"  
                        strokeWidth="2"  
                        strokeLinecap="round"  
                        strokeLinejoin="round"
                        whileTap={{ scale: 1.3 }}
                        animate={{ 
                            scale: [1, 1.3, 1],
                            transition: { duration: 0.5 }
                        }}
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </motion.svg>
                </div>
                </div>
                <div className="individualBook-text">
                    <h2 className="pc-title">{bookInfo.volumeInfo?.title || "Título no disponible"}</h2>
                    <h3>{bookInfo.volumeInfo?.authors && bookInfo.volumeInfo?.authors.join(', ') || "Autores: No encontrados"}</h3>
                    <h4>Rating: {bookInfo.volumeInfo?.averageRating || "?"}/5</h4>
                    <p>{bookInfo.volumeInfo?.description && bookInfo.volumeInfo?.description.substring(0, 820) + "..." || "Descripción no disponible"}</p>
                    <div className="book-buttons">
                        <button onClick={() => {
                            window.open(bookInfo.volumeInfo?.previewLink, "_blank")
                        }}>Preview</button>
                        <button onClick={() => saveBook(bookInfo.volumeInfo?.title, bookInfo.volumeInfo?.imageLinks?.thumbnail, bookInfo.id)}>Comprar</button>
                    </div>
                </div>
            </div>
            </div>
        </motion.div>
        </AnimatePresence>
        </>
    )
}

export default IndividualBook