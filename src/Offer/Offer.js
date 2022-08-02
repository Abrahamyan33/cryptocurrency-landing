import { useState } from 'react'
import './Offer.css'
export default function Offer() {
    const [block, setBlock] = useState(true)
    const [mining, setMining] = useState(true)
    const [crypto, setCrypto] = useState(true)
    const [icon , setIcon] = useState(true)
    const ChangeRotate = () => {
        if (window.scrollY >= 750) {
            setBlock(false)
            setTimeout(() => {
                setMining(false)
                setTimeout(() => {
                    setCrypto(false)
                }, 600);
            }, 600);
        }
    }

    window.addEventListener('scroll', ChangeRotate)
    return (
        <div className='Offer'>
            <div className='Offer__div'>
                <div className='Offer__block'>
                    <div className={block ? 'Offer__blockchain' : 'Offer__blockchain-activ'}>
                        <img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/Crypto_Icon_13.png' />
                        <h3>BLOCKCHAIN EDUCATION</h3>
                        <div>
                            <span>Rep quia consequuntur magni dolores eos </span><span>qui ratione voluptatem sequi nesciunt.</span><span> Neque porro quisquam est, qui dolorem </span><span>ipsum quia dolor sit amet, consectetur,</span><span> adipisci velit, sed quia non numquam eius</span><span> modi tempora </span>
                        </div>
                    </div>
                    <div className={mining ?'Offer__blockchain' : 'Offer__blockchain-activ'}>
                        <img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/Crypto_Icon_15.png' />
                        <h3>MINING SOLUTIONS</h3>
                        <div>
                            <span>Rep quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora</span>
                        </div>
                    </div>
                    <div className={crypto  ?'Offer__blockchain' : 'Offer__blockchain-activ'}>
                        <img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/Crypto_Icon_14.png' />
                        <h3>CRYPTO INVESTING</h3>
                        <div>
                            <span>Rep quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora</span>
                        </div>
                    </div>
                </div>
                <button  className={icon ? 'Offer__btn' : 'Offer__btn-activ'} onMouseOut={() => {
                    setIcon(true)
                }} onMouseOver={() => {
                    setIcon(false)
                }}
                ><h4>LEARN MORE ABOUT WE HAVE TO OFFER <i class="fa-solid fa-angle-right"></i> </h4></button>
            </div>
        </div>
    )
}