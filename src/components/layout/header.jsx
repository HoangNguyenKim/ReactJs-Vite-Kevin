import './header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <ul>
            <li className='active'><Link to="#home">Home</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/product">Product</Link></li>
        </ul>
    );
}
export default Header;