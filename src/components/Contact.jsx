import React from "react";
import FadeInFromLeft from "../FadeInFromLeft";
import emailjs from 'emailjs-com';
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    // Send email using EmailJS service
    emailjs.sendForm('service_48kuoyj', 'template_b0egtxo', e.target, 'wldTTH_y6yM36HJ3G') // 
      .then((result) => {
        console.log('Email Sent:', result.text);
        alert('Your message has been sent!');
        e.target.reset(); // Clear the form after successful send
      }, (error) => {
        console.log('Error:', error.text);
        alert('There was an error sending your message, please try again.');
      });
  };

  return (
    <FadeInFromLeft>
      <div id="contact" className="min-h-screen flex justify-center items-center p-10 bg-[radial-gradient(900px_circle_at_50%_800px,#244970,transparent)] md:mt-40">
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
            <button
              onClick={() => window.location.href = "mailto:SQLEase@gmail.com"}
              className="cursor-pointer bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out">
              Talk with us
            </button>

            <hr className="my-4" />

            <div>
              <h4 className="text-gray-300 font-semibold text-lg">Email</h4>
              <p className="text-gray-600">support@SQLEase.com</p>
            </div>

            <div>

              <div className="flex gap-3 mt-2">
                <div>
                  <h4 className="text-gray-300 font-semibold text-lg">Social</h4>
                  <div className="flex gap-4 mt-2">
                    {/* GitHub */}
                    <a
                      href="https://github.com/TithiGhosh18/SQLEase"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="28"
                        height="28"
                      >
                        <path d="M12 0C5.37 0 0 5.38 0 12a12 12 0 008.21 11.43c.6.1.82-.26.82-.58v-2.2c-3.34.73-4-1.64-4-1.64a3.14 3.14 0 00-1.31-1.73c-1.08-.74.08-.73.08-.73a2.5 2.5 0 011.82 1.22 2.57 2.57 0 003.5 1 2.59 2.59 0 01.76-1.62c-2.67-.31-5.47-1.33-5.47-5.9a4.63 4.63 0 011.23-3.22 4.3 4.3 0 01.12-3.17s1-.32 3.3 1.23a11.4 11.4 0 016 0c2.28-1.55 3.28-1.23 3.28-1.23a4.3 4.3 0 01.12 3.17 4.63 4.63 0 011.23 3.22c0 4.59-2.8 5.59-5.48 5.89a2.9 2.9 0 01.83 2.24v3.32c0 .32.22.69.83.58A12 12 0 0024 12c0-6.62-5.38-12-12-12z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="28"
                        height="28"
                      >
                        <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.001 2.5 2.5 0 01.01-5.001zM2.4 9h5.18V21H2.4V9zM9.64 9h4.96v1.71h.07a5.44 5.44 0 014.89-2.69c5.23 0 6.2 3.44 6.2 7.92V21h-5.2v-6.6c0-1.58-.03-3.6-2.2-3.6s-2.54 1.72-2.54 3.49V21H9.64V9z" />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="28"
                        height="28"
                      >
                        <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.94.25 2.39.41a4.92 4.92 0 011.71 1.1 4.92 4.92 0 011.1 1.71c.16.45.354 1.22.41 2.39.058 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.25 1.94-.41 2.39a4.92 4.92 0 01-1.1 1.71 4.92 4.92 0 01-1.71 1.1c-.45.16-1.22.354-2.39.41-1.27.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.94-.25-2.39-.41a4.92 4.92 0 01-1.71-1.1 4.92 4.92 0 01-1.1-1.71c-.16-.45-.354-1.22-.41-2.39C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.25-1.94.41-2.39a4.92 4.92 0 011.1-1.71 4.92 4.92 0 011.71-1.1c.45-.16 1.22-.354 2.39-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.765.128 4.648.356 3.712.712a7.07 7.07 0 00-2.56 1.63A7.07 7.07 0 00.712 4.912c-.356.936-.584 2.053-.642 3.34C.012 8.668 0 9.072 0 12s.012 3.332.07 4.612c.058 1.287.286 2.404.642 3.34a7.07 7.07 0 001.63 2.56 7.07 7.07 0 002.56 1.63c.936.356 2.053.584 3.34.642 1.28.058 1.684.07 4.612.07s3.332-.012 4.612-.07c1.287-.058 2.404-.286 3.34-.642a7.07 7.07 0 002.56-1.63 7.07 7.07 0 001.63-2.56c.356-.936.584-2.053.642-3.34.058-1.28.07-1.684.07-4.612s-.012-3.332-.07-4.612c-.058-1.287-.286-2.404-.642-3.34a7.07 7.07 0 00-1.63-2.56 7.07 7.07 0 00-2.56-1.63c-.936-.356-2.053-.584-3.34-.642C15.332.012 14.928 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.844a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <form className="space-y-4" onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
                className="text-gray-300 w-full p-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                required
                className="text-gray-300 w-full p-3 border border-gray-300 rounded"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject (optional)"
              className="text-gray-300 w-full p-3 border border-gray-300 rounded"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Enter Your Message . . ."
              required
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
