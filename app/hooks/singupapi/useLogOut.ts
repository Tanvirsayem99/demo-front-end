export const useLogOut = async()=>{

    const response = await fetch('https://nest-api-95wt.onrender.com/auth/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    const result = await response.json()
     return result  
    }  