"use client";
import React, { useState } from "react";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCheck = () => {
    const val = inputValue.toLowerCase().trim();
    if (val === "") return;
    if (val === "pi" || val === "π" || val === "3.14") {
      setIsCorrect(true);
      setErrorMsg("");
    } else {
      setErrorMsg("1 Matematikçi üzgün: Tekrar dene! 🤓");
    }
  };

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-[#121212]">
      <div className="container p-12 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className={`text-xl md:text-2xl font-serif transition-all duration-500 ${isCorrect ? "text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" : "text-white"}`}>
            <span>e</span>
            <sup className="italic text-white-400">i · θ</sup>
            <span> + 1 = 0</span>
          </div>

          {!isCorrect ? (
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="θ = ?"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      setErrorMsg("");
                    }}
                    className="bg-[#18191E] border border-[#33353F] text-xs rounded-lg p-2 w-24 outline-none focus:border-blue-500 transition-all"
                  />
                  <p className="absolute top-full mt-1 left-0 text-xs text-red-400 drop-shadow-[0_0_6px_rgba(248,113,113,0.8)] whitespace-nowrap">
                    {errorMsg || ""}
                  </p>
                </div>
                <button
                  onClick={handleCheck}
                  className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg font-bold transition-all"
                >
                  Cevapla
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-bounce text-emerald-400 font-mono text-sm">
              ✓ DOĞRULANDI: θ = π
            </div>
          )}
        </div>

        <p className="text-slate-600 text-sm italic">
          © 2026 Ömer Sirac İslamoğlu. Tüm hakları bir integral içinde saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;