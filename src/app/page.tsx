import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <a href="/login" className="mr-2.5 place-content-center">
        <div className="p-10 bg-white rounded-xl shadow-lg place-content-center min-w-full min-h-full">
          <img src="assets/images/login.png" className="w-32 h-32" />
          <p className="text-black text-center mt-5 text-lg">Login</p>
        </div>
      </a>

      <a href="/register" className="ml-2.5">
        <div className="p-10 bg-white rounded-xl shadow-lg place-content-center min-w-full min-h-full">
          <img src="assets/images/register.png" className="w-32 h-32" />
          <p className="text-black text-center mt-5 text-lg">Register</p>
        </div>
      </a>
    </main>
  )
}
