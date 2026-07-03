"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Tamamlanan Proje",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Teknoloji & Tool",
    value: "8",
    postfix: "+",
  },
  {
    metric: "Yıl Tecrübe",
    value: "1",
    postfix: "+",
  },
  {
    metric: "YTÜ / Mat. Müh.",
    value: "2026",
    postfix: "\u00A0Mezunu",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353f] border rounded-2xl py-8 px-16 flex flex-col sm:flex-row items-center justify-between bg-[#181818]/50 backdrop-blur-sm">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row items-center">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma={false}
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base font-medium mt-1 uppercase tracking-wider text-xs">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;