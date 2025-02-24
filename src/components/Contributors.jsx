import '@styles/App.css'
import Header from '@components/Header'
import firstPfp from '@public/firstpfp.png'
import secondPfp from '@public/secondpfp.png'
import thirdPfp from '@public/thirdpfp.png'

function Contributors() {
    return (
        <>
        <Header/>
        <div className="contributors">
            <div className="bubble-background"></div>
            <div className="contributors-container">
                <div className="contributors-title">
                    <h2>Contribuidores</h2>
                </div>
                <div className="contributors-description">
                    <p>Gracias a todas las personas que pusieron todo su esfuerzo en el proyecto, con su ayuda se logró optimizarlo y mejorarlo. <br></br>Gracias especiales a:</p>
                </div>
                <div className="contributors-list">
                    <ul>
                        <li>
                            <img src={firstPfp} alt="Fake pfp" />
                            <span>César</span>
                        </li>
                        <li>
                            <img src={secondPfp} alt="Fake pfp" />
                            <span>Diego</span>
                        </li>
                        <li>
                            <img src={thirdPfp} alt="Fake pfp" />
                            <span>Lucas</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contributors