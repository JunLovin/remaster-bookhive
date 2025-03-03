import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from 'react-modal';
import CardCart from '@components/CardCart'
import '@styles/App.css'

Modal.setAppElement('#root')

function Cart({ isOpenCart = false, handleCloseCart }) {
    const [counter, setCounter] = useState({})
    const cartBooks = localStorage.getItem('savedBooksInfo')
    const booksInObject = JSON.parse(cartBooks) 

    console.log(booksInObject)

    const deleteCard = (title) => {
        const updatedBooks = booksInObject.filter(book => book.title !== title)
        localStorage.setItem('savedBooksInfo', JSON.stringify(updatedBooks))

        setCounter(prev => ({...prev}))
    }

    const addCounter = (id) => {
        setCounter(prev =>  ({
            ...prev,
            [id]: (prev[id] || 1) + 1
        }))
    }
    const minusCounter = (id) => {
        setCounter(prev => ({
            ...prev,
            [id]: Math.max((prev[id] || 1) - 1, 1)
        }))
    }

    const getTotalBooks = () => {
        return booksInObject?.reduce((total, book) => {
            return total + (counter[book.id] || 1)
        }, 0)
    }


    return (
        <>
        <Modal 
                className="cart-modal"
                isOpen={isOpenCart} 
                onRequestClose={handleCloseCart}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(4px)',
                    },
                    content: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundColor: '#06021A',
                        color: '#F3F1FF',
                        position: 'fixed',
                        left: 'auto',
                        right: '0',
                        top: '0',
                        bottom: '0',
                        width: '90%',
                        maxWidth: '400px',
                        height: '100%',
                        padding: '20px',
                        borderRadius: '0',
                        transform: 'none',
                        margin: '0',
                        border: 'none',
                        overflowX: 'scroll'
                    }
                }}
            >
                    <svg className="modal-exit" onClick={handleCloseCart} xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    <div className="buy-top">
                        <h2 className="tobuy-books">Carrito</h2>
                        <span className="delete-all" onClick={() => {
                            localStorage.removeItem('savedBooksInfo')
                            alert("Se han eliminado todos los libros, para ver los cambios sal del carrito y vuelve a entrar.")
                        }}>Eliminar todos</span>
                    </div>
                    <div className="books-tobuy-container">
<AnimatePresence>
        {booksInObject?.map((book, i) => {
            return (
                <motion.div
                    key={book.id || i}
                    initial={{ opacity: 1, x: 0 }}
                    exit={{ 
                        opacity: 0, 
                        x: 100,
                        transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                >
                    <CardCart
                        title={book.title}
                        thumbnail={book.thumbnail}
                        deleteCard={() => deleteCard(book.title)}
                        id={book.id}
                        addCounter={() => addCounter(book.id)}
                        minusCounter={() => minusCounter(book.id)}
                        counter={counter[book.id] || 1}
                    />
                </motion.div>
            )
        })}
    </AnimatePresence>
                    </div>
                    <div className="buy-modal-btn">
                        <button onClick={() => {
                        const totalBooks = getTotalBooks()
                        alert(`¡Felicidades, has comprado ${totalBooks} libro(s)!`)
                    }}>Comprar</button>
                    </div>
            </Modal>
        </>
    )
}

export default Cart