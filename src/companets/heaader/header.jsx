import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
    return (
        <>
        <header className='header'>
            <div className="container header_container">
                <Link className='header_Link'  to='/'>Avtoelon.uz</Link>
                <div className="header_wrraper">
                    <Link className='header_link' to='/'>Home</Link>
                    <Link className='header_link' to='/about'>About</Link>
                    <Link className='header_link' to='/setting'>Setting</Link>
                    <Link className='header_link' to='/Contact'>Contact</Link>
                </div>
            </div>
        </header>
        </>
    )
}