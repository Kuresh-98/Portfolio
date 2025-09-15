import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
  <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Prevent theme flash: run before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);var e=document.documentElement;if(d){e.classList.add('dark');e.dataset.theme='dark';}else{e.classList.remove('dark');e.dataset.theme='light';}}catch(e){}}();`
          }}
        />
      </head>
      <body
        className={`${ovo.variable} ${outfit.variable} font-ovo antialiased leading-7 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
