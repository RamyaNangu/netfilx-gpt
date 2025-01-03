import React,{useEffect} from 'react'
import {LOGO_URL} from '../utils/constants'
import {signOut } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase'
import {addUser,removeUser} from '../utils/userSlice'
import {toggleGPTsearchView} from '../utils/gptSlice'
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import {changeLanguage} from '../utils/configSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const showGPTSearch = useSelector(store=>store.gpt.showGPTSearch)
  const user = useSelector(store=>store.user)

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      //navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleGPTSearchClick = ()=>{
    // Toggle GPT search
    dispatch(toggleGPTsearchView())
  }

  const handleLanguageChange = (e)=>{
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
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
       {user && (<div className='flex items-center'>
        {showGPTSearch && <select className='m-4 p-2 bg-gray-300' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((language)=><option key={language.identifier} value={language.identifier}>{language.name}</option>)}
        </select>}
        <button className='px-2 py-2 mx-2 my-4 bg-purple-800 text-white rounded-lg'
        onClick={handleGPTSearchClick}>{showGPTSearch ? "Home Page":"GPT Search"}</button>
        <img className="w-10 h-10 mx-2 rounded-sm" src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="signinimg" />
        <button className='mx-2 border p-2 text-white rounded-lg shadow-lg' onClick={handleSignout}>Sign out</button>
       </div>)}
    </div>
  )
}

export default Header
