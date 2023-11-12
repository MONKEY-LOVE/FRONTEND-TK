import React from 'react'
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'


function LoginPage() {
  const {register, handleSubmit, formState: {errors}} = useForm()

  const {signin} = useAuth();

  const onSubmit = handleSubmit(data => {
    signin(data)
  })

  return (
<div className="flex h-[calc(100vh-100px)] items-center justify-center">
  <form onSubmit={onSubmit} className="w-full max-w-md p-4 bg-violet-200 rounded-md shadow-md">
  <div className="mb-4 flex items-center">
  <label className="block text-sm font-medium text-gray-900">
    <span className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>

    </span>
  </label>
      <input
        type="email"
        {...register("correo", { required: true })}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 text-gray-900 placeholder-gray-600" placeholder='Correo Electronico'
      />
    </div>

    <div className="mb-4 flex items-center">
  <label className="block text-sm font-medium text-gray-900">
    <span className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    </span>
  </label>
  
  <input
  type="password"
  {...register("contrasena", { required: true })}
  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 text-gray-900 placeholder-gray-600"
  placeholder='Contraseña'
/>
</div>
    <button type="submit" className="w-full py-2 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-900 focus:outline-none focus:ring">
      Iniciar Sesion
    </button>
  </form>
</div>
  )
}

export default LoginPage