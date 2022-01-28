import React from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";


function AddBlog() {

    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
        console.log(data);
        axios.post('https://afternoon-atoll-34406.herokuapp.com/blogs', data)
        .then(res => {
            if( res.data.insertedId){
                alert('Insert Successfully');
                reset();
            }
        })
    };
  
    return (
        <>
            <div className="flex items-center justify-center" >
                <div className="xl:w-10/12 w-full px-8">
                    <div className="bg-gray-100 py-12 flex flex-wrap items-center justify-center">
                        <div className="w-52 h-16 relative md:mt-0 mt-4">
                            <img src="https://i.ibb.co/DwNs7zG/Steps.png" alt="step1" className="w-full h-full" />
                            <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                                <p className="w-full text-sm font-medium leading-4 text-white">Blog Info</p>
                                <p className="w-full text-xs mt-1 leading-none text-white">description of the blog</p>
                            </div>
                        </div>
                        <div className="w-52 h-16 relative md:mt-0 mt-4">
                            <img src="https://i.ibb.co/wNZ4nzy/Steps2.png" alt="step2" className="w-full h-full" />
                            <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                                <p className="w-full text-sm font-medium leading-4 text-indigo-800">Date & Time</p>
                                <p className="w-full text-xs mt-1 leading-none text-indigo-800">Your Hangout Time and date</p>
                            </div>
                        </div>
                    </div>
                    <div className="xl:px-24">
                        <div className="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 9.99999H20C20.2652 9.99999 20.5196 10.1054 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 9.99999 4 9.99999H5V8.99999C5 8.08074 5.18106 7.17049 5.53284 6.32121C5.88463 5.47193 6.40024 4.70026 7.05025 4.05025C7.70026 3.40023 8.47194 2.88462 9.32122 2.53284C10.1705 2.18105 11.0807 1.99999 12 1.99999C12.9193 1.99999 13.8295 2.18105 14.6788 2.53284C15.5281 2.88462 16.2997 3.40023 16.9497 4.05025C17.5998 4.70026 18.1154 5.47193 18.4672 6.32121C18.8189 7.17049 19 8.08074 19 8.99999V9.99999ZM17 9.99999V8.99999C17 7.67391 16.4732 6.40214 15.5355 5.46446C14.5979 4.52678 13.3261 3.99999 12 3.99999C10.6739 3.99999 9.40215 4.52678 8.46447 5.46446C7.52678 6.40214 7 7.67391 7 8.99999V9.99999H17ZM11 14V18H13V14H11Z"
                                            fill="#4B5563"
                                        />
                                    </svg>
                                </div>

                                <p className="text-sm text-gray-800 pl-3">We take privacy issues seriously. You can be sure that your personal data is securely protected.</p>
                            </div>
                            <button className="md:block hidden focus:outline-none focus:ring-2 focus:ring-gray-700 rounded">
                                <svg aria-label="Close this banner" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8337 5.34166L14.6587 4.16666L10.0003 8.825L5.34199 4.16666L4.16699 5.34166L8.82533 10L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 10L15.8337 5.34166Z" fill="#79808F" />
                                </svg>
                            </button>
                        </div>


                        <form >
                            <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                                <div className="w-80">
                                    <div className="flex items-center">
                                        <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Blog Information</h1>
                                    </div>
                                    <p className="mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                                </div>
                                <div>
                                    <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                        <div className="md:w-64">
                                            <label {...register("title", { required: true, maxLength: 20 })} className="text-sm leading-none text-gray-800" id="firstName" >Title</label>
                                            <input type="text"  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName"  />
                                        </div>
                                        <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                            <label className="text-sm leading-none text-gray-800" id="lastName">Sub Title</label>
                                            <input {...register("body")} type="text"  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName"  />
                                        </div>
                                    </div>
                                    <div className="md:flex items-center lg:ml-24 mt-8">
                                        <div className="md:w-64">
                                            <label className="text-sm leading-none text-gray-800" id="emailAddress">Image Url</label>
                                            <input {...register("image")} type="text"  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress"  />
                                        </div>
                                    </div>
                                    <div className="md:flex items-center lg:ml-24 mt-8">
                                        <div className="md:w-64">
                                            <label className="text-sm leading-none text-gray-800" id="emailAddress">Hangout Loation</label>
                                            <input  type="text"  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress"  />
                                        </div>
                                    </div>
                                    <div className="md:flex items-center lg:ml-24 mt-8">
                                        <div className="md:w-64">
                                            <label className="text-sm leading-none text-gray-800" id="emailAddress">Country and City</label>
                                            <input {...register("location")} type="text"  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress"  />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                                <div className="w-80">
                                    <div className="flex items-center">
                                        <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Date and Time</h1>
                                    </div>
                                    <p className="mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                                </div>
                                <div>
                                    <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                        <div className="md:w-64">
                                            <label className="text-sm leading-none text-gray-800" id="password">Day</label>
                                            <input {...register("date")} type="text"  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="password"  />
                                        </div>
                                        <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                            <label className="text-sm leading-none text-gray-800" id="securityCode">Time</label>
                                            <input {...register("time")} type="name"  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="securityCode"  />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <input onSubmit={handleSubmit(onSubmit)} type="submit" />
                        </form>


                    </div>
                </div>
            </div>
        </>
    );
}

export default AddBlog;
