
import './App.css';
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="nav p-5">
            <nav className='flex flex-row justify-between p-5 '>
                <h1 className='logo font-bold text-[2.5vw] text-red-500'>Nike</h1>
                <ul className="flex flex-row justify-between ">
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    {/* <li>
                    <link to="/Shop">Shop</link>
                    </li> */}
                    <li>
                    <Link to="/product">Product</Link>
                    </li>
                    <li><Link to="/">cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;
