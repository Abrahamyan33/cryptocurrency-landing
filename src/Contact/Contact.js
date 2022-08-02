import './Contact.css'
import { useState } from 'react';



export default function Contact() {
    const [contact, setContact] = useState(true);

    const ChangeContact = () => {
        if (window.scrollY >= 10800) {
            setContact(false)
        }
    }
    window.addEventListener('scroll', ChangeContact)
    return (
        <div className='Contact'>
            <div className='Contact__png'></div>
            <h2>Need Consulting? Contact Us Now!</h2>
            <div className='Contact__line'></div>
            <div className='Contact__span'>
                <span>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatu</span>
            </div>
            <div className={contact ? 'Contact__div-activ' : 'Contact__div'} >
                <div className='Contact__name'>
                    <input type='text' placeholder='NAME' />
                    <input type='text' placeholder='EMAIL ADDRESS' />
                </div>
                <div className='Contact__message'>
                    <textarea placeholder='MESSAGES'></textarea>
                </div>
                <div className='Contact__btn'>
                    <button><h4>SUBMIT <i class="fa-solid fa-angle-right"></i></h4></button>
                </div>
            </div>
        </div>
    )
}