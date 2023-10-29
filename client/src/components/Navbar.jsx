import { Link } from 'react-router-dom';
import './componentGlobal.css';

const Navbar = () => {
    return ( 
        <nav>
            <Link to="/"><div className="menuitems">Home</div></Link>
            <Link to="/about"><div className="menuitems">About</div></Link>
            <Link to="/works"><div className="menuitems">Reviews</div></Link>
            <Link to="/contact"><div className="menuitems">Contact us</div></Link>
        </nav>
    );
}

export default Navbar;
