"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    
    if (response.status === 200) {
      console.log("Mesaj gönderildi.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-12 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent rounded-full h-80 w-80 z-0 blur-3xl absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      
      <div className="z-10">
        <h5 className="text-3xl font-bold text-white my-2">
          İletişime Geçelim
        </h5>
        <p className="text-[#ADB7BE] mb-6 max-w-md leading-relaxed">
          Şu an yeni fırsatlara ve teknik projelere her zaman açığım. 
          Matematik Mühendisliği veya Backend dünyasıyla ilgili bir sorunuz varsa 
          ya da sadece selam vermek isterseniz, en kısa sürede size dönüş yapmaya çalışacağım!
        </p>
        <div className="socials flex flex-row gap-6">
          <Link href="https://github.com/OSIRAC" target="_blank">
            <FaGithub className="text-white w-8 h-8 hover:text-blue-500 transition-all" />
          </Link>
          <Link href="https://www.linkedin.com/in/omer-sirac-islamoglu/" target="_blank">
            <FaLinkedin className="text-white w-8 h-8 hover:text-blue-500 transition-all" />
          </Link>
        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <div className="bg-emerald-500/10 border border-emerald-500 text-emerald-500 p-4 rounded-lg">
            Mesajınız başarıyla iletildi! En kısa sürede dönüş yapacağım.
          </div>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                E-postanız
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-blue-500 outline-none transition-all"
                placeholder="ornek@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Konu
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-blue-500 outline-none transition-all"
                placeholder="İş teklifi / Tanışma"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mesajınız
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-blue-500 outline-none transition-all"
                placeholder="Mesajınızı buraya yazın..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-lg w-full transition-all shadow-lg shadow-blue-500/20"
            >
              Mesaj Gönder
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;