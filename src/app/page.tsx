"use client";

import Head from 'next/head'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-500 to-orange-500 relative overflow-hidden">
      <Head>
        <title>ViBets - Bet with your friends</title>
      </Head>

      {/* NAVBAR */}
      <nav className="flex justify-center items-center px-4 py-6">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="ViBets" className="w-14 h-14" />
          <h1 className="text-white font-bold text-3xl">Vi<span className="text-yellow-300">Bets</span></h1>
        </div>
      </nav>

      {/* HERO */}
      <main className="flex flex-col items-center text-center px-2 pt-6 md:pt-10">
        {/* Título */}
        <h2 className="text-white z-20 font-extrabold text-6xl leading-tight mb-8">
          Bet with ur friends<br/>
          Challenge ur group
        </h2>

        {/* Botón */}
        <div className="flex space-x-4 mb-12 z-20">

          <a 
            href="https://play.google.com/store/apps/details?id=com.vibetsapp.vibets&hl=es_SV" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-green-600 font-semibold py-3 px-6 rounded-3xl hover:shadow-lg transition flex flex-col items-start"
          >
            <span className="text-md text-gray-600">Download on the</span>
            <div className="flex items-center mt-0 text-2xl">
              <img src="https://freelogopng.com/images/all_img/1664285914google-play-logo-png.png" alt="App Store" className="w-6 h-6 mr-2" />
              <span className="text-md">Play Store</span>
            </div>
          </a>
        </div>

        {/* Imágenes decorativas */}
        <div className="relative w-full max-w-4xl h-[400px]">
          {/* Foto izquierda */}
          <img
            src="/imagen2.jpeg"
            alt="Foto 1"
            className="absolute top-0 left-0 w-72 h-auto rounded-3xl object-cover shadow-2xl transform rotate-6 border-8 border-white"
          />

          {/* Mano con animación */}
          <motion.img
            src="https://framerusercontent.com/images/1ojZwN35M1543O3qePxnuoypA9A.png"
            alt="Mano decorativa"
            className="absolute -top-96 left-[80%] transform -translate-x-1/2 w-20"
            initial={{ y: 0, rotate: 0 }}
            animate={{ 
              y: [0, -10, 0],
              rotate: [-5, 5, -5]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut"
            }}
          />

          {/* Foto derecha */}
          <img
            src="/imagen1.jpeg"
            alt="Foto 2"
            className="absolute top-8 right-0 w-72 h-auto rounded-3xl object-cover shadow-2xl transform -rotate-6 border-8 border-white"
          />

          {/* Huella con animación */}
          <motion.img
            src="https://png.pngtree.com/png-vector/20240629/ourmid/pngtree-money-3d-icon-finance-png-image_12920735.png"
            alt="Huella decorativa"
            className="absolute bottom-[90%] left-1/5 w-24"
            initial={{ scale: 1, rotate: 0 }}
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0]  
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut"
            }}
          />

          {/* Fantasma con animación */}
          <motion.img
            src="/ghost.png"
            alt="Fantasma decorativo"
            className="absolute bottom-[80%] left-[70%] w-32 transform translate-y-1/4"
            initial={{ y: 0, x: 0 }}
            animate={{ 
              y: [0, 10, 0],
              x: [0, 5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 7,
              ease: "easeInOut" 
            }}
          />
        </div>
      </main>

      {/* Pie negro curvado */}
      <div className="absolute bottom-0 w-full h-10 bg-black rounded-t-[100px]"></div>
    </div>
  )
}
