import { useState } from 'react'
import './Digital.css'

export default function Digital() {

    const[digital, setDigital]= useState(true)

    const ChangeDigital = () => {
        if (window.scrollY >= 4800) {
            setDigital(false)
        }
    }
    window.addEventListener('scroll', ChangeDigital)
    return (
        <div className='Digital'>
            <div className='Digital__div'>
                <div className='Digital__txt'>
                    <h2>Digital Currency Market </h2>
                    <h2>Analysis</h2>
                    <div className='Digital__line'></div>
                    <div className='Digital__span'>
                        <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</span>
                    </div>
                </div>
                <div className='Digital__img'>
                    <img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/06/crypto_illustration_04.png' className={digital ?'Digital__png' : 'Digital__png-activ'} />
                </div>
            </div>
        </div>
    )
}