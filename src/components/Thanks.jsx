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
                    <p>Quiero agradecer a todas las personas que le dieron feedback al proyecto, gracias a todos ustedes logré mejorarlo y optimizarlo. Si tienes algún comentario o feedback que quisieras darle al proyecto con gusto te responderé y lo tomaré en cuenta.</p>
                    <div className="thanks-button">
                        <button onClick={() => {
                            window.open('mailto:mathiassaid7@gmail.com', '_self');
                        }}>Feedback</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Thanks