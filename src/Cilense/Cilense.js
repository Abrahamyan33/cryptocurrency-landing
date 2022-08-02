import { useState } from 'react'
import './Cilense.css'

export default function Cilense() {

    const [block, setBlock] = useState(true);

    const ChangeBlock = () => {
        if (window.scrollY >= 9500) {
            setBlock(false)
        }
    }
    window.addEventListener('scroll', ChangeBlock)
    return (
        <div className='Cilense'>
            <h2>What Our Clients are Saying</h2>
            <div className='Cilense__line'></div>
            <div className='Cilense__div'>
                <div className='Cilense__first' >
                    <div className={block ? 'Cilense__block-activ' : 'Cilense__block'}>
                        <div className='Cilense__img'></div>
                        <div className='Cilense__txt'>
                            <span>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> <div> Pellentesque laoreet, diam ac accumsan imperdiet, odio lacus </div> <div> tempus sapien, vel varius ligula turpis a ipsum. </div>
                            <h4>Gina Hopkins</h4>
                            <p>CEO of Extra Space</p>
                        </div>
                    </div>
                </div>
                <div className='Cilense__second'>
                    <div className={block ? 'Cilense__block1-activ' : 'Cilense__block1'}>
                        <div className='Cilense__img1'></div>
                        <div className='Cilense__txt'>
                            <span>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span> <div> Pellentesque laoreet, diam ac accumsan imperdiet, odio lacus </div> <div> tempus sapien, vel varius ligula turpis a ipsum. </div>
                            <h4>Christopher Hopkins</h4>
                            <p>CEO of Monarch Inc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}