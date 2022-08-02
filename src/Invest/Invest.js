import './Invest.css'
import { useState } from 'react'
export default function Invest() {
    const [btn, setBtn] = useState(true)
    const [global, setGlobal] = useState(true)
    const [verisible, setVerisible] = useState(true)
    const [secure, setSecure] = useState(true)
    const [round, setRound] = useState(true)
    const [crypto , setCrypto] = useState(true)
    const [png , setPng] = useState(true)
    const ChangeGlob = () => {
        if (window.scrollY >= 2900) {
            setGlobal(false)
        }
        if (window.scrollY >= 3100) {
            setVerisible(false)
            setTimeout(() => {
                setSecure(false)
                setTimeout(() => {
                    setRound(false)
                }, 200);
            }, 200);
        }
        if (window.scrollY >= 3500) {
            setCrypto(false)
            setPng(false)
        }
    }
    window.addEventListener('scroll', ChangeGlob)
    return (
        <div className='Invest'>
            <div className='Invest__div'>
                <div className='Invest__first'>
                    <div className='Invest__txt'>
                        <h3>Why Invest in Crypto?</h3>
                        <div className='Invest__line'></div>
                        <br /><br />
                        <div className='txt__Invest'> 
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur, elit vitae facilisis eleifend, ipsum elit lobortis eros, elementum porta mi felis ut massa. Suspendisse eleifend pharetra tortor rhoncus condimentum. Aliquam ac est vel purus posuere lacinia.</span>
                        </div>
                        <button className={btn ? 'Invest__btn' : 'Invest__btn-activ'} onMouseOut={() => {
                            setBtn(true)
                        }} onMouseOver={() => {
                            setBtn(false)
                        }}><h4>SET UP A CONSULATION <i class="fa-solid fa-angle-right"></i></h4></button>
                    </div>
                    <div className={global ? 'Invest__global-activ' : 'Invest__global'} >
                        <i class="fa-solid fa-globe"></i>
                        <div className='global__txt'>
                            <h3>FAST AND GLOBAL</h3>
                            <br />
                            <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</span>
                        </div>
                    </div>
                </div>
                <div className='Invest__second'>
                    <div className={verisible ? 'Invest__block-activ' : 'Invest__block'}>
                        <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
                        <div className='block__txt1'>
                            <h3>IRREVERSIBLE</h3>
                            <br />
                            <span>Rep quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora</span>
                        </div>
                    </div>
                    <div className={secure ? 'Invest__block-activ' : 'Invest__block'}>
                        <i class="fa-solid fa-shield"></i>
                        <div className='block__txt1'>
                            <h3>SECURED</h3>
                            <br />
                            <span>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.</span>
                        </div>
                    </div>
                    <div className={round ? 'Invest__block-activ' : 'Invest__block'}>
                        <i class="fa-solid fa-record-vinyl"></i>
                        <div className='block__txt1'>
                            <h3>GUARANTEED SECURITY</h3>
                            <br />
                            <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non providen</span>
                        </div>
                    </div>
                </div>
                <div className='Invest__third'>
                    <div className={crypto ? 'Invest__crypto-activ' : 'Invest__crypto' }>
                        <i class="fa-solid fa-credit-card"></i>
                        <div className='Invest__txt1'>
                            <h3>CRYPTO WALLET</h3>
                            <br />
                            <span>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio am libero tempore, cum soluta nobis est eligendi optio cumque nihil</span>
                        </div>
                    </div>
                    <div className='Invest__img'>
                        <img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/Crypto_Illustration_03.png' className={png ? 'Invest__png' : 'Invest__png-activ'}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}