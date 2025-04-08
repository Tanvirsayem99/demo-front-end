"use client";

async function  useSignUp(name: string, email: string, password: string, setLoader : any){
     const response = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email, password: password }),
      });
      if(response.ok){
        setLoader(true);
        return await response.json();
        
      }
};

export default useSignUp;