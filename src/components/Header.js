import React,{useEffect} from 'react'
import {LOGO_URL} from '../utils/constants'
import {signOut } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase'
import {addUser,removeUser} from '../utils/userSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store=>store.user)

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      //navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;

        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate('/browse')
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    });
  },[])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={LOGO_URL} alt="logo"/>
       {user && <div className='flex items-center'>
        <img className="w-10 h-10 mx-2 rounded-sm" src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="signinimg" />
        <button className='mx-2 border p-2 text-white rounded-lg shadow-lg' onClick={handleSignout}>Sign out</button>
       </div>}
    </div>
  )
}

export default Header
