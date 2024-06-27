import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#111827]">
        <div className="container w-[90%] mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full py-10 px-4 lg:w-7/12">
              <div className="flex py-5 items-center lg:-mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4">
                  <div className="w-full  border-2 rounded-2xl shadow-2xl  animate-slide-left overflow-hidden">
                    <div
                      className="image-container"
                      
                    >
                      <img src="https://i.ibb.co/NZzRytf/virus1.jpg" className="w-full h-full" alt="" />
                    </div>
                  </div>
                  <div className="w-full  mt-3 border-2 rounded-2xl shadow-2xl  animate-slide-left overflow-hidden">
                    <div
                      className="image-container"
                      
                    >
                      <img src="https://i.ibb.co/kHjR5R1/virus2.jpg" className="w-full h-full" alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4">
                  <div className="w-full  mt-3 border-2 rounded-2xl relative shadow-2xl overflow-hidden  animate-slide-left">
                    <div
                      className="image-container"
                    >
                      <img src="https://i.ibb.co/KKz47nQ/virus3.jpg" className="w-full h-full" alt="" />
                    </div>
                    <span className="animate-bounce absolute right-[10px] bottom-[10px] z-10">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Your circles SVG */}
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 animate-slide-right">
              <div className="mt-10 lg:mt-0">
                <span className="block text-lg font-semibold dark:text-white text-primary">
                  Why Choose Us
                </span>
                <h2 className="text-3xl mt-2 font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-5 text-xl mt-5 dark:text-white text-body-color dark:text-dark-6">
                  Welcome to Rakshak, your number one source for all things
                  antivirus. We're dedicated to giving you the very best of
                  security solutions, with a focus on dependability, customer
                  service, and uniqueness.
                </p>
                <p className="mb-8 text-xl dark:text-white text-body-color dark:text-dark-6">
                  Rakshak has come a long way from its beginnings in a home
                  office. When we first started out, our passion for providing
                  the best security solutions drove him to conduct intense
                  research, quit his day job, and gave him the impetus to turn
                  hard work and inspiration into a booming online store. We now
                  serve customers all over the india and are thrilled to be a
                  part of the quirky, eco-friendly, fair trade wing of the
                  security industry.
                </p>
                <NavLink
                  to="/rakshak/"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-black dark:text-white rounded-md border-2 dark:border-white px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
