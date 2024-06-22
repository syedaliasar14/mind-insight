"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

export default function WelcomePage() {
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsTitleVisible(true);
    }, 500);
  }, []);

  return (
    <div className="bg-gray-100 w-full h-screen flex flex-col items-center mx-auto justify-center">
      <div className={`text-6xl sm:text-7xl p-4 gradient-text ${isTitleVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-20'} transition-all duration-[2000ms] cursor-default`}>MindInsight</div>
      <div className={`text-xl text-gray-500 self-center pt-10 pb-2 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} transition-all duration-[2000ms] delay-[1500ms] cursor-default`}>I&apos;m glad you&apos;re here</div>
      <Link href={'/chat'} className={`bg-gradient-to-br from-fav-blue1 to-fav-blue2 w-max text-white text-2xl py-2 px-4 rounded-full my-4 mb-10 ${isTitleVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-[2000ms] delay-[3000ms]`}>Get Started</Link>
    </div>
  );
}