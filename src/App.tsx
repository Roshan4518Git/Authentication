import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { getAuth } from "firebase/auth";


import './App.css'
import {auth,provider} from './config';
import { signInWithPopup } from 'firebase/auth';
import Home from './Home';
function App() {
  const [value, setValue] = useState('');

  const handleClick =()=>{
    signInWithPopup(auth,provider).then((result)=>{
      setValue(result.user?.email!);
      localStorage.setItem("email",result.user?.email!);
    }).catch((error)=>{
      console.log(error.message);
    })
  }
  useEffect(()=>{
    const email = localStorage.getItem("email");
    setValue(email!);
  },[])

  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <>
      {value ? <>
      <Home /> 
      {
      user?.displayName
      
      } is logged in!
      </>: 
      <button onClick={handleClick}>Sign In with Google</button>
      }
    </>
  )
}

export default App
