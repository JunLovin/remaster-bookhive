import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LikeCard from '@components/LikeCard'
import Modal from 'react-modal';
import '@styles/App.css'

function Liked({ isOpenLiked = false, handleCloseLiked, animationProps }) {
    const [, forceUpdate] = useState({})
    const likedBooks = localStorage.getItem('likedBooks')
    const likedBooksObject = JSON.parse(likedBooks)

    const deleteCard = (title) => {
        const updatedBooks = likedBooksObject.filter(book => book.title !== title)
        localStorage.setItem('likedBooks', JSON.stringify(updatedBooks))
        forceUpdate({})
    }

    return (
        <AnimatePresence>
            {isOpenLiked && (
                <Modal 
                    className="liked-modal"
                    isOpen={true} 
                    onRequestClose={handleCloseLiked}
                    closeTimeoutMS={300}
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            backdropFilter: 'blur(4px)'
                        },
                        content: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '3rem',
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
                            overflowX: 'scroll',
                            transform: 'translateX(0%)', // Importante para la animación
                        }
                    }}
                    contentElement={(props, children) => (
                        <motion.div {...props} {...animationProps}>
                            {children}
                        </motion.div>
                    )}
                >
                    <div className="liked-top">
                        <h2 className="liked-books">Libros que te gustaron</h2>
                        <span className="delete-all-liked" onClick={() => {
                                localStorage.removeItem('likedBooks')
                                alert("Se han eliminado todos los libros, para ver los cambios sal de 'favoritos' y vuelve a entrar.")
                            }}>Eliminar todos</span>
                        <svg className="modal-exit liked-exit" onClick={handleCloseLiked} xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </div>
                    <div className="books-liked-container">
                        <AnimatePresence>
                                {likedBooksObject?.map((book, id) => {
                                    return (
                                        <motion.div
                                            key={book.id || id}
                                            initial={{ opacity: 1, x: 0 }}
                                            exit={{ 
                                                opacity: 0, 
                                                x: 100,
                                                transition: { duration: 0.3, ease: "easeInOut" }
                                            }}
                                        >
                                            <LikeCard
                                                key={id}
                                                title={book.title}
                                                thumbnail={book.thumbnail}
                                                deleteCard={() => deleteCard(book.title)}
                                                id={book.id}
                                            />
                                        </motion.div>
                                    )
                                })}
                            </AnimatePresence>
                    </div>
                </Modal>
            )}
        </AnimatePresence>
    )
}

export default Liked