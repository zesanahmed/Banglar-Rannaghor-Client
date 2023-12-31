import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    return (
        <div className="navbar text-white">
            <div className="navbar-start">
                <p className='text-xl font-bold text-white'><span className='text-3xl'>Banglar </span> Ranna<span className='text-amber-500 text-3xl'>Ghor</span></p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <button className="ml-6 text-xl font-semi-bold text-white hover:text-amber-500"><Link to='/mainLayout'>Home</Link></button>
                    <button className="ml-6 text-xl font-semi-bold text-white hover:text-amber-500"><Link to='/blog'>Blog</Link></button>
                    <button className="ml-6 text-xl font-semi-bold text-white hover:text-amber-500"><Link to='/about'>About Us</Link></button>
                </ul>
            </div>
            <div className="navbar-end">
                {user && <div className='tooltip' data-tooltip-content={user.displayName}> <img className='w-14 rounded-full mr-4 tooltip' data-tip={user.displayName} src={user.photoURL} alt="" /></div>}
                {user ?
                    <Link><button onClick={handleLogout} className="btn btn-outline btn-warning px-6">Log out</button></Link> :
                    <Link to="/login"><button className="btn btn-outline btn-warning px-6">Login</button></Link>}
            </div>
        </div>
    );
};

export default NavigationBar;