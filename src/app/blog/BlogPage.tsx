'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
    return (
        <>
            <div className="min-w-full overflow-hidden">
                {/* Header */}
                <div className="relative font-[sans-serif] pt-20 before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                    <Image
                        src="/unsplash_4ycv3Ky1ZZU.png"
                        width={500}
                        height={500}
                        alt="Banner Image"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
                        <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
                            Blog List
                        </h2>
                        <div className="flex items-center space-x-2 text-white">
                            <Link href="/" className="text-white">Home</Link>
                            <span className="text-white"> &gt; </span>
                            <Link href="/menu" className="text-orange-500">blog</Link>
                        </div>
                    </div>
                </div>

                {/* page start */}
                <div className='w-full lg:w-[1920px] h-auto bg-white flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-[872px] h-auto pt-[130px] mx-4 lg:mx-[120px] bg-white'>
                        {/* First Image */}
                        <Image 
                            src='/blog1.svg'
                            alt=''
                            width={700}
                            height={600}
                            className='mt-10 mx-4 lg:mx-5'
                        />
                        <div className='flex mt-3'>
                            <Image 
                                src='/Calendar.svg'
                                alt=''
                                width={23.97}
                                height={24}
                                className='cursor-pointer mx-4'
                            />
                            <p> Feb 14, 2022 / </p>
                            <Image 
                                src='/messages.svg'
                                alt=''
                                width={23.97}
                                height={24}
                                className='cursor-pointer mx-4'
                            />
                            <p> 3 / </p>
                            <Image 
                                src='/admin.svg'
                                alt=''
                                width={23.97}
                                height={24}
                                className='cursor-pointer'
                            />
                            <p> Admin </p>
                        </div>
                        <div className='pl-[20px]'>
                            <h1 className='font-bold text-4xl w-full lg:w-[504px] h-40 md:h-28 lg:h-8 bg-white py-[46px] text-[#333333]'>10 Reasons To Do A Digital Detox challenge</h1>
                            <p className='w-full lg:w-[647.26px] h-[96px] py-[40px] bg-white'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <button className='w-full lg:w-[172px] h-[52px] rounded-[6px] border-[1px] mt-[50px] md:mt-[30px] lg:mt-[30px] py-[14px] px-[32px] text-[#FF9F0D] border-[#FF9F0D]'>Read More</button>
                        </div>

                        {/* Second Image */}
                        <Image 
                            src='/blog2.svg'
                            alt=''
                            width={700}
                            height={600}
                            className='mt-10 mx-4 lg:mx-5'
                        />
                        <div className='flex mt-3'>
                            <Image 
                                src='/Calendar.svg'
                                alt=''
                                width={23.97}
                                height={24}
                                className='cursor-pointer mx-4'
                            />
                            <p> Feb 14, 2022 / </p>
                            <Image 
                                src='/messages.svg'
                                alt=''
                                width={23.97}
                                height={24}
                                className='cursor-pointer mx-4'
                            />
                            <p> 3 / </p>
                            <Image 
                                src='/admin.svg'
                                alt=''
                                width={23.97}
                                height={24}
                                className='cursor-pointer'
                            />
                            <p> Admin </p>
                        </div>
                        <div className='pl-[20px]'>
                            <h1 className='font-bold text-4xl w-full lg:w-[504px] h-40 md:h-28 lg:h-8 bg-white py-[46px] text-[#333333]'>Traditional Soft Pretzels with Sweet Beer Cheese</h1>
                            <p className='w-full lg:w-[647.26px] h-[96px] py-[40px] bg-white'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <button className='w-full lg:w-[172px] h-[52px] rounded-[6px] border-[1px] mt-[50px] md:mt-[30px] lg:mt-[30px] py-[14px] px-[32px] text-[#FF9F0D] border-[#FF9F0D]'>Read More</button>
                        </div>

                        {/* Third image */}
                        <Image 
                            src='/blog3.svg'
                            alt=''
                            width={700}
                            height={600}
                            className='mt-10 mx-4 lg:mx-5'
                        />
                        <div className='flex mt-3'>
                            <Image 
                                src='/Calendar.svg'
                                alt=''
                                width={23.97}
                                height={24}
                                className='cursor-pointer mx-4'
                            />
                            <p> Feb 14, 2022 / </p>
                            <Image 
                                src='/messages.svg'
                                alt=''
                                width={23.97}
                                height={24}
                                className='cursor-pointer mx-4'
                            />
                            <p> 3 / </p>
                            <Image 
                                src='/admin.svg'
                                alt=''
                                width={23.97}
                                height={24}
                                className='cursor-pointer'
                            />
                            <p> Admin </p>
                        </div>

                        <div className='pl-[20px]'>
                            <h1 className='font-bold text-4xl w-full lg:w-[504px] h-40 md:h-28 lg:h-8 bg-white py-[46px] text-[#333333]'>The Ultimate Hangover Burger: Egg in a Hole Burger</h1>
                            <p className='w-full lg:w-[647.26px] h-[96px] py-[40px] bg-white'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <button className='w-full lg:w-[172px] h-[52px] rounded-[6px] border-[1px] mt-[50px] md:mt-[30px] lg:mt-[30px] py-[14px] px-[32px] text-[#FF9F0D] border-[#FF9F0D]'>Read More</button>
                        </div>

                        {/* Fourth Image */}
                        <Image 
                            src='/blog4.svg'
                            alt=''
                            width={700}
                            height={600}
                            className='mt-10 mx-4 lg:mx-5'
                        />
                        <div className='flex mt-3'>
                            <Image 
                                src='/Calendar.svg'
                                alt=''
                                width={23.97}
                                height={24}
                                className='cursor-pointer mx-4'
                            />
                            <p> Feb 14, 2022 / </p>
                            <Image 
                                src='/messages.svg'
                                alt=''
                                width={23.97}
                                height={24}
                                className='cursor-pointer mx-4'
                            />
                            <p> 3 / </p>
                            <Image 
                                src='/admin.svg'
                                alt=''
                                width={23.97}
                                height={24}
                                className='cursor-pointer'
                            />
                            <p> Admin </p>
                        </div>

                        <div className='pl-[20px]'>
                            <h1 className='font-bold text-4xl w-full lg:w-[504px] h-40 md:h-28 lg:h-8 bg-white py-[46px] text-[#333333]'>My Favorite Easy Black Pizza Toast Recipe</h1>
                            <p className='w-full lg:w-[647.26px] h-[96px] py-[40px] bg-white'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <button className='w-full lg:w-[172px] h-[52px] rounded-[6px] border-[1px] mt-[50px] md:mt-[30px] lg:mt-[30px] py-[14px] px-[32px] text-[#FF9F0D] border-[#FF9F0D]'>Read More</button>
                        </div>
                    </div>

                    <div className='ml-[-240px] lg:w-[424px] mt-[130px] h-auto'>
                        <div className='flex justify-center mt-8  lg:w-[421.82px] border-1 h-[70px]'>
                            <input 
                                placeholder='Search Your Keyword Here'
                                type="text"
                                className='w-full lg:w-[350px] px-3 py-3 bg-zinc-100 border-lg border-gray-300'
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

                        {/* Recent Posts */}
                        <div className='justify-center mt-8 w-full lg:w-[423px] h-auto border-[1px] border-gray-400'>
                            <h1 className='text-lg w-full lg:w-[200px] font-bold h-[28px] py-5 px-8'>Recent Posts</h1>
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
                                className='cursor-pointer mt-5 ml-8'
                            />
                            <Image 
                                src='/Recent post (3).png'
                                alt=''
                                width={323}
                                height={107}
                                className='ml-8 mt-5 cursor-pointer'
                            />
                        </div>
                        {/* Filter By Menu */}
                        <div className='justify-center mt-8 w-full lg:w-[423px] h-auto border-[1px] border-gray-400'>
                            <h1 className='text-lg w-full lg:w-[200px] h-[28p] py-5 px-8 font-bold'>Filter By Menu</h1>
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

                        {/* Popular Tag */}
                        <div className='w-full lg:w-[423px] mt-10 h-auto border-[1px] border-gray-400'>
                            <div className='w-full lg:w-[325px] h-[275px] py-10 ml-10 mt-[-40px] cursor-pointer'>
                                <Image 
                                    src='/Popular Tag.png'
                                    alt=''
                                    width={324}
                                    height={167}
                                />
                            </div>
                        </div>

                         {/* icons Tag */}
                        <div className="bg-[#4F4F4F] w-full mt-10 lg:pl-24 lg:pr-24 lg:mt-20 py-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:gap-4">
                         <Link href="https://www.facebook.com/">
                         <Image src="/Sociali icon.png" width={80} height={80} alt="social icons" className="w-[80px] lg:w-[200px]" />
                         </Link> 
                        </div>
                    </div>
                </div>


                
                {/* pagination */}
                <ul className="flex space-x-5 justify-center font-[sans-serif] mt-16 mb-16">
      <li className="flex items-center justify-center shrink-0 bg-gray-100 w-9 h-9 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#FF9F0D]" viewBox="0 0 55.753 55.753">
          <path
            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
            data-original="#000000" />
        </svg>
      </li>
      <li
        className="flex items-center justify-center shrink-0  text-black border hover:border-[#FF9F0D]  cursor-pointer text-base font-bold px-[13px] h-9 rounded-md">
        1
      </li>
      <li
        className="flex items-center justify-center shrink-0 border bg-[#FF9F0D] hover:border-[#FF9F0D] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
        2
      </li>
      <li
        className="flex items-center justify-center shrink-0 border hover:border-[#FF9F0D] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
        3
      </li>
      <li
        className="flex items-center justify-center shrink-0 border hover:border-[#FF9F0D] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-md">
        4
      </li>
      <li className="flex items-center justify-center shrink-0 border hover:border-[#FF9F0D] cursor-pointer w-9 h-9 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-400 rotate-180" viewBox="0 0 55.753 55.753">
          <path
            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
            data-original="#000000" />
        </svg>
      </li>
    </ul>
            </div>
        </>
    );
}
