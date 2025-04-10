"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiHide } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { ImSpinner9 } from "react-icons/im";
import { useUser } from '@/app/hooks/singupapi/useUser';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import useDelete from '../hooks/singupapi/useDelete';
import { useLogOut } from '../hooks/singupapi/useLogOut';


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
        
        // sweetalert
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then(async (result) => {
            if (result.isConfirmed) {
                const result: any = await useDelete(currentPassword,setSpinner)
                if(!result.error){
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      useLogOut()
                    router.push("/")    
              }
              if(result.error){
                setMessage(result.message)
            }

              
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });
        
        
    }
    return (
        <div>
        <h1 className='text-2xl font-semibold text-center pt-16'>আপনার অ্যাকাউন্ট ডিলেট করুন</h1>
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
                <div className='absolute right-2 top-3'>
                    {
                        hide ? <IoEyeOutline onClick={()=>handleHide()}/> : <BiHide onClick={()=>handleHide()}/>
                    }
                </div>
                </div>
                
                
            </div>
            <button className='w-[500px] bg-black text-white font-semibold py-2 mt-6'>{!spinner ? <ImSpinner9 className='animate-spin text-2xl mx-auto'/> : 'ডিলেট'}</button>
            
            
        </form>
    </div>
    );
};

export default page;

