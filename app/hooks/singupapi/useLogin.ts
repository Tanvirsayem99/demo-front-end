export const useLogin = async(email: string, password:string, setSpinner: any )=>{
    setSpinner(false)
    const response = await fetch('https://nest-api-95wt.onrender.com/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    }); 
    const result = await response.json()
    if(result){
        setSpinner(true)
    }
     return result  
    }  
