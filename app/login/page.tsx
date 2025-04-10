"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiHide } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { ImSpinner9 } from "react-icons/im";
import { useLogin } from '../hooks/singupapi/useLogin';

import { useRouter } from 'next/navigation';
import { useUser } from '../hooks/singupapi/useUser';

const page = () => {
    const [hide, setHide] = useState(true);
    const [spinner, setSpinner] = useState(true);
    const [message, setMessage] = useState("")
    const router = useRouter()
    const handleHide =()=>{
        setHide(!hide)
        console.log("click")
        console.log(hide)
    }
    const handleForm = async (event: {
        preventDefault(): unknown; target: any;  
    })=>{
        setMessage('');
        setSpinner(false);
        event.preventDefault()
        console.log("hello")
        setSpinner(!spinner);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const result = await useLogin(email, password, setSpinner)
        if(!result.error){
            router.push("/")
        }
        setMessage(result.message)
        console.log(result)
    }
    
        
    
    return (
        <div>
        <h1 className='text-2xl font-semibold text-center pt-16'>আপনার অ্যাকাউন্টে প্রবেশ করুন</h1>
        <h2 className='text-sm text-center pt-6'>নিজেকে স্কিলড প্রফেশনাল হিসেবে গড়ে তুলুন</h2>
        <hr  className='w-[500px] mx-auto mt-5 text-gray-500'/>

        <form action="" className='flex w-[500px] mx-auto flex-col justify-center items-center' onSubmit={(event)=>handleForm(event)}>
            <div className='w-full'>
                <p className='pt-4 pb-4 font-semibold'>ইমেইল / মোবাইল নং</p>
                <input type="text" name="email" id="" placeholder='আপনার ইমেইল অথবা মোবাইল নম্বর লিখুন' className='outline-1 py-2 pl-2 outline-slate-300 w-[500px] focus:outline-red-400'/>
            </div>
            <div className='w-full'>
                <p className='pt-4 pb-4 font-semibold'>Password</p>
                <div className='relative'>
                <input type={hide?'password': "text"} name="password" id="" placeholder='আপনার পাসওয়ার্ড লিখুন' className='outline-1 py-2 pl-2 outline-slate-300 w-[500px] focus:outline-red-400'/>
                <div className='absolute right-2 top-3'>
                    {
                        hide ? <IoEyeOutline onClick={()=>handleHide()}/> : <BiHide onClick={()=>handleHide()}/>
                    }
                </div>
                </div>
                
                
            </div>
            <button className='w-[500px] bg-black text-white font-semibold py-2 mt-6'>{!spinner ? <ImSpinner9 className='animate-spin text-2xl mx-auto'/> : 'লগইন'}</button>
            {
                message && <p className='text-red-500 text-left'>{message}</p>
            }
            <div className='py-5'>
                    <p>এডুসিটিতে অ্যাকাউন্ট নেই ?<Link href={"/Register"} className='text-red-500'>রেজিস্ট্রেশন করুন</Link> </p>
                </div>
            
        </form>
    </div>
    );
};

export default page;

