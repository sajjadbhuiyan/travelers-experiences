import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import logo from '../public/images/logo.svg'

function NavLink({to, children}) {
    return <Link href={to} className={`mx-4`}>
        {children}
     </Link>
}
function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
                
            </div>
            <div className="flex flex-col ml-4 items-center gap-y-8 my-8">
                <Link className="text-xl font-medium my-4" href="/blog" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    <a>BLOG</a>
                </Link>
                <Link className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    <a>ABOUT</a>
                </Link>
                <Link className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    <a>CONTACT</a>
                </Link>
            </div>  
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <Link className="text-2xl font-semibold" href="/" passHref><Image src={logo} alt='logo'></Image></Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex gap-4 justify-center items-center">
                    <Link href="/blog">
                        <a>BLOG</a>
                    </Link>
                    <Link href="/about">
                        <a>ABOUT</a>
                    </Link>
                    <Link href="/contact">
                        <a>CONTACT</a>
                    </Link>
                    <Link href="/contact">
                        <a className='px-8 py-2 bg-gray-800 text-white rounded-lg'>login</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}