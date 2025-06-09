import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

const Navbar = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const EmptyData = () => {


        localStorage.removeItem('token');
        alert('loggedout');
        navigate('/login');

    }


    return (
        <>

            <div className='navbar bg-blue-500 flex items-center justify-between py-3'>

                <div className="navmenu">

                    <Link to='/home' className='nav-links home-link mx-20'>Home</Link>
                </div>

                {token ?
                    <>
                        <Link to='/profile' className='nav-links '>Profile</Link>
                        <button onClick={EmptyData} className='bg-red-700 me-10'>Logout</button>
                    </>
                    :
                    <button className='bg-green-700 me-10' onClick={() => navigate('/login')} >Login</button>
                }

            </div>

        </>
    )
}

export default Navbar
