import React from "react";
import {useEffect} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { any, string, z } from "zod";
import Link from 'next/link'

const locations = ["Mumbai", "Pune", "Hyderabad", "Delhi" , "Noida"] as const;

const userSchema = z
  .object({
    name: 
      z.string()
      .min(1, { message: "Name is required" })
      .max(36, { message: "Name should be less than 36 characters" }),
    email: z
      .string()
      .min(1, { message: "Email required" })
      .email({ message: "Enter valid email" }),
    location:z.enum(locations),
    expectedCTC:
      z.string()
      .min(1, { message: "CTC is required" })
      .refine((val)=>parseInt(val)!= Number.NaN , {message:"Enter amount in number"}),
    coverLetter:
    z.string()
    .min(100, { message: "Should be 100-1000 characters" })
    .max(1000, { message: "Should be 100-1000 characters" }),
    resume:
      z.any()
      .transform((val:FileList)=>val[0]?.name)
      .refine((val)=>val!=undefined , {message:"choose a file"})
  })
  

// Infer the TS type according to the zod schema.
type UserType = z.infer<typeof userSchema>;


let navbar = ()=>{
  return <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6  lg:sticky top-0">
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
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          For Employers
        </a>
        <Link href={"/"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Home
        </Link>
      </div>

    </div>
  </nav>
}

const showALert = (msg:string)=>{
  return   <p className="text-red-500 text-xs italic block mt-2">{msg}</p>
}
const applicationForm = ()=>{
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
  } = useForm<UserType>({
    mode: "all",
    resolver: zodResolver(userSchema), // Configuration the validation with the zod schema.
  });

  const onSubmit = (user: UserType) => {
    alert("Succesfully Applied")
    console.log("dans onSubmit", user);
    window.location.href = "/"
  };
  useEffect(()=>{
    
  })
  return <div >
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
        onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your name"
          {...register("name")}
        />
        {errors?.name?.message!=undefined?showALert(errors?.name?.message):null}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email id"
          {...register("email")}
        />
        {errors?.email?.message!=undefined?showALert(errors?.email?.message):null}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 mr-6 " htmlFor="ctc">
          Location
        </label>
        <select className="shadow appearance-none border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          {...register("location")}
        >
          <option>Mumbai</option>
          <option>Pune</option>
          <option>Delhi</option>
          <option>Noida</option>
          <option>Hyderabad</option>
        </select>
        {errors?.location?.message!=undefined?showALert(errors?.location?.message):null}

      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ctc">
          Expected CTC
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ctc" type="number" placeholder="Enter expected CTC"
          {...register("expectedCTC")}
        />
        {errors?.expectedCTC?.message!=undefined?showALert(errors?.expectedCTC?.message):null}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cover_letter">
          Cover Letter
        </label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cover_letter"  placeholder=""
          {...register("coverLetter")}
        />
        {errors?.coverLetter?.message!=undefined?showALert(errors?.coverLetter?.message):null}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
          Uplaod Resume
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="resume" type="file" accept="application/pdf"
          {...register("resume")} 
        />
        {errors?.resume?.message!=undefined?showALert(errors?.resume?.message):null}
      </div>
      <div className="flex items-center justify-start">
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"  value="Send Application"/>
      </div>
    </form>
  </div>
}

export default function Apply() {
  return (
    <main className={`min-h-screen `}>
      { navbar()}
      <div className="p-4 lg:p-2">
        <div className='container mx-auto max-w-2xl px-6 py-10 bg-blue-50 rounded-2xl'>
        {applicationForm()}
        </div>
      </div>
    </main>
  )
}
