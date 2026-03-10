import React, { useState } from 'react'

function Login() {
  const [state, setState] = useState('Log In')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className='flex items-centre min-h-[80vh]'>
      <div className='flex flex-col gap-2 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-100 rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Log In'}</p>
        <p>Please {state === 'Sign Up' ? 'create an account' : 'log in'} to book a venue</p>
        {
          state === 'Sign Up' && (
            <div className='w-full'>
              <p>Full Name:</p>
              <input className='w-full border border-zinc-300 p-2 mt-1' type="text" onChange={(e) => setName(e.target.name)} value={name} required />
            </div>
          )
        }

        <div className='w-full'>
          <p>Email:</p>
          <input className='w-full border border-zinc-300 p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full'>
          <p>Password:</p>
          <input className='w-full border border-zinc-300 p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div>
        <button className='w-full bg-blue-500 text-white p-2 mt-4 rounded-md hover:bg-blue-600' type="submit">{state === 'Sign Up' ? 'Create Account' : 'Log In'} </button>
        {
          state === 'Sign Up'
            ? <p>Already have an account? <span onClick={() => setState('Log In')} className='text-primary cursor-pointer underline'>Login here</span></p>
            : <p>Don't have an account? <span onClick={() => setState('Sign Up')} className='text-primary cursor-pointer underline'>Sign up here</span></p>
        }
      </div>
    </form>
  )
}

export default Login