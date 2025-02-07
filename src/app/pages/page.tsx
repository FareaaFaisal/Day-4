'use client';
import Image from 'next/image';
import Link from 'next/link';
import CommentBox from '../components/Comment';

export default function DetailsPage() {
    return(
        <>
        <div className="w-full overflow-hidden">
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
      Blog Details Page
    </h2>

    <div className="flex items-center space-x-2 lg:mt-36 mt-0 text-white">
      <Link href="/" className="text-white">Home</Link>
      <span className="text-white"> &gt; </span>
      <Link href="/about" className="text-orange-500">Blog Details</Link>
    </div>
  </div>
</div>
        </div>

        <div className='w-full bg-white flex flex-col lg:flex-row gap-6 p-4 lg:p-10'>
            {/* Main Content */}
            <div className='w-full lg:w-2/3 bg-white'>
                <Image 
                    src='/details1.png'
                    alt=''
                    width={871}
                    height={520}
                    className='w-full rounded-lg'
                />
                <div className='flex items-center text-sm text-gray-600 mt-3 space-x-4'>
                    <div className='flex items-center space-x-2'>
                        <Image src='/Calendar.svg' alt='' width={24} height={24} />
                        <p>Feb 14, 2022</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Image src='/messages.svg' alt='' width={24} height={24} />
                        <p>3 Comments</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Image src='/admin.svg' alt='' width={24} height={24} />
                        <p>Admin</p>
                    </div>
                </div>
                <h1 className='font-bold text-2xl lg:text-4xl mt-6 text-[#333333]'>10 Reasons To Do A Digital Detox Challenge</h1>
                <p className='mt-4 text-gray-700 leading-relaxed'>
                <br/><br/>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
<br/><br/><br/>
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat


                </p>
                <div className='py-8 bg-[#FF9F0D] mt-10 text-white p-6 rounded-lg'>
                    <div className='flex items-start'>
                        <Image src='/Quotes.png' alt='' width={48} height={48} className='mr-4' />
                        <p className='lg:text-2xl text-lg  font-bold'>
                        Lorem eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet et ut aliquyam
                        </p>
                    </div>
                </div>
                <p className='mt-6 text-gray-700 leading-relaxed'>
                    <br/>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <div className='flex flex-col lg:flex-row mt-10 gap-6'>
                    <div className='lg:w-1/2 text-gray-700'>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                        <p className='mt-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                    </div>
                    <div className='lg:w-1/2'>
                        <Image src='/ramen.png' alt='' width={424} height={366} className='w-full' />
                    </div>
                </div>
                <div>
                    <br/><br/>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    
                    <br/><br/>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </div>
                <Link href="https://www.facebook.com/">
                    <Image src='/Share.png' alt='' width={872} height={60} className='mt-10 w-full' />
                </Link>
                <CommentBox/>
            </div>

            {/* Sidebar */}
            <div className='w-[424px] lg:mt-[-35px] h-[2501px] lg:block hidden md:hidden'>
        {/* Right div */}
        <div className='flex justify-center mt-8 w-[421.82px] border-1 h-[70px]'>

            <input 
            placeholder='Search Your Keyword Here'
            type="text"
            className='w-[350px] px-3 py-3 bg-zinc-100 border-lg border-gray-300 '
            />
            <button className='w-[76px] h-[69px] cursor-pointer justify-center bg-[#FF9F0D]'>     
           <Image 
            src='/Group (2).svg'
            alt='search icon'
            width={24}
            height={24}
            className='ml-6'
            />
            </button>

            

            </div>

            <Image 
            src='rw.svg'
            alt=''
            width={424}
            height={423}
            className='mt-5'
            />
            <div className='justify-center mt-8 w-[423px] h-[592px] border-[1px] border-gray-400'>

            <h1 className='text-lg w-[200px] font-bold h-[28px] py-5 px-8'>Recent Posts</h1>
            
               <Image 
               src='/Recent post.png'
               alt=''
               width={323}
               height={107}
               className='ml-8 mt-5 cursor-pointer'
               />

               
               <Image 
               src='/Recent post (1).png'
               alt=''
               width={323}
               height={107}
               className='ml-8 mt-5 cursor-pointer'
               />

               <Image 
               src='/Recent post (2).png'
               alt=''
               width={323}
               height={107}
               className='cursor-pointer mt-5 ml-8 '
               />

               
               <Image 
               src='/Recent post (3).png'
               alt=''
               width={323}
               height={107}
               className='ml-8 mt-5 cursor-pointer'
               />


            </div>

            <div className='justify-center mt-8 w-[423px] h-[490px]  border-[1px] border-gray-400'>

            <h1 className='text-lg w-[200px] h-[28p] py-5 px-8 font-bold'>Filter By Menu</h1>
            
               <Image 
               src='/Chicken Fry.png'
               alt=''
               width={323}
               height={62}
               className='ml-8 mt-5 cursor-pointer'
               />

               
               <Image 
               src='/Chicken Fry (1).png'
               alt=''
               width={323}
               height={62}
               className='ml-8 mt-5 cursor-pointer'
               />

               <Image 
               src='/Chicken Fry (2).png'
               alt=''
               width={323}
               height={62}
               className='cursor-pointer ml-8 mt-5'
               />

               
               <Image 
               src='/Chicken Fry (3).png'
               alt=''
               width={323}
               height={62}
               className='ml-8 mt-5 cursor-pointer'
               />

               <Image 
               src='/Chicken Fry (4).png'
               alt=''
               width={323}
               height={62}
               className='ml-8 mt-2 cursor-pointer'
               />


            </div>

            <div className='w-[423px] mt-10 h-[308px] border-[1px] border-gray-400'>
              <div className='w-[325px] h-[244px] py-10 ml-10 cursor-pointer' > 

              <Image 
              src='/Popular Tag.png'
              alt=''
              width={422}
              height={307}
              />
                 
              </div>
            </div>

            <div className='mt-10 border-[1px] border-[] w-[422px] h-[316px] items-center'>
                <div className='w-[308px] mt-[25px] ml-10 h-[94px] items-center cursor-pointer'>
                
                    <Image 
                    src='/Photo Gallery.svg'
                    alt=''
                    width={308}
                    height={46.5}
                    className='mt-5'
                    />
                </div>
            </div>

            <div className='mt-10 border-[1px] border-[] w-[422px] h-[158px] items-center'>
                <div className='w-[308px] mt-[25px] ml-10 h-[94px] items-center cursor-pointer'>
                  <h1 className='text-2xl font-bold'>Follow us</h1>
                  <Link href="https://www.facebook.com/">
                  <Image src="/Sociali icon.png" width={80} height={20} alt="social icons" className="w-[80px] lg:h-[90px] lg:w-[300px]" />
                  </Link> 
                  
                </div>
            </div>
  
    </div>
        </div>
        </>
    )
}
