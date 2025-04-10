"use client"
import { useUser } from '@/app/hooks/singupapi/useUser';
import React, { useEffect, useState } from 'react';


const HomePage = () => {
    const [user, setUser] = useState<any>(null)
    useEffect(()=>{
        const fetchData = async()=>{
            const result: any = await useUser()
        setUser(result)
        }
        fetchData()
    },[])

    console.log(user);
    return (
        <div className='flex-col items-center justify-center mt-20 bg-red-50 w-96 mx-auto h-96 '>
            <p className='text-center text-4xl'>User</p>
            <p className='text-center text-2xl pt-5'>Name:{user?.name}</p>
            <p className='text-center text-2xl'>email:{user?.email}</p>
        </div>
    );
};

export default HomePage;