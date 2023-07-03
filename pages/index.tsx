import Link from "next/link"

import Image from 'next/image'
import mypic from '../asset/job-search.png'
    
  

let navbar = ()=>{
  return <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <svg className="fill-current h-8 w-8 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="work"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"></path></svg>
      <span className="font-semibold text-xl tracking-tight">Work India</span>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Companies
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Services
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          For Employers
        </a>
      </div>
      <div>
        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ">Login</a>
      </div>
    </div>
  </nav>

}

export default function Home() {
  return (
    <main className={` min-h-screen `} >
      {navbar()}
      <div className="container flex flex-wrap justify-around mx-auto py-12 px-6">
        <Image
          src={mypic}
          alt="Picture of the author"
          className=" flex-none mb-4 w-80 md:basis-1/2"
        />
        <div className="mx-4 my-6 flex flex-col">
          <p className="my-8 text-lg text-blue-600">Unlock Your Potential: <i>India's Gateway to Job Success!</i></p>
          <Link href={"jobs"} className="self-center">
            <button className="rounded-lg px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300">Search Jobs</button>
          </Link>
        </div>
        
      </div>
      
    </main>
  )
}
