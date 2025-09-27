import React, { useEffect, } from 'react'
import AppBar from './app_bar'
import { motion } from 'framer-motion';
import Animations from './utils/item';
// import { url } from 'inspector';

const Presentation = () => {

  useEffect(() => {
    // Fonction pour mettre à jour la hauteur
    const updateHeight = () => {
      console.log(window.innerHeight)
    };

    // Définir la hauteur initiale
    updateHeight();

    // Ajouter un écouteur pour gérer les redimensionnements
    window.addEventListener("resize", updateHeight);

    // Nettoyer l'écouteur à la fin
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <div
      style={{ backgroundImage: "url('images/bg-1.jpg')", backgroundSize: "cover" }}
      className={`w-[vw] flex flex-col items-center text-white`}>

      {/* <img src="images/bg-1.jpg" alt="" className='absolute z-0'/> */}
      <div
        style={{}}
        className='bg-black/40  relative w-full'>
        <AppBar></AppBar>
        <div className=' flex justify-center'>
          <div className='max mb-14 w-full'>
            <motion.p
              variants={Animations.leftToRight({ duration: 0.6, delay: .6 })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='text-4xl md:text-7xl font-rubik font-semibold max-w-[700px]'>
              Réalisez le bâtiment de vos rêves avec
            </motion.p>
            <motion.p
              variants={Animations.scale({ duration: 0.6, delay: .6 })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}

              className='font-rubik text-[#96E903] font-black text-5xl md:text-8xl'> CEGEC</motion.p>
            <motion.p
              variants={Animations.scale({ duration: 0.6, delay: .6 })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='w-96 my-9'>
              Nous mettons à votre disposition nos experts dans le domaine de la construction de bâtiment, de l'espace vert et de forage pour vous accompagner a avoir des ouvrages pérenne
            </motion.p>

            <motion.div
              variants={Animations.leftToRight({ duration: 0.6, delay: .6 })}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className='relative items-center'>
              <a href="#contact" className='inline-block px-6 py-4 w-auto bg-eorange font-rubik font-semibold'>
                Commencer la consultation

              </a>
              <div className='h-6 w-2 bg-white absolute top-4'>

              </div>
            </motion.div>

          </div>
        </div>



      </div>









    </div>
  )
}

export default Presentation
