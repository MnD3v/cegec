/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const About = () => {
    


    return (
        <section id='a-propos' className='flex justify-center relative overflow-hidden my-12'>
            <div className='max grid md:grid-cols-2 gap-9 p-3 relative overflow-hidden'>
                <div className='flex gap-6 items-center justify-center'>
                 

                    <motion.img src="/images/about-2.png" alt=""
                        variants={Animations.scale({ duration: 0.9, delay: .6 })}
                        initial="hidden"
                        whileHover={{ scale: 1.10, }}

                        whileInView="show"
                        viewport={{ once: true }}

                        className='w-1/2 h-5/6 object-cover ' />
                    <div className=' flex flex-col gap-6 h-full overflow-hidden'>
                        <motion.img src="/images/about-1.png" alt=""
                            variants={Animations.bottomToTop({ duration: 0.3, inverse: true, delay: .6 })}
                            initial="hidden"
                            whileInView="show"
                            whileHover={{ scale: 1.10, }}

                            viewport={{ once: true }}
                            className=' w-full h-full object-cover ' />
                        <motion.img src="/images/about-3.png" alt=""
                            whileHover={{ scale: 1.10, }}


                            variants={Animations.bottomToTop({ duration: 0.6, delay: .6 })}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}

                            className=' w-full h-full object-cover transition-all ease-linear duration-500' />
                    </div>





                </div>

                <div>
                    <div className='flex items-center gap-2 relative overflow-hidden'>

                        <motion.h2
                            variants={Animations.scale({ duration: 0.3, })}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className='font-semibold text-e_orange font-rubik'>BIENVENUE CHEZ CEGEC, Consortium des Entreprises de Génie Civil</motion.h2>
                    </div>

                    <motion.p
                        variants={Animations.scale({ duration: 0.3, })}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className='font-rubik text-3xl font-bold uppercase'
                    > Experts dans le domaine de la construction et du génie civil.
                    </motion.p>

                    <motion.p
                        variants={Animations.scale({ duration: 0.3, })}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                      Nous concevons et réalisons des infrastructures solide et durables à votre goût, alliant expertise technique et innovation. 
                      Du gros œuvre aux finitions, nous assurons la pérennité de vos constructions.

                    </motion.p>


                 <div className='flex justify-center items-center  font-rubik'>
                 <div className=' flex justify-center text-center flex-col'>
                        <p className='text-7xl font-bold'>
                            10+
                        </p>
                        <p>Projets Professionnels realisés</p>
                    </div>
                    <div className='w-1 bg-zinc-400 h-20 mx-7'></div>
                    <div className=' flex justify-center text-center flex-col'>
                        <p className='text-7xl font-bold'>
                           100+
                        </p>
                        <p>Employés dans l'equipe actuel</p>
                    </div>
                 </div>
                 <div className='relative items-center'>
              <a href="#contact" className='inline-block px-6 py-4 w-auto bg-eorange font-rubik font-semibold text-white'>
                Commencer la consultation

              </a>
              <div className='h-6 w-2 bg-white absolute top-4'>

              </div>
            </div>

                </div>
            </div>
        </section>
    )
}

export default About
