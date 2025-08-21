'use client'

import { motion } from 'framer-motion'
import { Sparkles, Users, Trophy, Globe, Briefcase, Award } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: 'VIP 네트워킹 만찬',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Globe,
      title: '글로벌 연사와의 실전 토론',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Briefcase,
      title: '참가자 맞춤형 비즈니스 매칭',
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            아카데미만의 차별점
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            부산 디지털금융·블록체인 아카데미에서만 경험할 수 있는 특별한 혜택
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex items-center gap-3 sm:gap-4">
                {/* Icon Container */}
                <div className={`inline-flex p-2.5 sm:p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
                  <feature.icon className="text-white" size={20} />
                </div>
                
                {/* Content */}
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                
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