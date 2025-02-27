import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '@styles/App.css'

function CardCart({ thumbnail, title, deleteCard, id}) {
    const [counter, setCounter] = useState(1);
    const navigate = useNavigate()

    const addCounter = () => {
        setCounter(prev => prev + 1)
    }

    const minusCounter = () => {
        if (counter > 1) {
            setCounter(prev => prev - 1)
        } else {
            return
        }
    }

    const handleClick = () => {
        localStorage.setItem('bookId', id)
        navigate(`/book/${id}`)
        window.location.reload()
    }

    return(
        <>
            <div className="card-cart-container">
                <div className="card-cart-left">
                    <img src={thumbnail && thumbnail} alt={title && title}/>
                </div>
                <div className="card-cart-right">
                    <h2 onClick={() => handleClick()}>{title && title.substring(0, 35) + "..." || "No encontrado"}</h2>
                    <div className="card-cart-increase-decrease">
                        <button className="card-cart-increase" onClick={addCounter}>+</button>
                        <span>{counter}</span>
                        <button className="card-cart-decrease" onClick={minusCounter}>-</button>
                    </div>
                </div>
                <span className="delete-card" onClick={deleteCard}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#E3E63A" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                </span>
            </div>
        </>
    )
}

export default CardCart