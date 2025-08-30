import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
  <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-20">
      
      {/* Profile Image */}
<div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 img-rounded border-2 border-theme shadow-md mx-auto">
  <Image
    src={assets.profile_img}
    alt="Profile"
  width={176}
  height={176}
    className="w-full h-full object-cover object-top"
    priority
  />
</div>



      {/* Intro Text */}
      <div className="mb-4">
  <h3 className="flex items-end justify-center gap-2 text-xl md:text-2xl mb-3 font-ovo text-accent">
          Hi! I'm Kuresh Garbada
          <Image src={assets.hand_icon} alt="Wave" className="w-6 h-6" />
        </h3>

  <h2 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo mb-4 text-muted">
          MERN STACK Web Developer
        </h2>

  <p className="max-w-2xl mx-auto font-outfit text-base sm:text-lg text-muted mb-6">
          I am a Mern Stack developer from India undergoing graduation of B.Tech C.E. at Charusat University.
          I am also doing an internship at FutureInterns.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-outfit">
          <a href="#contact" className="btn-primary">
            Contact Me
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>

          <a href="/resume.pdf" download className="btn-outline">
            My Resume
            <Image src={assets.download_icon} alt="" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
