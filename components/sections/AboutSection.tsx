'use client'

import { motion } from 'framer-motion'
import { Award, Users, GraduationCap, Building } from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
  const requirements = [
    { icon: Award, title: 'CEO', description: '기업 대표이사 및 임원진' },
    { icon: Building, title: '공무원', description: '상위직 공무원 및 정책 담당자' },
    { icon: GraduationCap, title: '전문직', description: '변호사, 회계사 등 전문직 종사자' },
    { icon: Users, title: '자영업', description: '자영업 대표 및 사업가' },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            아카데미 소개
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            부산일보 · 비온미디어 · 쟁글이 공동으로 주관하는
            <br className="hidden sm:block" />
            <span className="block sm:inline">디지털금융과 블록체인 전문가 양성 프로그램</span>
          </p>
        </motion.div>

        {/* Partners Logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-4 sm:px-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6">
            <Image src="/logos/busan-ilbo.png" alt="부산일보" width={120} height={60} className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6">
            <Image src="/logos/beon-media.png" alt="비온미디어" width={120} height={60} className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6">
            <Image src="/logos/xangle.png" alt="쟁글" width={120} height={60} className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
          </div>
        </motion.div>

        {/* Key Information Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 px-4 sm:px-0">
          {/* Left Column - Program Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">프로그램 개요</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">모집 인원</h4>
                <p className="text-2xl sm:text-3xl font-bold text-blue-600">50명 내외</p>
                <p className="text-gray-600 mt-1 text-sm">선착순 마감</p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">교육 기간</h4>
                <p className="text-base sm:text-xl font-bold text-gray-900">2025년 9월 16일 ~ 12월 9일</p>
                <p className="text-gray-600 mt-1 text-xs sm:text-sm">매주 화요일 18:00 - 21:00 (만찬 포함)</p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">수강료</h4>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">550만원</p>
                <p className="text-gray-600 mt-1 text-xs sm:text-sm">(부가세 포함, 원우회비 별도)</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Target Audience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">지원 자격</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {requirements.map((req, index) => (
                <motion.div
                  key={req.title}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <req.icon className="text-blue-600 mb-3" size={32} />
                  <h4 className="font-semibold text-gray-900 mb-1">{req.title}</h4>
                  <p className="text-sm text-gray-600">{req.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <p className="text-gray-700">
                <span className="font-semibold">특별 혜택:</span> VIP 네트워킹 만찬 | 매 강의 후 실전 토론 및 글로벌 연사와의 교류 | 참가자 중심의 비즈니스 매칭 기회
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection