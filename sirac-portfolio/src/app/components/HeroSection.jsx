"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-600">
              Merhaba, Ben{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Ömer Sirac İslamoğlu",
                1000,
                "Matematik Mühendisi",
                1000,
                "Backend Developer",
                1000,
                ".NET Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl leading-relaxed">
            Yıldız Teknik Üniversitesi Matematik Mühendisliği mezunuyum. Finansal teknolojiler alanında (Architecht & Emlak Katılım) edindiğim profesyonel tecrübeyle, modern ve ölçeklenebilir kurumsal yazılım çözümleri üzerine tutkuyla projeler geliştiriyorum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link            
              href="/#contact"
              scroll={false}
              onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 hover:opacity-90 text-white font-bold transition-all"
            >
              İletişime Geç
            </Link>
            <Link
              href="/omer_sirac_islamoglu_cv_web_version.pdf"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 text-white transition-all"
              download="omer_sirac_islamoglu_cv.pdf"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                CV İndir
              </span>
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-8 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative border border-zinc-800 shadow-2xl shadow-blue-500/10">
            <Image
              src="/images/hero-image.png"
              alt="Ömer Sirac İslamoğlu"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;