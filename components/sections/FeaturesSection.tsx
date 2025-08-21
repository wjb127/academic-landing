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
      title: '글로벌 연사와의 실전 토론',
      description: '국내외 최고 전문가들과의 직접적인 토론 및 Q&A 세션',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Briefcase,
      title: '참가자 맞춤형 비즈니스 매칭',
      description: '개별 참가자의 비즈니스 니즈에 맞춘 1:1 매칭 서비스',
      color: 'from-purple-500 to-pink-600'
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

      </div>
    </section>
  )
}

export default FeaturesSection