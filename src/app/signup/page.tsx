import Link from "next/link";
import Image from "next/image";

export default function Signup(){
    return(
        <div className="w-full overflow-hidden">
        {/* Nav bar*/}
         <div className="relative font-[sans-serif] pt-20 before:absolute lg:h-full h-[300px] before:w-full before:h-full before:inset-0 bg-black before:z-[-10] lg:mb-20 mb-10">
  {/* Banner Image */}
  <Image
    src="/unsplash_4ycv3Ky1ZZU.png"
    alt="Banner Image"
    width={500}
    height={500}
    className="absolute inset-0 w-full lg:h-full h-[300px] object-cover"
  />

  {/* Text Content */}
  <div className="min-h-[350px] relative z-40 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6 lg:mt-0 mt-0">
    <h2 className="text-white md:text-5xl text-2xl font-bold mb-8 text-center 
      lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
      absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      z-10 lg:z-50">
      Sign Up
    </h2>

    <div className="flex items-center space-x-2 lg:mt-36 mt-0 text-white">
      <Link href="/" className="text-white">Home</Link>
      <span className="text-white"> &gt; </span>
      <Link href="/about" className="text-orange-500">Sign Up</Link>
    </div>
  </div>
</div>
        <div className="min-h-screen bg-white">
    
        {/* Signup Form */}
        <section className="py-16">
          <div className="container mx-auto max-w-md bg-white shadow-lg shadow-pink-200 rounded-md p-8">
            <h3 className="text-2xl font-bold mb-8">Sign Up</h3>
            <form>


<div className="relative w-full max-w-md mb-3">             {/* Name Input */}
  <Image 
    src="/User.png" 
    alt="User Icon" 
    width={24}
    height={24}
    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none" 
  />
  <input
    type="text"
    className="w-full pl-10 pr-3 py-2 border rounded focus:ring focus:ring-yellow-300 focus:outline-none"
    placeholder="Name"
  />
</div>

             
<div className="relative w-full max-w-md mb-3">             {/* Email Input */}
  <Image
    src="/EnvelopeSimple.png" 
    alt="Email Icon" 
    width={24}
    height={24}
    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none" 
  />
  <input
    type="text"
    className="w-full pl-10 pr-3 py-2 border rounded focus:ring focus:ring-yellow-300 focus:outline-none"
    placeholder="Email"
  />
</div>


<div className="relative w-full max-w-md mb-3">             {/* password Input */}
  <Image
    src="/Lock.png" 
    alt="Lock Icon" 
    width={24}
    height={24}
    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none" 
  />
  <input
    type="text"
    className="w-full pl-10 pr-3 py-2 border rounded focus:ring focus:ring-yellow-300 focus:outline-none"
    placeholder="Password"
  />
</div>
              <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <span>Remember me?</span>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF9F0D] hover:bg-[#e4890b] text-white py-2 rounded"
              >
                Sign Up
              </button>
              <p className="text-center mt-4">
                <Link href="/forgot-password" className="text-slate-500 flex justify-end">Forgot password?</Link>
              </p>
            </form>
            <div className="text-center mt-8">
              <p className="text-slate-800 text-xl">OR</p>
              <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center gap-2">
              {/* <FcGoogle size={24}/> */}
              <Image src="/Google.png" width={24} height={24} alt="google icon"/>
              <p>Sign up with Google</p>
              </button>
              <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center gap-3">
                {/* <FaApple size={24}/> */}
                <Image src="/Apple.png" width={24} height={24} alt="apple icon"/>
                <p>Sign up with Apple</p>
              </button>
            </div>
          </div>
        </section>
  
     </div>  
      </div>
    )
}
