import { Link } from 'react-router-dom'
import '@styles/App.css'

function Footer() {

    const onEnter = e => {
        if (e.key === 'Enter') {
            checkEmail()
        }
    }

    const checkEmail = () => {
        const emailInput = document.getElementById('email-input')
        const success = document.getElementById('success')
        const error = document.getElementById('error')
        if (emailInput.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            success.style.display = 'block'
        } else {
            error.style.display = 'block'
        }
        if (success.style.display === 'block') {
            error.style.display = 'none'
        } else {
            success.style.display = 'none'
        }
    }

    return (
        <>Lucas
        <div className="footer-container">
            <footer className="footer">
                <div className="footer-section">
                    <h3>Información</h3>
                    <ul>
                        <li><a href="https://developers.google.com/books/docs/overview" target="_blank">API</a></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><a href="/contributors">Contribuidores</a></li>
                        <li><a href="/thanks">Agradecimientos</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <ul>
                        <li><a href="mailto:mathiassaid7@gmail.com">Email</a></li>
                        <li><a href="https://github.com/JunLovin" target="_blank">GitHub</a></li>
                        <li><a href="https://said-beta.vercel.app/" target="_blank">JunLovin</a></li>
                        <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="footer-section footer-newsletter">
                    <h3>Newsletter</h3>
                    <p>¡Suscríbete a nuestra newsletter para que estés al tanto de todas nuestras ofertas exlusivas!</p>
                    <div className="footer-newsletter-inputs">
                        <span className="checkSpans error" id="error">Error, por favor ingresa un correo electrónico verdadero.</span>
                        <span className="checkSpans success" id="success">¡Suscrito!</span>
                        <input type="text" placeholder="Introduce tu correo" id="email-input" onKeyDown={onEnter} />
                        <button type="submit" onClick={checkEmail}>Suscribirse</button>
                    </div>
                </div>
            </footer>
            <p className="copy">&copy; BookHive 2025. Todos los derechos reservados.</p>
        </div>
        </>
    )
}

export default Footer