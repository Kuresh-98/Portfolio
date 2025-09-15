import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const sideMenuRef = useRef()

  useEffect(() => {
    const onScroll = () => {
      setIsScroll(window.scrollY > 50)

      const sections = ['top', 'about', 'services', 'work', 'contact']
      let current = 'top'
      sections.forEach((section) => {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = section
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
    }
  }

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  const getLinkClass = (section) => {
    const active = activeSection === section
    if (isDarkMode) {
      return [
        'font-outfit font-medium transition-colors duration-300',
        active ? 'text-white underline decoration-2 underline-offset-4' : 'text-indigo-100',
        'hover:text-white'
      ].join(' ')
    }
    return [
      'font-outfit font-medium transition-colors duration-300',
      active ? 'text-indigo-700 underline decoration-2 underline-offset-4' : 'text-gray-700',
      'hover:text-indigo-700'
    ].join(' ')
  }

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-colors duration-300 ${
          isDarkMode
            ? isScroll
              ? 'bg-gradient-to-r from-indigo-600/90 via-indigo-600/85 to-indigo-500/85 text-white backdrop-blur-md shadow-md border border-indigo-400/20'
              : 'bg-gradient-to-r from-indigo-600/95 via-indigo-600/90 to-indigo-500/90 text-white backdrop-blur-lg shadow-md border border-indigo-300/25'
            : isScroll
            ? 'bg-white/80 backdrop-blur-md text-gray-900 shadow-sm border border-gray-200'
            : 'bg-white text-gray-900'
        } no-flash-nav`}
        data-theme-initial={isDarkMode ? 'dark' : 'light'}
      >
        <p className='font-ovo text-2xl tracking-wider text-[#0449df]'>KURESH</p>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-2.5 transition-all duration-300 ${
          isDarkMode
            ? 'bg-indigo-500/20 border border-indigo-300/20 backdrop-blur-sm'
            : isScroll
            ? 'bg-white/60 backdrop-blur-md border border-gray-200'
            : 'bg-white shadow-sm border border-gray-100'
        }`}>
          <li>
            <a className={getLinkClass('top')} href='#top'>
              Home
            </a>
          </li>
          <li>
            <a className={getLinkClass('about')} href='#about'>
              About me
            </a>
          </li>
          <li>
            <a className={getLinkClass('services')} href='#services'>
              Services
            </a>
          </li>
          <li>
            <a className={getLinkClass('work')} href='#work'>
              My Work
            </a>
          </li>
          <li>
            <a className={getLinkClass('contact')} href='#contact'>
              Contact me
            </a>
          </li>
        </ul>

        <div className='flex items-center gap-4'>
          <button onClick={toggleDarkMode} aria-label='Toggle Dark Mode'>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt='Toggle Dark Mode'
              className='w-6'
            />
          </button>

          <a
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-outfit font-semibold text-sm tracking-wide hover:bg-gray-100 transition'
            href='#contact'
          >
            Contact <Image src={assets.arrow_icon} className='w-3' alt='' />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6' />
          </button>
        </div>

        {/* ------------- mobile menu ------------- */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 ${
            isDarkMode
              ? 'bg-gradient-to-b from-indigo-600 via-indigo-600/95 to-indigo-500 text-white'
              : 'bg-rose-50'
          }`}
        >
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>

          <li>
            <a className={getLinkClass('top')} onClick={closeMenu} href='#top'>
              Home
            </a>
          </li>
          <li>
            <a className={getLinkClass('about')} onClick={closeMenu} href='#about'>
              About me
            </a>
          </li>
          <li>
            <a className={getLinkClass('services')} onClick={closeMenu} href='#services'>
              Services
            </a>
          </li>
          <li>
            <a className={getLinkClass('work')} onClick={closeMenu} href='#work'>
              My Work
            </a>
          </li>
          <li>
            <a className={getLinkClass('contact')} onClick={closeMenu} href='#contact'>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
