import { useState } from "react";
import './Crypto.css';

export default function Crypto() {
    const [opacity, setOpacity] = useState(true);
    const [display, setDisplay] = useState(true)
    const [angel, setAngel] = useState(true)
    const [png , setPng] = useState(true);
    setTimeout(() => {
        setOpacity(false)
    }, 100);
    const ChangePng = () => {
        if (window.scrollY >= 10) {
            setPng(false)
        }else{
            setPng(true)
        }
    }
    window.addEventListener('scroll', ChangePng)
    return (
        <div className="Crypto">
            <div className={png ? "Crypto__img" : 'Crypto__img-active'} ></div>
            <div className={opacity ? "Crypto__consul-activ" : "Crypto__consul"}>
                <div className="Crypto__txt">
                    <div className="Crypto__title">
                        <h1>Cryptocurrency</h1><h1>Consulting</h1>
                    </div>
                    <br /><br />
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur, elit vitae </h3>
                    <h3>facilisis eleifend, ipsum elit lobortis eros, elementum porta mi felis ut massa. Suspendisse</h3>
                    <h3>eleifend pharetra tortor rhoncus condimentum. Aliquam ac est vel purus.</h3>
                    <div className="Crypto__buttons">
                        <button className={display ? "Crypto__btn1" : "Crypto__btn3"} onMouseOut={() => {
                            setDisplay(true)
                        }} onMouseOver={() => {
                            if (display === true) {
                                setDisplay(false)
                            }
                        }}><h4>CRYPTO CONSULATION <i class="fa-solid fa-angle-right" ></i></h4></button>
                        <button className={angel ? "Crypto__btn2" : "Crypto__btn4"} onMouseOut={() => {
                            setAngel(true)
                        }} onMouseOver={() => {
                            if (angel === true) {
                                setAngel(false)
                            }
                        }}><h4>EXCHANGE SERVICES <i class="fa-solid fa-angle-right"></i></h4></button>
                    </div>
                </div>
            </div>
        </div>
    )
}