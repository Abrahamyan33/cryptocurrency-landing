import { useState } from 'react'
import './Mining.css'
export default function  Mining() {
    const[btn , Setbtn] = useState(true)
    const[png , setPng] = useState(true)
    const Changepng = () =>{
        if (window.scrollY >= 1200) {
            setPng(false)
        }
    }
    window.addEventListener('scroll' , Changepng)
    return(
        <div className="Mining">
            <div className='Mining__div'>
                <div className='Mining__txt'>
                    <h2>Mining solutions</h2>
                    <div className='Mining__line'></div>
                    <div className='txt__Mining'>
                        <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non  provident, similique sunt in culpa qui officia deserunt mollitia animi,  id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</span>
                    </div>
                    <button className={btn ? "Mining__btn" : 'Mining__btn-activ'} onMouseOut={() => {
                        Setbtn(true)
                    }}onMouseOver={() => {
                        Setbtn(false)
                    }}
                    ><h4>LEARN MORE <i class="fa-solid fa-angle-right"></i> </h4> </button>
                </div>
                <div className='Mining__png'>
                    <img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/crypto_illustration_19.png' className={png ? 'Mining__img' : 'Mining__img-activ'}></img>
                </div>
            </div>
        </div>
    )
}