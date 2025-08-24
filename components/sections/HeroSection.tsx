'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Calendar, Users, MapPin } from 'lucide-react'
import Image from 'next/image'
import ApplicationModal from '../ApplicationModal'

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-background.png')" }}
        />
        {/* Gradient Overlay - 더 연한 색상으로 조정 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/40 to-indigo-900/50" />
        
        {/* Animated blockchain network effect */}
        <div className="absolute inset-0">
          <div className="h-full w-full">
            <motion.div
              className="absolute top-20 left-10 w-3 h-3 bg-blue-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-40 right-20 w-4 h-4 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute bottom-30 left-1/3 w-2 h-2 bg-yellow-400 rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtitle */}
          <motion.div
            className="inline-flex flex-col sm:flex-row items-center gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8 mx-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-green-400 font-semibold text-sm sm:text-base">제1기 원우 모집</span>
            <span className="hidden sm:inline text-white">|</span>
            <span className="text-white text-xs sm:text-base">부산일보 · 비온미디어 · 쟁글 공동주관</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block sm:inline">부산 디지털금융·</span>
            <span className="block sm:inline">블록체인</span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              아카데미 제1기
            </span>
          </motion.h1>


          {/* Key Info Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 flex items-center gap-3">
              <Calendar className="text-green-400 flex-shrink-0" size={20} />
              <div className="text-left">
                <p className="text-white/70 text-xs sm:text-sm">교육기간</p>
                <p className="text-white font-semibold text-sm sm:text-base">9.16 - 12.9</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 flex items-center gap-3">
              <Users className="text-blue-400 flex-shrink-0" size={20} />
              <div className="text-left">
                <p className="text-white/70 text-xs sm:text-sm">모집인원</p>
                <p className="text-white font-semibold text-sm sm:text-base">50명 내외</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 flex items-center gap-3">
              <MapPin className="text-yellow-400 flex-shrink-0" size={20} />
              <div className="text-left">
                <p className="text-white/70 text-xs sm:text-sm">교육장소</p>
                <p className="text-white font-semibold text-sm sm:text-base">부산 힐튼호텔 5층</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
            >
              <Download size={18} />
              지금 지원하기
            </button>
            <a
              href="#about"
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/20 transition-all transform hover:scale-105 text-center"
            >
              자세히 알아보기
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Application Modal */}
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default HeroSection