"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { userService } from 'src/app/services';

export default function Login() {
  const router = useRouter();

  // Form validation rules 
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('E-mail is required'),
    password: Yup.string().required('Password is required')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const [isLoginFailed, setLoginFailed] = useState(false);
  const [loginFailedMessage, setLoginFailedMessage] = useState("");
  
  function onSubmit({ email, password }) {
    return userService.login(email, password)
      .then((res) => {
        setLoginFailed(false);
        // Navigate to dashboard
        // router.push("/dashboard");
      })
      .catch((error) => {
        setLoginFailed(true);
        setLoginFailedMessage("User not found");
      });
  }

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex-col space-x-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex-col min-w-full">
            <div>
              <p className="text-sky-500">E-mail</p>
              <input
                {...register('email')}
                name="email"
                type="email"
                className={`form-control ${errors.email
                  ? "is-invalid border-red-600 border rounded-md min-w-full text-black p-2"
                  : "border-slate-500 border rounded-md min-w-full text-black p-2"}`
                }
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            <div className="mt-2">
              <p className="text-sky-500">Password</p>
              <input
                {...register('password')}
                name="password"
                type="password"
                className={`form-control ${errors.password
                  ? "is-invalid border-red-600 border rounded-md min-w-full text-black p-2"
                  : "border-slate-500 border rounded-md min-w-full text-black p-2"}`
                }
              />
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>

            {
              isLoginFailed &&
                <div className="mt-5 bg-rose-200 rounded-md p-2">
                  <p className="text-black text-center text-rose-800">{loginFailedMessage}</p>
                </div>
            }

            <button
              disabled={formState.isSubmitting}
              className={formState.isSubmitting
                ? "bg-zinc-400 min-w-full p-2 rounded-md mt-5"
                : "bg-sky-500 min-w-full p-2 rounded-md mt-5"
              }
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-black mt-2 text-center">Don't have account yet?
          <a
            className="text-sky-500 ml-1"
            href="/register">
              Register
          </a>
        </p>
      </div>
    </div>
  );
}