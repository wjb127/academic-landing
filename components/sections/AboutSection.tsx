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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            아카데미 소개
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            부산일보 · 비온미디어 · 쟁글이 공동으로 주관하는
            <br />
            디지털금융과 블록체인 전문가 양성 프로그램
          </p>
        </motion.div>

        {/* Partners Logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-2xl font-bold text-blue-600">부산일보</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-2xl font-bold text-green-600">비온미디어</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-2xl font-bold text-purple-600">쟁글</div>
          </div>
        </motion.div>

        {/* Key Information Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Program Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">프로그램 개요</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">모집 인원</h4>
                <p className="text-3xl font-bold text-blue-600">50명 내외</p>
                <p className="text-gray-600 mt-1">선착순 마감</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">교육 기간</h4>
                <p className="text-xl font-bold text-gray-900">2025년 9월 16일 ~ 12월 9일</p>
                <p className="text-gray-600 mt-1">매주 화요일 18:00 - 21:00 (만찬 포함)</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">수강료</h4>
                <p className="text-2xl font-bold text-gray-900">550만원</p>
                <p className="text-gray-600 mt-1">(부가세 포함, 원우회비 별도)</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">지원 자격</h3>
            <div className="grid grid-cols-2 gap-4">
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
                <span className="font-semibold">특별 혜택:</span> 수료 후 원우회 가입 및 
                지속적인 네트워킹 기회 제공
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection