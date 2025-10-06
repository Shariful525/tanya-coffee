

import { assets } from '@/assets/images';
import Image from 'next/image';

const WorkSummary = () => {
    return (
        <section className="flex flex-col items-center max-w-[470px] mx-auto justify-center bg-gray-100 py-12  space-y-10">
            <div className="w-full">


                <div className="bg-white rounded-2xl p-6 shadow-xl relative text-center">

                    <div className=" w-[200px] h-[200px] flex justify-center items-center mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
                        <Image
                            src={assets.modal}
                            alt="Tanya Hyacinth D' Silva-Fernandez"
                            className="rounded-full"
                        />
                    </div>

                    <div className="mt-[24px]">
                        <p className="text-black-80 text-[24px] font-bold relative px-4">
                            <span className="absolute -top-7 left-0 text-7xl text-spring-green font-serif opacity-80 z-0">“</span>
                            We go because if you are not aiming for <strong className="text-spring-green">GREATNESS</strong>, what is the point?
                            <span className="absolute -bottom-8 right-0 text-7xl text-spring-green font-serif opacity-80 z-0">”</span>
                        </p>
                        <div className=" mx-auto my-4 w-[250px]">
                            <Image src={assets.zigzagLine} alt='' width={250} height={20} />
                        </div>
                        <p className=" text-gray-700 text-xl font-['Dancing_Script',_cursive]">
                            - Tanya Hyacinth D' Silva-Fernandez -
                        </p>
                    </div>
                </div>
            </div>


            <div className="mx-auto w-full text-center space-y-6 mt-12">
                <h2 className="text-2xl font-bold  uppercase ">
                    SOME OF OUR & OUR CLIENTS WORK
                </h2>
                <p className="text-gray-600 text-2xl font-bold">
                    (Teamwork made the dream work!)
                </p>

                <div className="bg-white rounded-2xl shadow-xl py-5">
                    <h3 className="text-xl font-semibold text-primary mb-4">OUR WORK</h3>
                    <div className="w-48 h-48 mx-auto relative">
                        <Image
                            src={assets.successMedal.src}
                            alt="100% Success Rate Medal"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSummary;