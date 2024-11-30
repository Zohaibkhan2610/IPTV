import React from 'react'
import Hero from './Images/Hero1.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
export default function HeroSection() {
    return (
        <>
            <section class="flex md:flex-row flex-col gap-3 bg-gradient-to-l w-full from-[#0D469C] to-[#06BBEB] md:h-[89vh]">
                <div class="md:flex block max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center text-center">
                <div class="lg:mt-0 lg:col-span-5 lg:flex order-1 md:order-2">
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className='w-[100%] h-[80%] border rounder'>
                            <img src={Hero} alt="" className='' />
                        </motion.div>
                    </div>
                    <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                     class="order-2 md:order-1 py-3 mr-auto md:text-start place-self-center text-white opacity-90 lg:col-span-7">
                        <p className='text-3xl font-semibold'>+30,000 Live TV Channels</p>
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white capitalize">Elevate Your Entertainment with International IPTV</h1>
                        <p class="max-w-2xl mb-6 font-normal lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-white">Extensive On-Demand Library: Binge-watch your favorite shows and movies.
                            Seamless Streaming: Enjoy uninterrupted entertainment on any device.
                            Pay-Per-View Events: Catch the biggest sporting events and concerts live.</p>
                       
                        <Link href="#" class="inline-flex items-center justify-center px-5 py-3 text-base bg-sky-300 font-bold hover:bg-[#0D469C] text-center text-white border-[#06BBEB] border-2 duration-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 hover:border-white rounded-full dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            GET FREE TRIAL
                        </Link>
                    </motion.div>
                </div>

            </section>

        </>

    )
}


