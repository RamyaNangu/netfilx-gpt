import { useState ,useRef} from 'react'
import Header from './Header'
import {BG_URL} from '../utils/constants'
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux';
import {addUser} from '../utils/userSlice'
import {USER_AVATAR} from '../utils/constants'



const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null)
  const dispatch = useDispatch()
  
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  const handleClick = ()=>{
    //validate the form data
    const message = checkValidData(email.current.value,password.current.value)
    setErrorMessage(message)
    
    if(message) return

    if(!isSignInForm){
      //Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: {USER_AVATAR}
          }).then(() => {
             // Profile updated!
             const {uid,email,displayName,photoURL} = auth.currentUser;
             dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
             //console.log("CurrentUser",auth.currentUser)

          }).catch((error) => {
             // An error occurred
            // ...
          });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+"-"+errorMessage)
       // ..
    });
    }else{
      //Sign in Password
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       //console.log(user)
       // ...
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+"-"+errorMessage)
      });
     }
  }

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={BG_URL} alt="bg-img"/>
      </div>
      <form onSubmit={(event)=>event.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='text-xl p-4 my-4 w-full bg-gray-500 rounded'/>}
        <input ref={email} type="text" placeholder='Email Address' className=' text-xl p-4 my-4 w-full bg-gray-500 rounded'/>
        <input ref={password} type="password" placeholder='Password' className='text-xl p-4 my-4 w-full  bg-gray-500 rounded'/>
        <p className='text-red-500 text-xl'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-600 w-full rounded' onClick={handleClick}>{isSignInForm? "Sign In":"Sign Up"}</button>
        <p className='text-xs cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign in Now"}</p>
      </form>
    </div>
  )
}

export default Login
