import { useParams } from 'react-router-dom'
import { useApi } from '@hooks/ApiProvider'
import { motion, AnimatePresence } from 'framer-motion'
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
            <div className="searched-container" id="searched-container">
            <div className="bubble-background second-bubble"></div>
            <h2>Resultados para <span className="searched-book-name">{book}</span></h2> 
            <div className="searched-books-container">
                {data.map((element, index) => {
                    return <BookCard title={element.volumeInfo.title} key={index} thumbnail={element.volumeInfo.imageLinks?.thumbnail} description={element.volumeInfo.description} id={element.id}/>
                })}
            </div>
        </div>
            </motion.div>
        </AnimatePresence>
        </>
    )
}

export default Searching