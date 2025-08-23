'use client'

import { motion } from 'framer-motion'
import { FileText, Mail, Phone, MapPin, Download, Clock, CheckCircle, Edit3 } from 'lucide-react'

const ApplicationSection = () => {
  const handleOnlineApplication = () => {
    // 부산 디지털금융·블록체인 아카데미 입학원서 템플릿
    // /copy를 붙여서 사용자의 구글 드라이브에 자동 복사
    window.open('https://docs.google.com/document/d/1uNLX--bq9q64eNbFXoXrAOGksd_ngQXUvfw0kbF7mLE/copy', '_blank')
  }
  
  const handleDownload = () => {
    // HWP 파일 직접 다운로드
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            지원 방법
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
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
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="bg-blue-600 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm">1</span>
              제출 서류
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {documents.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  className="bg-gray-50 rounded-lg p-3 sm:p-4 flex items-start gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 p-1.5 sm:p-2 rounded-lg">
                    <doc.icon className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{doc.title}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{doc.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Application Options */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">지원 방법 선택</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Online Application */}
                <button
                  onClick={handleOnlineApplication}
                  className="group bg-white hover:bg-green-50 rounded-lg p-4 sm:p-5 text-left transition-all duration-200 border-2 border-green-400 hover:border-green-500 shadow-sm hover:shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg text-white">
                      <Edit3 size={20} />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-1">
                        온라인 지원서 작성
                      </h5>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Google Docs에서 양식 복사 후 작성
                      </p>
                      <p className="text-xs text-green-600 mt-1 font-medium">
                        ✓ 자동 저장 · 편리한 편집
                      </p>
                    </div>
                  </div>
                </button>
                
                {/* Download Application */}
                <button
                  onClick={handleDownload}
                  className="group bg-white hover:bg-blue-50 rounded-lg p-4 sm:p-5 text-left transition-all duration-200 border-2 border-blue-400 hover:border-blue-500 shadow-sm hover:shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-lg text-white">
                      <Download size={20} />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-1">
                        입학원서 다운로드
                      </h5>
                      <p className="text-xs sm:text-sm text-gray-600">
                        HWP 파일 다운로드 후 작성
                      </p>
                      <p className="text-xs text-blue-600 mt-1 font-medium">
                        ✓ 이메일/우편 제출
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Step 2: 접수 방법 */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="bg-blue-600 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm">2</span>
              접수 방법
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {applicationMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-white p-2 sm:p-3 rounded-lg shadow-sm">
                      <method.icon className="text-blue-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{method.title}</h4>
                      <p className="text-blue-600 font-medium mb-1 text-sm sm:text-base">{method.content}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">문의처</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="text-white/80 flex-shrink-0" size={20} />
                <div className="text-left">
                  <p className="text-white/80 text-xs sm:text-sm">전화</p>
                  <p className="text-base sm:text-lg md:text-xl font-semibold">051-461-4513, 4273</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 sm:h-12 bg-white/30" />
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="text-white/80 flex-shrink-0" size={20} />
                <div className="text-left">
                  <p className="text-white/80 text-xs sm:text-sm">이메일</p>
                  <p className="text-base sm:text-lg md:text-xl font-semibold">jswon@busan.com</p>
                </div>
              </div>
            </div>
            <p className="text-white/90 mt-4 sm:mt-6 text-base sm:text-lg">부산일보 전략기획부</p>
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