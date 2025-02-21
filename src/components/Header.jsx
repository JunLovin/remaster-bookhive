import { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import '@styles/App.css'

Modal.setAppElement('#root')

function Header() {
    const [isOpenCart, setIsOpenCart] = useState(false)
    const [isOpenLiked, setIsOpenLiked] = useState(false)
    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }

    const handleOpenCart = () => {
        setIsOpenCart(true)
    }

    const handleCloseCart = () => {
        setIsOpenCart(false)
    }

    const handleOpenLiked = () => {
        setIsOpenLiked(true)
    }

    const handleCloseLiked = () => {
        setIsOpenLiked(false)
    }

    return (
        <>
        <header>
            <div className="header-left">
                <h1 onClick={handleHome}>BookHive</h1>
            </div>
            <div className="header-right">
            <svg className="header-heart" onClick={handleOpenLiked} xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
            <svg className="header-cart" onClick={handleOpenCart} xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
            </div>
        </header>
        <header className="mobile-header mobile">
            <div className="mobile-header-icons">
            <svg className="header-home" onClick={handleHome} xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
            <svg className="header-heart" onClick={handleOpenLiked} xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
            <svg className="header-cart" onClick={handleOpenCart} xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
            </div>
        </header>
        {/* INFO: Liked Books */}
        <Modal 
                isOpen={isOpenLiked} 
                onRequestClose={handleCloseLiked}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(4px)'
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
                        width: '400px',
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
                <div className="liked-top">
                    <h2 className="liked-books">Libros que te gustaron</h2>
                    <svg className="modal-exit liked-exit" onClick={handleCloseLiked} xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                </div>
                <div className="books-liked-container"></div>
            </Modal>
        
        {/* INFO: Cart */}
        <Modal 
                isOpen={isOpenCart} 
                onRequestClose={handleCloseCart}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(4px)'
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
                        width: '400px',
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
                <div className="buy-top">
                    <h2 className="tobuy-books">Carrito</h2>
                    <svg className="modal-exit" onClick={handleCloseCart} xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                </div>
                <div className="books-tobuy-container">

                </div>
                <div className="buy-modal-btn">
                    <button onClick={() => {
                    alert(`¡Felicidades, has comprado libro(s)!`)
                }}>Comprar</button>
                </div>
            </Modal>
        </>
    )
}

export default Header