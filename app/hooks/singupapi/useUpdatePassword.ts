
async function  useUpdatePassword( currentPassword: string, newPassword: string, setSpinner : any){
     setSpinner(false)
    
    const response = await fetch('https://nest-api-95wt.onrender.com/auth/password', {
          method: 'PUT',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ currentPassword: currentPassword, newPassword: newPassword }),
        });
      if(response){
        setSpinner(true);
        const result = await response.json()
        return result;
        
      }
};

export default useUpdatePassword;