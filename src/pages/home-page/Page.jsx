import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    return (
        <>

            <h4 className='mt-5'>
                Want to explore more?? <a className='underline italic cursor-pointer' onClick={() => navigate('/login')}>LOGIN</a> for more information.
            </h4>


        </>
    )
}

export default Home
