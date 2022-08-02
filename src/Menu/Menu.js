import { useState } from 'react';
import './Menu.css'

function Menu() {
    const [top, setTop] = useState(true);   
    const [navbar , Setnavbar] = useState(true);
    const Changenavbar = () => {
        if (window.scrollY >= 80) {
            Setnavbar(false)
            console.log(window.scrollY);
        }else{
            Setnavbar(true)
        }
    }
    window.addEventListener('scroll' , Changenavbar)
    return (
        <div className={navbar ? 'main-header': 'main-header-active '}>
            <div className="container">
                <a href="" title="Divi Builder Layout Pack"> Cryptocurrency Landing</a>
                <div className="top-navigation">
                    <nav className="top-menu-nav">
                        <ul className="top-menu">
                            <li className="li1"><a href="">Services</a></li>
                            <li className="li2"><a href="">About</a></li>
                            <li className="li3"><a href="">Blog</a></li>
                            <li className="li4"><a href="">Contact</a></li>
                            <li className="li5"><a href="">FAQ</a></li>
                            <li className="li6"><a href="">Home</a></li>
                            <li className="li7"><a href="">Landing</a></li>
                        </ul>
                    </nav>
                    <div class="et-cart-info">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className="mobile-nav">
                        <button className="mobile-btn">
                            <span className="mobile-nav-icon">
                                <i class="fa-solid fa-bars" onClick={() => {
                                    if (top === true) {
                                        setTop(false);
                                    } else {
                                        setTop(true);
                                    }
                                }}></i>
                            </span>
                        </button>
                        <ul className={top ? 'mobile-menu' : 'mobile-menu-active'}  >
                            <li><a href="">Services</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Landing</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu;