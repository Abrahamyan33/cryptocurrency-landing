import { useState } from 'react'
import './Ipsum.css'

export default function Ipsum () {
    const [btn , setBtn] = useState(true)
    const [ipsum , setIpsum] = useState(true)
    const ChangeIpsum = () => {
        if (window.scrollY >= 4000) {
            setIpsum(false)
        }
    }
    window.addEventListener('scroll', ChangeIpsum)
    return (
        <div className='Ipsum'>
            <img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/crypto-bg-04.png'></img>
            <div className='Ipsum__div'>
                <div className={ipsum ?'Ipsum__lorem' : 'Ipsum__lorem-activ'}>
                    <h5>LOREM IPSUM DOLOR SIT AMET</h5>
                    <div className='Ipsum__line'></div>
                    <h2>Are You Looking Dive Into Crypto?</h2>
                    <button className={btn ? 'Ipsum__btn' : 'Ipsum__btn-activ'} onMouseOut={() => {
                        setBtn(true)
                    }} onMouseOver={() => {
                        setBtn(false)
                    }}><h4>SET UP A FREE 30 MINUTE CALL <i class="fa-solid fa-angle-right"></i></h4></button>
                </div>
            </div>
        </div>
    )
}