import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";

function Contact() {
  return (
    <>
      <div
        name="contact"
        className="flex justify-center items-center p-4 w-full h-[50vh] bg-[#064d50] pl-10"
      >
        <div className="flex flex-col max-w-[600px] w-full">
          <div className="pb-8">
            <p className="text-4xl text-gray-300 font-semibold border-b-2 inline border-blue-500">
              Contact me
            </p>
            <p className="text-gray-300 py-4 flex items-center justify-center gap-3 ">
              <HiArrowNarrowLeft className="ml-3 text-4xl" />
              <p className="text-xl mx-auto">
                Take a look at links on the left to contact me.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div>
        <footer className="bg-[#073335] py-5 flex items-center justify-center ">
          <p className="text-gray-100">
            This website was made by: Dhimitraq Vincani
          </p>
        </footer>
      </div>
    </>
  );
}

export default Contact;
