"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Yetenekler",
    id: "skills",
    content: (
      <ul className="list-none pl-2 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
        {[
          "C / Data Structures & Algorithms",
          "C# / .NET Core",
          "SQL / ADO.NET / EF Core",
          "Microservices / gRPC",
          "RabbitMQ / Docker",
          "React / Next.js",
        ].map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            {/* Nokta boyutunu Eğitim ile aynı (w-2 h-2) yaptık */}
            <span className="w-2 h-2 rounded-full bg-white shrink-0"></span>
            {/* Fontu bold yaparak Eğitim başlığıyla eşitledik */}
            <span className="text-white text-sm md:text-base font-bold tracking-tight">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Eğitim",
    id: "education",
    content: (
      <ul className="list-none pl-2">
        <li className="mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="font-bold text-white">Yıldız Teknik Üniversitesi</span>
          </div>
          <p className="text-xs text-slate-400 ml-4">Matematik Mühendisliği (4. Sınıf)</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Deneyim",
    id: "experience",
    content: (
      <ul className="list-none pl-2">
        {/* Şu anki İşin */}
        <li className="mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="font-bold text-white">Architecht (Kuveyt Türk)</span>
          </div>
          <p className="text-xs text-slate-400 ml-4">Part-time Software Developer</p>
        </li>

        {/* Stajlar */}
        <li className="mb-4">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="font-semibold">Emlak Katılım Bankası</span>
          </div>
          <p className="text-xs text-slate-500 ml-4">IT Intern</p>
        </li>

        <li className="mb-4">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="font-semibold">Turkuvaz Medya Grubu</span>
          </div>
          <p className="text-xs text-slate-500 ml-4">IT Intern</p>
        </li>

        {/* Eğitim / Gelişim */}
        <li>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="font-semibold">42 Türkiye</span>
          </div>
          <p className="text-xs text-slate-500 ml-4 italic">Peer-to-Peer Yazılım Eğitimi</p>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white scroll-mt-20" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="About Me"
            className="hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Hakkımda</h2>
          <p className="text-base lg:text-lg text-slate-400 leading-relaxed">
            <span className="text-white font-semibold">Matematik Mühendisliği</span>'nin getirdiği analitik temeli, backend dünyasının modern teknolojileriyle harmanlıyorum. Özellikle
            .NET Core ve mikroservis mimarileri üzerine kendimi geliştirirken, şu an
            <span className="text-blue-400 font-medium"> Architecht</span> bünyesinde finansal teknolojiler üzerine çalışarak profesyonel tecrübe ediniyorum.
          </p>
          <div className="flex flex-row justify-start mt-8 gap-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Yetenekler
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Eğitim
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Deneyim
            </TabButton>
          </div>
          <div className="mt-8 min-h-[140px] animate-in fade-in duration-500">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;