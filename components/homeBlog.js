import Image from "next/image"
import Link from "next/link"
import travail1 from "../public/images/1.jpg"
function HomeBlog({blog}){

    const {title} = blog;

    return(
        <>
        
         
             {/* ====card1==== */}
             <div className=" w-80 h-full bg-white drop-shadow-md">
                 <Image className="w-full h-20" alt="travelai" src={travail1}/>
                 <div className="p-2 grid gap-y-6">
                     <div className="grid grid-cols-6">
                         <div className="col-span-2 mx-auto my-auto text-indigo-700">
                             <h3 className="text-center font-semibold">THU <br/>28</h3>
                         </div>
                         <div className="col-span-4">
                             <h2 className="font-bold text-xl">The cute tiger</h2>
                             <p className="text-sm">{title}</p>
                         </div>
                     </div>
                     {/* ======icon wiht info==== */}
                     <div className="grid gap-y-3">
                         {/* ==calander icon==== */}
                        <div className="grid grid-cols-6">
                            <div className="col-span-2 mx-auto my-auto bg-indigo-200 p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-700 font-semibold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="col-span-4 -mx-4">
                                <h2 className="font-semibold text-sm">Sat,May 25, 2021</h2>
                                <p className="text-xs text-slate-400">10 AM to 6 PM</p>
                            </div>
                        </div>
                        {/* ====location icon=== */}
                        <div className="grid grid-cols-6">
                            <div className="col-span-2 mx-auto my-auto bg-indigo-200 p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-700 font-semibold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="col-span-4 -mx-4">
                                <h2 className="font-semibold text-sm">Sundarbans</h2>
                                <p className="text-xs text-slate-400">Khulna, Bangladesh</p>
                            </div>
                        </div>
                     </div>
                     <div className="grid grid-col-6 gap-x-6 text-sm ml-8 text-indigo-700">
                         <Link href="/blog">
                            <a>View More</a>
                         </Link>
                     </div>
                 </div>
             </div>
         
        </>
    )
}

export default HomeBlog