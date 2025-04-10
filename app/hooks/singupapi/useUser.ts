
import { useEffect, useState } from "react";

export const useUser = async()=>{
  
    const response = await fetch('https://nest-api-95wt.onrender.com/auth/me', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    const result = await response.json()
     return result.payload  

     
   
    }  