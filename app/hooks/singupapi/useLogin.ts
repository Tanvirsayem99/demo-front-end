import { signIn } from 'next-auth/react';




async function  useLogin( email: string, password: string, setSpinner : any){


    //  const response = await fetch('http://localhost:8000/auth/delete', {
    //     method: 'DELETE',
    //     credentials: 'include',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ password: "22222222" }),
    //   });
     const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });
    
    // const response = await fetch('http://localhost:8000/auth/password', {
    //       method: 'PUT',
    //       credentials: 'include',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ currentPassword: "11111111", newPassword: "supersecret" }),
    //     });
      if(response.ok){
        setSpinner(true);
        alert("LOGIN SuccessFull")
        
      }
};

export default useLogin;