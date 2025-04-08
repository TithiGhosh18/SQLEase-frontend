import React from "react";
import FadeInFromLeft from "../FadeInFromLeft";
const Contact = () => {
  return (
    <FadeInFromLeft>
    <div id="contact" className="min-h-screen flex justify-center items-center p-10 bg-[radial-gradient(900px_circle_at_50%_800px,#244970,transparent)] md:mt-40 ">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-gray-100 text-2xl font-bold">Contact Us</h2>
          <p className="text-gray-600">
            Fill out the form and our team will reach out to you within 1–2
            business days.
          </p>
          <p className="text-gray-600">
            Click the button below to schedule a meeting with us.
          </p>
          <button className=" cursor-pointer bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out">
            Talk with us
          </button>

          <hr className="my-4" />

          <div>
            <h4 className=" text-gray-300 font-semibold text-lg">Email</h4>
            <p className="text-gray-600">support@SQLEase.com</p>
          </div>

          <div>
            <h4 className="text-gray-300 font-semibold text-lg">Social</h4>
            <div className="flex gap-3 mt-2">
              {/* Replace with actual social icons if needed */}
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <div className="w-8 h-8 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              className=" text-gray-300 w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your email"
              className="text-gray-300 w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <input
            type="text"
            placeholder="Subject (optional)"
            className="text-gray-300 w-full p-3 border border-gray-300 rounded"
          />

          <textarea
            rows="6"
            placeholder="Enter Your Message . . ."
            className="text-gray-300 w-full p-3 border border-gray-300 rounded resize-none"
          ></textarea>

          <button
            type="submit"
            className="cursor-pointer bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </FadeInFromLeft>
  );
};

export default Contact;
