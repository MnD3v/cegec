"use client"
import Presentation from "./components/presentation";
import Contact from "./components/contact";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Animations from "./components/utils/item";
import PourquoiNous from "./components/pourquoi-nous";
import Services from "./components/services";
import About from "./components/about";
import Projets from "./components/projets";
import Chiffres from "./components/chiffres";

export default function Home() {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {

    setIsInView(false)

    return () => {

    }
  }, [])
  return (
    <div
    className="font-syne bg-green-50"
    >
      {
        isInView && <div className='fixed flex flex-col items-center justify-center bg-white h-full w-full'>
       
          <img src="/logo.png" alt="" className="h-14 md:h-24 my-3" />
          <div className='loader h-9 w-9 md:h-16 md:w-16'></div>

        </div>}
      <motion.div
        variants={Animations.opacity({ duration: 0.9 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}

        className="">


<Presentation></Presentation>
          <About></About>
          <Services></Services>

          <Projets></Projets>
          <Chiffres></Chiffres>
          <PourquoiNous></PourquoiNous>
          {/* <Equipe></Equipe> */}
          <Contact></Contact>
      </motion.div>
    </div>

  );
}
