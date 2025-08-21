'use client'

import { motion } from 'framer-motion'
import { Sparkles, Users, Trophy, Globe, Briefcase, Award } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: 'VIP 네트워킹 만찬',
      description: '매 강의 후 제공되는 고급 만찬을 통해 동종업계 리더들과의 깊이 있는 교류',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Globe,
      title: '글로벌 연사 초청',
      description: '국내외 최고 전문가들의 생생한 현장 경험과 인사이트 공유',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Briefcase,
      title: '비즈니스 매칭',
      description: '참가자 간 실질적인 비즈니스 협력 기회 창출 및 파트너십 구축',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Trophy,
      title: '수료증 발급',
      description: '부산일보 · 비온미디어 · 쟁글 공동 명의의 공식 수료증 발급',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Award,
      title: '원우회 가입',
      description: '수료 후 지속적인 네트워킹과 정보 교류를 위한 원우회 자동 가입',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Sparkles,
      title: '특별 세미나',
      description: '정규 과정 외 특별 세미나 및 워크숍 참여 기회 제공',
      color: 'from-indigo-500 to-purple-600'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
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
            아카데미만의 차별점
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            부산 디지털금융·블록체인 아카데미에서만 경험할 수 있는 특별한 혜택
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                {/* Icon Container */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Highlight */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                부산 국제금융포럼 연계 프로그램
              </h3>
              <p className="text-lg opacity-90 mb-6">
                2025 부산국제금융포럼과 연계하여 진행되는 특별 프로그램으로,
                금융 중심지 부산의 발전 전략을 함께 모색합니다.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                  #디지털금융
                </span>
                <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                  #블록체인
                </span>
                <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                  #금융혁신
                </span>
                <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                  #부산금융중심지
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-full animate-pulse" />
                <div className="relative bg-white/10 backdrop-blur-md rounded-full p-12">
                  <Trophy className="text-white" size={80} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection