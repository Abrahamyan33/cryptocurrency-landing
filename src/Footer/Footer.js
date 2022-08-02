import './Footer.css'

function Footer(){

    return(
        <footer className="main-footer">
        <div className="footer-bottom">
            <div className="footer-container">
                <ul className="footer-social-icons">
                    <li className="social-icon">
                        <a href="#" className="icon">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="social-icon">
                        <a href="#" className="icon">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </li>
                    <li className="social-icon">
                        <a href="#" className="icon">
                            <i className="fa-solid fa-wifi"></i>
                        </a>
                    </li>
                </ul>
                <p className="footer-info">
                    Designed by 
                    <a href="https://www.elegantthemes.com"> Elegant Themes </a>
                    | Powered by
                    <a href="https://www.wordpress.org"> WordPress</a>
                </p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;