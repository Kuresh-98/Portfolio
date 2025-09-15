import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "9eb1663c-c67e-48f0-a74d-bdbfe4986bb8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);  
      setResult(`❌ ${data.message}`);
    }
  };

  return (
    <div
      id="contact"
      className='w-full px-[6%] md:px-[10%] lg:px-[14%] py-28 scroll-mt-20 relative overflow-hidden bg-white dark:bg-transparent'
      style={{backgroundColor:'#ffffff'}}
    >
      {/* Dark mode decorative layers only */}
      <div className='absolute inset-0 pointer-events-none hidden dark:block select-none bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] opacity-25'></div>
      <div className='absolute inset-0 pointer-events-none hidden dark:block bg-gradient-to-b from-gray-300/60 via-gray-300/50 to-gray-200/70 backdrop-blur-[2px]'></div>
      <div className='absolute inset-0 pointer-events-none hidden dark:block mix-blend-normal dark:bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.6),rgba(255,255,255,0)_65%)]'></div>
      <div className='relative max-w-6xl mx-auto'>
  <h3 className="text-center mb-3 text-sm font-ovo uppercase tracking-[0.35em] text-indigo-600 dark:text-indigo-700">
        Connect With Me
      </h3>
  <h2 className="text-center text-4xl sm:text-5xl font-ovo font-semibold mb-10 text-gray-900 dark:text-gray-900">
        Get in touch
      </h2>
  <p className="text-center max-w-2xl mx-auto mt-2 mb-12 font-outfit text-[15px] sm:text-base text-gray-700 dark:text-gray-700 leading-relaxed">
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </p>

      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
    <div className="flex flex-col sm:flex-row gap-6 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
  className="flex-1 px-4 py-3 outline-none rounded-md bg-white/70 dark:bg-white/60 border border-gray-300 dark:border-gray-400 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 backdrop-blur-sm text-gray-800 dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
  className="flex-1 px-4 py-3 outline-none rounded-md bg-white/70 dark:bg-white/60 border border-gray-300 dark:border-gray-400 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 backdrop-blur-sm text-gray-800 dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 transition"
          />
        </div>

        <textarea
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full px-4 py-4 outline-none rounded-md bg-white/70 dark:bg-white/60 border border-gray-300 dark:border-gray-400 focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 backdrop-blur-sm text-gray-800 dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 mb-6 transition"
        ></textarea>

        <button
          type="submit"
          className="group relative py-3 px-10 w-max flex items-center justify-center gap-2 overflow-hidden rounded-full mx-auto font-medium tracking-wide text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-500 shadow-md shadow-indigo-600/30 dark:shadow-gray-500/40 transition"
        >
          <span className="relative z-10 flex items-center gap-2">Submit now <Image src={assets.right_arrow_white} alt="arrow" className="w-4" /></span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.25),transparent_70%)]" />
        </button>

        <p className="mt-4 text-center text-sm text-green-700 dark:text-green-400 font-medium">
          {result}
        </p>
      </form>
      </div>
  </div>
  );
};

export default Contact;
