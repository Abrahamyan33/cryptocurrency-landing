import { useState } from 'react'
import './Experts.css'


export default function Experts() {
    const [rotate, setRotate] = useState(true);
    const [opacity, setOpacity] = useState(true);
    const [img, setImg] = useState(true);
    const [png, setPng] = useState(true);
    const ChangeRotate = () => {
        if (window.scrollY >= 6900) {
            setRotate(false);
            setTimeout(() => {
                setOpacity(false)
            }, 200);
        }
        if (window.scrollY >= 7300) {
            setImg(false);
            setTimeout(() => {
                setPng(false);
            }, 200);
        }
    }

    window.addEventListener('scroll', ChangeRotate)
    return (
        <div className='Experts'>
            <div className='Experts__div'>
                <div className='Experts__txt'>
                    <h2>Our Experts</h2>
                    <div className='Experts__line'></div>
                    <div className='Experts__span'>
                        <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</span>
                    </div>
                </div>
                <div className='Experts__profile1'>
                    <div className={rotate ? 'Experts__img1-activ' : 'Experts__img1'}>
                        <div className='profile__txt'>
                            <h3>Helena Briggs</h3>
                            <div className='profile__span'>
                                <p>Founder and CEO</p>
                            </div>
                            <div className='profile__icon'>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-google-plus-g"></i>
                            </div>
                        </div>
                    </div>
                    <div className={opacity ? 'Experts__img2-activ' : 'Experts__img2'}>
                        <h3>Thomas Adams</h3>
                        <div className='profile__span'>
                            <p>Mining Expert</p>
                        </div>
                        <div className='profile__icon'>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-google-plus-g"></i>
                        </div>
                    </div>
                </div>
                <div className='Experts__profile1'>
                    <div className={img ? 'Experts__img3-activ' : 'Experts__img3'}>
                        <h3>Juanito Sanchez</h3>
                        <div className='profile__span'>
                            <p>Backend Developer</p>
                        </div>
                        <div className='profile__icon'>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-google-plus-g"></i>
                        </div>
                    </div>
                    <div className={png ? 'Experts__img4-activ' : 'Experts__img4'}>
                        <h3>Brad Jarret</h3>
                        <div className='profile__span'>
                            <p>Accountant</p>
                        </div>
                        <div className='profile__icon'>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-google-plus-g"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}