import './Blog.css'

export default function Blog() {
    return (
        <div className='Blog'>
            <h4>Blog</h4>
            <div className='Blog__div'>
                <div className='Blog__block'>
                    <div className='Blog__img'></div>
                    <div className='Blog__txt'>
                        <h3>Nunc Volutpat Venenatis</h3>
                        <h4>MAY 9,2014</h4>
                        <h6>Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Ut faucibus fringilla semper. Aenean nunc ex,...</h6>
                    </div>
                </div>
                <div className='Blog__block1'>
                    <div className='Blog__img1'></div>
                    <div className='Blog__txt'>
                        <h3>Vestibulum Nisl Felis</h3>
                        <h4>MAY 9,2014</h4>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit.</h6>
                    </div>
                </div>
                <div className='Blog__block2'>
                    <div className='Blog__img2'></div>
                    <div className='Blog__txt'>
                        <h3>Proin Eu Augue Efficitur</h3>
                        <h4>MAY 9,2014</h4>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit.</h6>
                    </div>
                </div>
            </div>
            <div className='Blog__btn'>
                <h3>VIEW MORE <i class="fa-solid fa-angle-right"></i> </h3>
            </div>
        </div>
    )
}