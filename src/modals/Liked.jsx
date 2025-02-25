import Modal from'react-modal';
import '@styles/App.css'

function Liked({ isOpenLiked = false, handleCloseLiked }) {
    return (
        <>
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
                        gap: '3rem',
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
                <div className="books-liked-container">
                    <h3>!Lista de libros que te gustaron muy pronto!</h3>
                </div>
            </Modal>
        </>
    )
}

export default Liked