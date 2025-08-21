'use client'

import { motion } from 'framer-motion'
import { Download, Calendar, Users, MapPin } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  const handleDownload = async () => {
    // 입학원서 다운로드 로직 (HWP 파일)
    const link = document.createElement('a')
    link.href = '/application-form.hwp'
    link.download = '부산디지털금융블록체인아카데미_입학원서.hwp'
    link.click()
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        
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
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-green-400 font-semibold">2025년 제1기 모집</span>
            <span className="text-white">|</span>
            <span className="text-white">부산일보 · 비온미디어 · 쟁글 공동주관</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            부산 디지털금융
            <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              블록체인 아카데미
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            금융중심지 부산의 발전 전략을 모색하는
            <br />
            부산국제금융포럼이 2회째를 맞습니다
          </motion.p>

          {/* Key Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center gap-3">
              <Calendar className="text-green-400" size={24} />
              <div className="text-left">
                <p className="text-white/70 text-sm">교육기간</p>
                <p className="text-white font-semibold">9.16 - 12.9</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center gap-3">
              <Users className="text-blue-400" size={24} />
              <div className="text-left">
                <p className="text-white/70 text-sm">모집인원</p>
                <p className="text-white font-semibold">50명 내외</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center gap-3">
              <MapPin className="text-yellow-400" size={24} />
              <div className="text-left">
                <p className="text-white/70 text-sm">교육장소</p>
                <p className="text-white font-semibold">부산 그랜드볼룸</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button
              onClick={handleDownload}
              className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              입학원서 다운로드
            </button>
            <a
              href="#about"
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all transform hover:scale-105"
            >
              자세히 알아보기
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection