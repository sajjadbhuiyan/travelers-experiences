import Image from "next/image";
import react, { useState } from "react";
const Banner = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div>
            <section>
            <div className="w-full relative pb-10 px-6 xl:px-0">
                
                <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
                    <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <Image  role="img" aria-label="people smiling" className="mx-auto"
                         src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png"
                         width='700'
                         height='600'
                        alt="people smiling"/>
                    </div>
                    <div  role="contentinfo"  className="w-full lg:w-1/2 h-full">
                        <p  className="text-indigo-700 uppercase text-2xl mb-4">Qusique Tincidun sapien</p>
                        <h1  className="text-indigo-700 text-4xl lg:text-6xl font-black mb-8">All natural ingredients</h1>
                        <p  className="text-gray-800 font-regular mb-8">{`COMBINING SCIENCE WITH BEAUTY.
                         L'Oreal Paris offerincare products is developed and rigorously tested with leading scientists. Indulge yourself in a 
                        luxurious and sensorial skincare experience. Cutting-edge innovations, proven by Science.`}</p>
                    </div>
                </div>
            </div>
        </section>

            <style>
                {`
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }`}
            </style>
        </div>
    );
};
export default Banner;
