'use client'

import { motion } from 'framer-motion'
import { FileText, Mail, Phone, MapPin, Download, Clock, CheckCircle } from 'lucide-react'

const ApplicationSection = () => {
  const handleDownload = () => {
    // 실제 파일 다운로드 로직 (HWP 파일)
    const link = document.createElement('a')
    link.href = '/부산 디지털금융블록체인 아카데미 안내문 및 입학원서.hwp'
    link.download = '부산 디지털금융블록체인 아카데미 안내문 및 입학원서.hwp'
    link.click()
  }

  const documents = [
    { icon: FileText, title: '입학원서', description: '소정 양식 작성' },
    { icon: FileText, title: '증명사진', description: '3x4cm 사진 2매' },
  ]

  const applicationMethods = [
    { 
      icon: Mail, 
      title: '이메일 접수',
      content: 'jswon@busan.com',
      description: '작성한 입학원서와 증명사진을 첨부하여 발송'
    },
    { 
      icon: MapPin, 
      title: '방문·우편 접수',
      content: '부산일보 전략기획부',
      description: '부산광역시 연제구 중앙대로 1226'
    },
  ]

  return (
    <section id="application" className="py-20 bg-white">
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
            지원 방법
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            입학원서를 다운로드하여 작성 후 제출해주세요
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1: 제출 서류 */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              제출 서류
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  className="bg-gray-50 rounded-lg p-4 flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <doc.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{doc.title}</h4>
                    <p className="text-gray-600 text-sm">{doc.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105"
            >
              <Download size={24} />
              지금 지원하기
            </button>
            <p className="text-sm text-gray-500 mt-2">클릭하여 입학원서를 다운로드하세요</p>
          </motion.div>

          {/* Step 2: 접수 방법 */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              접수 방법
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {applicationMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <method.icon className="text-blue-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{method.title}</h4>
                      <p className="text-blue-600 font-medium mb-1">{method.content}</p>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">문의처</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <Phone className="text-white/80" size={24} />
                <div className="text-left">
                  <p className="text-white/80 text-sm">전화</p>
                  <p className="text-xl font-semibold">051-461-4513, 4273</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/30" />
              <div className="flex items-center gap-3">
                <Mail className="text-white/80" size={24} />
                <div className="text-left">
                  <p className="text-white/80 text-sm">이메일</p>
                  <p className="text-xl font-semibold">jswon@busan.com</p>
                </div>
              </div>
            </div>
            <p className="text-white/90 mt-6 text-lg">부산일보 전략기획부</p>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            className="mt-8 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-start gap-3">
              <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-gray-700 font-medium">모집 안내</p>
                <p className="text-gray-600 text-sm mt-1">
                  선착순 50명 모집 | 조기 마감될 수 있으니 서둘러 지원해주세요
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ApplicationSection