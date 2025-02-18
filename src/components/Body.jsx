import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useApi } from '@context/ApiProvider'
import handleApi from '@api/apiglobal'
import '@styles/App.css'

function Body() {
    const [bookInput, setBookInput] = useState('')
    const { setData } = useApi()
    const navigate = useNavigate()

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
        const deleteTextIcon = document.getElementById('deleteTextIcon')
        const searchedContainer = document.getElementById('searched-container')
        const bottomArrow = document.querySelector('.arrow-container')
        console.log(bottomArrow)
        if (e.key === 'Enter') {
            navigate(`/${bookInput}`)
            handleApi({ search: bookInput, setData })
            deleteTextIcon.style.display = 'none'
            bottomArrow.style.display = 'block'
            searchedContainer.scrollIntoView({ behavior:'smooth' })
        }
        if (e.key === 'Enter' && bookInput.length === 0) {
            bottomArrow.style.display = 'none'
        }
    }

    const buttonScroll = () => {
        const searchedContainer = document.querySelector('.searched-container')
        searchedContainer.scrollIntoView({ behavior: 'smooth' })
    }

    const handleDeleteText = () => {
        const deleteTextIcon = document.getElementById('deleteTextIcon')
        setBookInput('')
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
                    <svg className="search-icon" xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                    <svg onClick={handleDeleteText} id="deleteTextIcon" className="deleteContent-icon" xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 10l4 4m0 -4l-4 4" /></svg>
                    <input type="text" placeholder='Buscar "Harry Potter"' value={bookInput} onChange={handleBookInput} onKeyDown={handleEnter}/>
                </div>
            </div>
            <div className="arrow-container">
                <div className="arrow">
                    <svg onClick={buttonScroll} className="bottom-arrow" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="none" stroke="#E3E63A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 13l6 6l6-6M6 5l6 6l6-6"/></svg>
                </div>
            </div>
        </div>
        <Outlet/>
        </>
    )
}

export default Body;