import Link from "next/link"

// Pseudo data 
type jobSchema = {
  heading:string,
  title:string,
  description:string,
  companyName:string,
  jobPostDate:string,
}
const jobList :jobSchema[] = [
  {
    heading:"Actively Hiring",
    title:"Software Engineer",
    description:"The candidate must have around 0-1 years of web development experience developing web applications on MERN stack.",
    companyName:"Utopiatech",
    jobPostDate:"jun 31",
  },
  {
    heading:"Early Applicant",
    title:"MERN Stack Developer",
    description:"Developing cloud-based web applications, mobile applications for IoT devices ecosystem Active involvement in designing software architecture, communication protocols database Schema UI/UX designing and Unit Testing.",
    companyName:"Save As Web.com",
    jobPostDate:"jul 1",
  },
  {
    heading:"Early Applicant",
    title:"QA Testing Engineer,software test engineer",
    description:"Good Knowledge in both Manual Testing and Automation Testing,Strong experience in writing test scenarios and test cases Strong knowledge on Selenium, Appium, Microsoft SQL and Jmeter Adept in functional testing and reporting defects",
    companyName:"Laxmi Infotech",
    jobPostDate:"jul 2",
  },
  {
    heading:"Actively Hiring",
    title:"Data Analytics Intern (2023 graduates)",
    description:"The Data Team is the lifeline of Ketto. It powers all business verticals with data-backed insights to fuel innovation, helping Ketto bring together thousands of change makers to achieve healthcare-for-all in India.",
    companyName:"Kitto",
    jobPostDate:"jun 25",
  },
]


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

const jobcard = (job:jobSchema)=>{
  return <div className="w-full lg:max-w-full lg:flex  mb-4 ">
    <div className="border-r border-b  border-gray-400  lg:border-gray-400 bg-white rounded-b rounded-tl-lg lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <p className="text-md text-gray-600 flex items-center">
        <svg className='h-8 w-  8 mr-2' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 53 53" id="search"><path d="M10.08 10.08a1 1 0 0 0 1.41 1.41 10.43 10.43 0 0 1 14.73 0 1 1 0 0 0 .71.3 1 1 0 0 0 .7-1.71 12.42 12.42 0 0 0-17.55 0Z"></path><path d="M36.22 29.75a1 1 0 0 0-1.41 0L33 31.58l-1.89-1.9A16.35 16.35 0 0 0 7.29 7.29a16.35 16.35 0 0 0 22.39 23.8l1.9 1.9-1.83 1.82a1 1 0 0 0 0 1.41l14 14a1 1 0 0 0 1.41 0l5.06-5.06a1 1 0 0 0 0-1.41ZM8.71 29A14.35 14.35 0 0 1 29 8.71 14.35 14.35 0 0 1 8.71 29Zm35.73 19.09L31.88 35.52l3.64-3.64 12.57 12.56Z"></path></svg>
          {job.heading}
        </p>
        <div className="text-gray-900 mt-2 font-bold text-xl mb-2">{job.title}</div>
        <p className="text-gray-700 text-base">{job.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{job.companyName}</p>
          <p className="text-gray-600">{job.jobPostDate}</p>
        </div>
        <Link href={"apply"} className="self-center">

        <button className="rounded px-4 py-2 text-xs bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">Apply</button>
        </Link>
      </div>
    </div>
  </div>
}

export default function Jobs() {
  return (
    <main className={`min-h-screen `}>
      { navbar()}
      <div className="p-4 lg:p-2">
        <div className='container  max-w-2xl px-6 py-10 bg-blue-50 rounded-2xl'>
          {jobList.map((job)=>jobcard(job)) }
        </div>
      </div>
      
    </main>
  )
}
