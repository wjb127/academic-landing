'use client'

import { motion } from 'framer-motion'
import { FileText, Mail, Phone, MapPin, Download, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const ApplicationSection = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [position, setPosition] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          phone,
          company,
          position,
          message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitSuccess(true)
        // Reset form
        setEmail('')
        setName('')
        setPhone('')
        setCompany('')
        setPosition('')
        setMessage('')
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000)
      }
    } catch (error) {
      console.error('Submit error:', error)
      alert('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDownload = () => {
    // 실제 파일 다운로드 로직 (HWP 파일)
    const link = document.createElement('a')
    link.href = '/부산디지털금융블록체인아카데미_입학원서.hwp'
    link.download = '부산디지털금융블록체인아카데미_입학원서.hwp'
    link.click()
  }

  const documents = [
    { icon: FileText, title: '입학원서', description: '소정 양식 작성' },
    { icon: FileText, title: '증명사진', description: '3x4cm 사진 2매' },
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
            아래 방법 중 편한 방법으로 지원해주세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Application Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">제출 서류</h3>
            
            {/* Required Documents */}
            <div className="space-y-4 mb-8">
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

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2 mb-8"
            >
              <Download size={20} />
              입학원서 다운로드
            </button>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">접수 방법</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">이메일</p>
                    <a href="mailto:jswon@busan.com" className="text-blue-600 hover:underline">
                      jswon@busan.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-600" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">전화</p>
                    <p className="font-semibold">051-461-4513, 4273</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">방문 접수</p>
                    <p className="text-gray-900">부산일보 전략기획부</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Dates */}
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <p className="text-gray-700">
                <span className="font-semibold">모집 마감:</span> 선착순 50명 
                <br />
                <span className="text-sm text-gray-600">조기 마감될 수 있으니 서둘러 지원해주세요</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column - Quick Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">빠른 문의</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    성함 *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    소속
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="회사명"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    직책
                  </label>
                  <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="대표이사"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  문의사항
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="궁금하신 사항을 입력해주세요"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    전송 중...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    문의하기
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="text-green-600" size={20} />
                  <p className="text-green-800">
                    문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.
                  </p>
                </motion.div>
              )}
            </form>

            <p className="mt-4 text-sm text-gray-500">
              * 표시는 필수 입력 항목입니다
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ApplicationSection