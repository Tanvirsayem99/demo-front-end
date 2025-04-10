// import { useLogOut } from "./useLogOUt";

async function  useDelete( currentPassword: string, setSpinner : any){
    setSpinner(false)

     const response = await fetch('https://nest-api-95wt.onrender.com/auth/delete', {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: currentPassword }),
      });

      if(response){
        setSpinner(true);
        const result = await response.json()
        // useLogOut()
        return result;
      }
};

export default useDelete;