import { useState } from 'react'
import '@styles/App.css'

function Body() {
    const [bookInput, setBookInput] = useState('')

    const handleBookInput = e => {
        setBookInput(e.target.value)
        const deleteTextIcon = document.getElementById('deleteTextIcon')
        if (e.target.value.length > 0) {
            deleteTextIcon.style.display = 'block';
        } else {
            deleteTextIcon.style.display = 'none';
        }
    }

    const handleEnter = e => {
        if (e.key === 'Enter') {
            console.log(bookInput)
            window.open(`/${bookInput}`, '_self')
            setBookInput('')
        }
    }

    const handleDeleteText = () => {
        setBookInput('')
        const deleteTextIcon = document.getElementById('deleteTextIcon')
        deleteTextIcon.style.display = 'none'
    }

    return (
        <>
        <div className="bubble-background"></div>
        <div className="container">
            <div className="hero">
                <div className="hero-top">
                    <h2>La mejor biblioteca virtual de toda <span className="latam">Latinoamérica</span></h2>
                    <b className="quote"><i>&quot;Un libro es un tesoro que puedes llevar contigo a todas partes.&quot;</i></b>
                </div>
                <div className="hero-bottom search-bar">
                    <svg className="search-icon" xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                    <svg onClick={handleDeleteText} id="deleteTextIcon" className="deleteContent-icon" xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 10l4 4m0 -4l-4 4" /></svg>
                    <input type="text" placeholder='Buscar "Harry Potter"' value={bookInput} onChange={handleBookInput} onKeyDown={handleEnter}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Body;