import '@styles/App.css'

function Footer() {
    return (
        <>
        <div className="footer-container">
            <footer className="footer">
                <div className="footer-section">
                    <h3>Información</h3>
                    <ul>
                        <li><a href="https://developers.google.com/books/docs/overview" target="_blank">API</a></li>
                        <li><a href="https://github.com/JunLovin" target="_blank">Creador</a></li>
                        <li><a href="/">Contribuidores</a></li>
                        <li><a href="/">Agradecimientos</a></li>
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
                        <input type="text" placeholder="Introduce tu correo" />
                        <button type="submit">Suscribirse</button>
                    </div>
                </div>
            </footer>
            <p className="copy">&copy; BookHive 2025. Todos los derechos reservados.</p>
        </div>
        </>
    )
}

export default Footer