'use client'

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { userService } from 'src/app/services';

export default function Register() {
  // Form validation rules 
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("E-mail is required"),
    password: Yup.string().required("Password is required")
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const [isRegistrationFailed, setRegistrationFailed] = useState(null);
  const [registrationMessage, setRegistrationMessage] = useState("");

  interface FormData {
    email: string;
    password: string;
  };
  
  function onSubmit(props: FormData) {
    return userService.register(props.email, props.password)
      .then(() => {
        setRegistrationFailed(false);
        setRegistrationMessage("Registration success, you can now proceed to Login page");
      })
      .catch(() => {
        setRegistrationFailed(true);
        setRegistrationMessage("Registration failed");
      });
  }

  return (
    <div className='min-h-screen flex flex-col justify-center'>
      <div className='p-6 mx-auto bg-white rounded-xl shadow-lg flex-col space-x-4 w-1/3'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex-col min-w-full'>
            <div className='mb-2'>
              <p className='text-sky-500'>First Name</p>
              <input
                {...register('firstName')}
                name='firstName'
                type='text'
                className={'border-slate-500 border rounded-md min-w-full text-black p-2'}
              />
            </div>

            <div className='mb-2'>
              <p className='text-sky-500'>Last Name</p>
              <input
                {...register('lastName')}
                name='lastName'
                type='text'
                className={'border-slate-500 border rounded-md min-w-full text-black p-2'}
              />
            </div>

            <div className='mb-2'>
              <p className={errors.email ? 'text-red-500' : 'text-sky-500'}>
                E-mail
              </p>
              <input
                {...register('email')}
                name='email'
                type='email'
                className={`form-control ${errors.email
                  ? 'is-invalid border-red-600 border rounded-md min-w-full text-black p-2'
                  : 'border-slate-500 border rounded-md min-w-full text-black p-2'}`
                }
              />
              <p className='text-red-500 text-sm'>{errors.email?.message}</p>
            </div>

            <div className='mb-2'>
              <p className={errors.password ? 'text-red-500' : 'text-sky-500'}>
                Password
              </p>
              <input
                {...register('password')}
                name='password'
                type='password'
                className={`form-control ${errors.password
                  ? 'is-invalid border-red-600 border rounded-md min-w-full text-black p-2'
                  : 'border-slate-500 border rounded-md min-w-full text-black p-2'}`
                }
              />
              <p className='text-red-500 text-sm'>{errors.password?.message}</p>
            </div>

            {
              isRegistrationFailed !== null &&
                <div className={isRegistrationFailed ? 'mt-5 bg-rose-200 rounded-md py-2 px-5' : 'mt-5 bg-green-200 rounded-md py-2 px-5'}>
                  <p className={isRegistrationFailed ? 'text-black text-center text-rose-800' : 'text-black text-center text-green-800'}>
                    {registrationMessage}
                  </p>
                </div>
            }

            <button
              disabled={formState.isSubmitting}
              className={formState.isSubmitting
                ? 'bg-zinc-400 min-w-full p-2 rounded-md mt-5'
                : 'bg-sky-500 min-w-full p-2 rounded-md mt-5'
              }
            >
              Register
            </button>
          </div>
        </form>

        <p className='text-black mt-2 text-center'>Have account?
          <a
            className='text-sky-500 ml-1'
            href='/login'>
              Login
          </a>
        </p>
      </div>
    </div>
  );
}