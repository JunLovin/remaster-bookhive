import "@styles/App.css"
import Header from '@components/Header'

function Thanks() {
    return (
        <>
        <Header/>
        <div className="thanks">
            <div className="bubble-background third-bubble"></div>
            <div className="thanks-container">
                <div className="thanks-top">
                    <h2>Agradecimientos</h2>
                </div>
                <div className="thanks-bottom">
                    <p>Quiero agradecer a todas las personas que le dieron feedback al proyecto, gracias a todos ustedes logré mejorarlo y optimizarlo. Si tú tienes algún comentario o feedback que quisieras hacerle a la página con gusto te responderé y lo tomaré en cuenta.</p>
                    <div className="thanks-button">
                        <button>Feedback</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Thanks