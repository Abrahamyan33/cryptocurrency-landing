import { useState } from 'react'
import './Blockchain.css'

export default function Blockchain () {
    const [btn , setBtn] = useState(true)
    const [png , setPng] = useState(true)
    const Changeimg = () =>{
        if (window.scrollY>=2400) {
            setPng(false)
        }
    }
    window.addEventListener('scroll' , Changeimg)
    return(
        <div className='Blockchain'>
            <div className='Blockchain__div'>
                <div className='Blockchain__txt'>
                    <h2>How Blockchain Works</h2>
                    <div className='Blockchain__line'></div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur, elit vitae facilisis eleifend, ipsum elit lobortis eros, elementum porta mi felis ut massa. Suspendisse eleifend pharetra tortor rhoncus condimentum. Aliquam ac est vel puru</span>
                    <button className={btn ?'Blockchain__btn' : 'Blockchain__btn-activ'} onMouseOut={() => {
                        setBtn(true)
                    }}onMouseOver={() => {
                        setBtn(false)
                    }}><h4>TAKE OUR ONLINE COURSES <i class="fa-solid fa-angle-right"></i></h4></button>
                </div>
                <div className='Blockchain__img'>
                    <img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/crypto_illustration_02.png' className={png ?'Blockchain__png' : 'Blockchain__png-activ'}></img>
                </div>
            </div>
        </div>
    )
}