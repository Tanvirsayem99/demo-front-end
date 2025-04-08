"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { BiHide } from 'react-icons/bi';
import { IoEyeOutline } from 'react-icons/io5';
import useSignUp from '../hooks/singupapi/useSignUp';
import { ImSpinner9 } from 'react-icons/im';
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';

const page = () => {
    const [hide, setHide] = useState(true);
    const [loader, setLoader] = useState(true);
    const router = useRouter();
        const handleHide =()=>{
            setHide(!hide)
        }
        const handleForm =async (event: {
            preventDefault(): unknown; target: any; 
})=>{       setLoader(false)
            event.preventDefault()
            
            console.log(loader)
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const result: any= await useSignUp(name,email,password, setLoader); 
            console.log(result)
            if(result){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  router.push("/")
            }
            
        }
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center pt-16'>আপনার একাউন্ট তৈরী করুন</h1>
            <h2 className='text-sm text-center pt-6'>সফলতার দৌড়ে নিজেকে এগিয়ে রাখতে যুক্ত হোন এডুসিটি নেটওয়ার্ক এর সাথে</h2>
            <hr  className='w-[500px] mx-auto mt-5 text-gray-500'/>

            <form action="" className='flex w-[500px] mx-auto flex-col justify-center items-center' onSubmit={(event)=>handleForm(event)}>
                <div className='w-full'>
                    <p className='pt-4 pb-4 font-semibold'>পূর্ণ নাম</p>
                    <input type="text" name="name" id="" placeholder='আপনার পূর্ন নাম লিখুন' className='outline-1 py-2 pl-2 outline-slate-300 w-[500px] focus:outline-red-400'/>
                </div>
                <div className='w-full'>
                    <p className='pt-4 pb-4 font-semibold'>ইমেইল / মোবাইল নং</p>
                    <input type="text" name="email" id="" placeholder='আপনার ইমেইল অথবা মোবাইল নম্বর লিখুন' className='outline-1 py-2 pl-2 outline-slate-300 w-[500px] focus:outline-red-400'/>
                </div>
                <div className='w-full'>
                    <p className='pt-4 pb-4 font-semibold'>Password</p>
                    <div className='relative'>
                    <input type={hide?'password': "text"} name="password" id="" placeholder='একটি পাসওয়ার্ড তৈরি করুন, সর্বনিম্ন ৮ অক্ষরের' className='outline-1 py-2 pl-2 outline-slate-300 w-[500px] focus:outline-red-400'/>
                    <div className='absolute right-2 top-3'>
                                        {
                                            hide ? <IoEyeOutline onClick={()=>handleHide()}/> : <BiHide onClick={()=>handleHide()}/>
                                        }
                                    </div>
                    </div>
                </div>
                <button className='w-[500px] bg-black text-white font-semibold py-2 mt-6'>{!loader && <ImSpinner9 className='animate-spin text-2xl mx-auto'/>}{loader && 'রেজিস্ট্রেশন'}</button>
                <p className='text-[10px] pt-5'>সাইন আপ করে, আপনি আমাদের ব্যবহারের শর্তাবলী এবং গোপনীয়তা নীতিতে সম্মত হয়েছেন</p>
                <div className='flex justify-center items-center gap-1'>
                    <div className='w-[160px] bg-black h-[1px]'></div>
                    <p>অথবা সাইন আপ করুন</p>
                    <div className='w-[160px] bg-black h-[1px]'></div>
                    
                </div>
                <div className='flex gap-5 pt-5'>
                        <div className='border-1 border-black py-2 px-9'>গুগল</div>
                        <div className='border-1 border-black py-2 px-9'>ফেসবুক</div>
                </div>
                <div className='py-5'>
                    <p>ইতিমধ্যে অ্যাকাউন্ট রয়েছে?<Link href={"/login"} className='text-red-500'>লগইন</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default page;