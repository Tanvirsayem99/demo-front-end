"use client";

async function  useSignUp(name: string, email: string, password: string, setLoader : any){
     const response = await fetch('https://nest-api-95wt.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email, password: password }),
      });
      if(response){
        setLoader(true);
        return await response.json();
        
      }
};

export default useSignUp;