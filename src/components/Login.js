import { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg" alt="bg-img"/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder='Full Name' className='text-xl p-4 my-4 w-full bg-gray-500 rounded'/>}
        <input type="text" placeholder='Email Address' className=' text-xl p-4 my-4 w-full bg-gray-500 rounded'/>
        <input type="password" placeholder='Password' className='text-xl p-4 my-4 w-full  bg-gray-500 rounded'/>
        <button className='p-4 my-6 bg-red-600 w-full rounded'>{isSignInForm? "Sign In":"Sign Up"}</button>
        <p className='text-xs cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign in Now"}</p>
      </form>
    </div>
  )
}

export default Login
