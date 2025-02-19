
"use client"
import Image from "next/image";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";

export default function Home() {
  // const images = [
  //   "/images/2010.png",
  //   "/images/2013.png",
  //   "/images/2014.png",
  // ];
  const images = [
    "/images/evangelist.jpg",
    "/images/motivation.jpg",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
<main className=" bg-white items-center sm:items-start">
  <section className="w-screen h-screen">
    <ImagesSlider className="w-full h-full" images={images}>
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-50 flex flex-col justify-center items-center"
      >
        {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Full Gospel Tabernacle
        </motion.p> */}
        {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-12">
          <span>Join now →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>
  </section>
  <section className="w-screen h-screen bg-[#868784]" ></section>
</main>

  );
}
