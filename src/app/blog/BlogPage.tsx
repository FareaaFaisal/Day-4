'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function BlogPage() {
    const router = useRouter();
    const [page, setPage] = useState(1); // Start on page 1 by default

    // When the page loads or the page changes in the URL, update the page state
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const pageFromURL = queryParams.get('page');
        if (pageFromURL) {
            setPage(parseInt(pageFromURL, 10));
        }
    }, []);

    // Handle page change when a user clicks on a page number
    const handlePageChange = (newPage:any) => {
        setPage(newPage);
        // Push the new page number into the URL
        router.push(`/blog?page=${newPage}`);
    };

    return (
        <>
            <div className="min-w-full overflow-hidden">
                {/* Header */}
                <div className="relative font-[sans-serif] pt-20 before:absolute lg:h-full h-[300px] before:w-full before:h-full before:inset-0 bg-black before:z-[-10]">
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
    <h2 className="text-white md:text-5xl text-3xl font-bold mb-8 text-center 
      lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
      absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      z-10 lg:z-50">
      Blog List
    </h2>

    <div className="flex items-center space-x-2 lg:mt-36 mt-0 text-white">
      <Link href="/" className="text-white">Home</Link>
      <span className="text-white"> &gt; </span>
      <Link href="/about" className="text-orange-500">Blog</Link>
    </div>
  </div>
</div>

                {/* Page content */}
                <div className="w-full lg:w-[1920px] h-auto bg-white flex flex-col lg:flex-row">
                    <div className="w-full lg:w-[872px] h-auto pt-[130px] mx-4 lg:mx-[120px] bg-white ml-[-10px] lg:mt-0 mt-[-100px]">
                        {/* Post 1 */}
                        <Image 
                            src='/blog1.svg'
                            alt='blog 1 pic'
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
                        <div className="pl-[20px]">
                            <h1 className="font-bold lg:text-4xl  text-2xl w-full lg:w-[504px] h-40 md:h-28 lg:h-8 bg-white py-[46px] text-[#333333]">
                                10 Reasons To Do A Digital Detox challenge
                            </h1>
                            <p className="w-full lg:w-[647.26px] h-[96px] py-[40px] bg-white lg:mt-0 mt-[-70px] lg:mb-0 mb-10">
                                At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor, sit amet consectetur adipisicing delectus possimus in provident aspernatur ullam oluptas 
                            </p>
                            <Link href={`/pages`}>
                                <button className="w-full lg:w-[172px] h-[52px] rounded-[6px] border-[1px] mt-[50px] md:mt-[30px] lg:mt-[30px] py-[14px] px-[32px] text-[#FF9F0D] border-[#FF9F0D]">
                                    Read More
                                </button>
                            </Link>
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
                            <h1 className='font-bold lg:text-4xl  text-2xl w-full lg:w-[504px] h-40 md:h-28 lg:h-8 bg-white py-[46px] text-[#333333]'>
                                Traditional Soft Pretzels with Sweet Beer Cheese</h1>
                            <p className='w-full lg:w-[647.26px] h-[96px] py-[40px] bg-white lg:mt-0 mt-[-70px] lg:mb-0 mb-10'>
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <Link href={`/pages`}>
                                <button className="w-full lg:w-[172px] h-[52px] rounded-[6px] border-[1px] mt-[50px] md:mt-[30px] lg:mt-[30px] py-[14px] px-[32px] text-[#FF9F0D] border-[#FF9F0D]">
                                    Read More
                                </button>
                            </Link>
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
                            <h1 className='font-bold lg:text-4xl  text-xl w-full lg:w-[504px] h-40 md:h-28 lg:h-8 bg-white py-[46px] text-[#333333]'>
                                The Ultimate Hangover Burger: Egg in a Hole Burger</h1>
                            <p className='w-full lg:w-[647.26px] h-[96px] py-[40px] bg-white lg:mt-0 mt-[-70px] lg:mb-0 mb-10'>
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <Link href={`/pages`}>
                                <button className="w-full lg:w-[172px] h-[52px] rounded-[6px] border-[1px] mt-[50px] md:mt-[30px] lg:mt-[30px] py-[14px] px-[32px] text-[#FF9F0D] border-[#FF9F0D]">
                                    Read More
                                </button>
                            </Link>
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
                            <h1 className='font-bold lg:text-4xl  text-2xl w-full lg:w-[504px] h-40 md:h-28 lg:h-8 bg-white py-[46px] text-[#333333]'>
                                My Favorite Easy Black Pizza Toast Recipe</h1>
                            <p className='w-full lg:w-[647.26px] h-[96px] py-[40px] bg-white lg:mt-0 mt-[-70px] lg:mb-0 mb-10'>
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <Link href={`/pages`}>
                                <button className="w-full lg:w-[172px] h-[52px] rounded-[6px] border-[1px] mt-[50px] md:mt-[30px] lg:mt-[30px] py-[14px] px-[32px] text-[#FF9F0D] border-[#FF9F0D]">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    
                    </div>

                    <div className='lg:ml-[-240px] lg:w-[424px] mt-[130px] h-auto ml-2'>
                        <div className='flex justify-center mt-8  lg:w-[421.82px] w-[300px] border-1 h-[70px]'>
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
                        <div className='justify-center mt-8 w-full lg:w-[423px] h-auto border-[1px] border-gray-400 hidden md:hidden lg:block'>
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

                {/* Pagination */}
                <ul className="flex space-x-5 justify-center font-[sans-serif] mt-16 mb-16">
                    {/* Left arrow for previous page */}
                    <li
                        onClick={() => handlePageChange(page - 1)}
                        className={`flex items-center justify-center shrink-0 bg-gray-100 w-9 h-9 rounded-md ${page <= 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-[#FF9F0D]" viewBox="0 0 55.753 55.753">
                            <path
                                d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                            />
                        </svg>
                    </li>

                    {/* Page Numbers */}
                    {[1, 2, 3].map((pageNum) => (
                        <li
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`flex items-center justify-center shrink-0 text-black border cursor-pointer text-base font-bold px-[13px] h-9 rounded-md ${
                                page === pageNum ? 'bg-[#FF9F0D] text-gray-800' : 'bg-gray-100 hover:border-[#FF9F0D]'
                            }`}
                        >
                            {pageNum}
                        </li>
                    ))}

                    {/* Right arrow for next page */}
                    <li
                        onClick={() => handlePageChange(page + 1)}
                        className="flex items-center justify-center shrink-0 bg-gray-100 w-9 h-9 rounded-md cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-400 rotate-180" viewBox="0 0 55.753 55.753">
                            <path
                                d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                            />
                        </svg>
                    </li>
                </ul>
            </div>
        </>
    );
}
