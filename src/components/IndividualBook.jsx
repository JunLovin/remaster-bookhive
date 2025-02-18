import '@styles/App.css'

function IndividualBook() {

    const handleFillHeart = () => {
        const heart = document.getElementById('heart')
        heart.classList.toggle('fill')
    }

    return (
        <>
        <div className="individualBook-container">
            <div className="individualBook">
                <div className="heart-container">
                    <svg className="heart" id="heart" onClick={handleFillHeart} xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                </div>
                <div className="individualBook-image-btns">
                    <div className="book-image">
                        <img src="https://books.google.com.ec/books/content?id=sQYqRCIhFAMC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73UAwpVO4_35bNxX_IzmXJaZfCcEEMnwyGNc4XY67BRKfEOe9asXsg313T2c0uFdPAwhXX6bWBbmo1BAOjAzVNunq2c3d2KMkRKuogJCKyfR73iiv2-hNb-uSqojsz2DbW0rrMq" alt="Book"/>
                    </div>

                </div>
                <div className="individualBook-text">
                    <h2>El Poder del Ahora</h2>
                    <h3>Autor(es): Eckhart Tolle</h3>
                    <h4>Rating: 3/5</h4>
                    <p>El libro se basa en la superación personal del escritor (Eckhart Tolle), nos hace ver el mundo desde un punto de vista totalmente diferente el cual nos enseña que debido a la digitalización perdemos la noción del tiempo y cada vez nos hacemos más distraídos por lo cual no podemos agradecer por lo que ya tenemos y tuvimos, nos centramos tanto en nuestros pensamientos que ya ni siquiera sabemos quiénes somos.</p>
                    <div className="book-buttons">
                        <button>Preview</button>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default IndividualBook