import Modal from 'react-modal';
import '@styles/App.css'

Modal.setAppElement('#root')

function Cart({ isOpenCart = false, handleCloseCart }) {
    const cartBooks = localStorage.getItem('booksToBuy')
    const booksInObject = JSON.parse(cartBooks)

    console.log(booksInObject)

    return (
        <>
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
                    {booksInObject ? booksInObject.map((element, id) => {
                        return <h1 key={id}>Libro</h1>
                    }) : <h3>¡Aún no hay nada!</h3>}
                </div>
                <div className="buy-modal-btn">
                    <button onClick={() => {
                    alert(`¡Felicidades, has comprado ${booksInObject.length} libro(s)!`)
                }}>Comprar</button>
                </div>
            </Modal>
        </>
    )
}

export default Cart