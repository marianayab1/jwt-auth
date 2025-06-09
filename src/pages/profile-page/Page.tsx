import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const ProfilePage = () => {

    useEffect(() => {
        getData();
    }, []);

    const [userData, setUserData] = useState();

    const getData = () => {

        const token = JSON.parse(localStorage.getItem('token'));

        const header = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }

        axios.get('https://api.escuelajs.co/api/v1/auth/profile', header)
            .then((res) => {
                setUserData(res.data)
            })
            .catch((err) => {
                console.log('Errror occured due to:', err)
            });

    }

    return (
        <>
            {userData &&
                <div className="profile-pg">
                    <div className="welcome flex items-center mx-10 mt-10 mb-5">
                        <div className="avatar">
                            <img src={userData?.avatar} className='rounded-full w-25 ' />
                        </div>
                        <div className="email">
                            <h1 className='ms-10'>Welcome {userData?.name}! </h1>
                            <h4 className='ms-10 text-left capitalize'>{userData?.email} </h4>
                        </div>
                    </div>
                    <h4 className='ms-14 text-left capitalize user-id'><span className='id italic'>Id:</span> {userData?.id} </h4>
                    <h4 className='ms-14 text-left capitalize'>{userData?.role} </h4>
                </div>
            }
        </>

    )
}

export default ProfilePage
