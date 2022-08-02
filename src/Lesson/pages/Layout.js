import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
    return (
        <>
            <div className="Layout">
                <div className="Layout__links">
                    <span><Link to='/' >Home</Link></span>
                    <span><Link to='/blogs'>About</Link></span>
                    <span><Link to='/contact'>Products</Link></span>
                    <span><Link to='./store'>Store</Link></span>
                </div>

            </div>
            <div className="Outlet">
                <Outlet />
            </div>
        </>
    )
}

export default Layout;