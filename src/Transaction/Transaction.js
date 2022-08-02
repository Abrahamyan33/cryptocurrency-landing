import  { useState } from 'react'
import './Transaction.css'
import CountUp, { start } from 'countup'
import React from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';


export default function Transaction() {
    
    const [count, setCount] = useState(true);

    const ChangeCount = () => {
        if (window.scrollY >= 100) {
            setCount(false)
        }
    }
    window.addEventListener('scroll', ChangeCount)

    return (
        <div className='Transaction'>
            <img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/crypto-bg-04.png' />
            <div className='Transaction__div'>
                <div className='Transaction__sub'>
                    <h3>SUBSCRIBE FOR UPDATES</h3>
                    <div className='Transaction__line'></div>
                </div>
                <div className='Transaction__reg'>
                    <div className='Transaction__txt'>
                        <h2>Stay Up to Date with the </h2>
                        <h2>Latest</h2>
                        <div className='Transaction__span'>
                            <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</span>
                        </div>
                    </div>
                    <div className='Transaction__inps' >
                        <input placeholder='Name' className='Transaction__inp1'></input>
                        <input placeholder='Email' className='Transaction__inp2'></input>
                        <button className='Transaction__btn'><h4> SUBSCRIBE <i class="fa-solid fa-angle-right"></i></h4></button>
                    </div>
                </div>
                <div className='Transaction__num'>
                    <div className='Transaction__num1'>
                        <CountUp delay={2} end={100} />
                        {/* <span className='num__span'>24HR TRANSACTIONS</span> */}
                    </div>
                    <div className='Transastion__num1'>

                    </div>
                    <div className='Transaction__num1'></div>
                    <div className='Transaction__num1'></div>
                </div>
            </div>
        </div>
    )
}