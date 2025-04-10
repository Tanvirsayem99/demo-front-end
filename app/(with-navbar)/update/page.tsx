"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiHide } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { ImSpinner9 } from "react-icons/im";
import useUpdatePassword from '@/app/hooks/singupapi/useUpdatePassword';
import { useUser } from '@/app/hooks/singupapi/useUser';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';


const page = () => {
    const [hide, setHide] = useState(true);
    const [spinner, setSpinner] = useState(true);
    const [user, setUser] = useState<any>(null)
    const [message, setMessage] = useState(null)
    const router = useRouter()
     useEffect(()=>{
                  const fetchData = async()=>{
                      const result: any = await useUser()
                      console.log("result",result)
                  setUser(result)
                  }
                  fetchData()
              },[])
    const handleHide =()=>{
        setHide(!hide)
    }
    const handleForm = async (event: {
        preventDefault(): unknown; target: any;  
    })=>{
        setMessage(null)
        setSpinner(false);
        event.preventDefault()
        setSpinner(!spinner);
        const form = event.target;
        const currentPassword = form.password.value;
        const newPassword = form.newpassword.value;
        const result: any = await useUpdatePassword(currentPassword,newPassword,setSpinner)
        console.log("hello",result)
        if(result.error){
            setMessage(result.message)
            console.log(result.message)
        }
        if(!result.error){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your password has benn updated",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          router.push("/")    
                    }
    }
    return (
        <div>
        <h1 className='text-2xl font-semibold text-center pt-16'>আপনার পাসওয়ার্ড পরিবর্তন করুন</h1>
        <hr  className='w-[500px] mx-auto mt-5 text-gray-500'/>

        <form action="" className='flex w-[500px] mx-auto flex-col justify-center items-center' onSubmit={(event)=>handleForm(event)}>
            <div className='w-full'>
                <p className='pt-4 pb-4 font-semibold'>ইমেইল</p>
                <input type="text" name="email" id="" readOnly defaultValue={user?.email} className='outline-1 py-2 pl-2 outline-slate-300 w-[500px] focus:outline-red-400'/>
            </div>
            <div className='w-full'>
                <p className='pt-4 pb-4 font-semibold'>Old Password</p>
                <div className='relative'>
                <input type={hide?'password': "text"} name="password" id="" placeholder='আপনার পাসওয়ার্ড লিখুন' className='outline-1 py-2 pl-2 outline-slate-300 w-[500px] focus:outline-red-400'/>
                {
                message && <p className='text-red-500 text-left'>{message}</p>
            }
                <p className='pt-4 pb-4 font-semibold'> New Password</p>
                <input type={hide?'password': "text"} name="newpassword" id="" placeholder='আপনার পাসওয়ার্ড লিখুন' className='outline-1 py-2 pl-2 outline-slate-300 w-[500px] focus:outline-red-400'/>
                <div className='absolute right-2 top-3'>
                    {
                        hide ? <IoEyeOutline onClick={()=>handleHide()}/> : <BiHide onClick={()=>handleHide()}/>
                    }
                </div>
                </div>
                
                
            </div>
            <button className='w-[500px] bg-black text-white font-semibold py-2 mt-6'>{!spinner ? <ImSpinner9 className='animate-spin text-2xl mx-auto'/> : 'আপডেট'}</button>
            
            
        </form>
    </div>
    );
};

export default page;

