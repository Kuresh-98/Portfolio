import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Footer = () => {
  return (
  <footer className="pt-10 pb-6 dark:bg-[var(--color-surface)] text-gray-800 dark:text-gray-300">
      <div className="text-center mb-6">
        <p className="text-accent text-3xl font-serif font-semibold mx-auto" style={{ textShadow: '2px 2px 4px #aaa' }}>
          KURESH
        </p>

        <div className="flex items-center justify-center gap-2 mt-2 text-sm">
          <Image src={assets.mail_icon} alt="mail" className="w-5 h-5" />
          <span>kureshgarbada@gmail.com</span>
        </div>
      </div>

  <div className="border-t border-theme mx-[10%] pt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-sm">
            © 2025 <span className="font-medium">Kuresh Garbada</span>. All rights reserved.
          </p>

          <ul className="flex items-center gap-6">
            {[
              {
                name: 'GitHub',
                href: 'https://github.com/Kuresh-Garbada',
              },
              {
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/in/kuresh-garbada-ba75a3326/',
              },
              {
                name: 'Instagram',
                href: 'https://www.instagram.com/kuresh_garbada7',
              },
            ].map((link) => (
              <li key={link.name}>
                <a target="_blank" rel="noopener noreferrer" href={link.href} className="relative group transition duration-300 hover:text-accent">
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
