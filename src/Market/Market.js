import { useState } from 'react'
import './Market.css'

export default function Market() {
    const [btn, setBtn] = useState(true)
    return (
        <div className='Market'>
            <div className='Market__div'>
                <h2>Digital Currency Market Values</h2>
                <div className='Market__line'></div>
                <div className='Market__txt'>
                    <span>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores,Et harum quidem rerum.</span>
                </div>
                <div className={btn ? 'Market__btn' : 'Market__btn-activ'} onMouseOut={() => {
                    setBtn(true)
                }} onMouseOver={() => {
                    setBtn(false)
                }}><h4>START INVEST TODAY <i class="fa-solid fa-angle-right"></i></h4></div>
                <div className='Market__img'>
                    <img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/Crypto_Illustration_05.png' />
                </div>
            </div>
        </div>
    )
}