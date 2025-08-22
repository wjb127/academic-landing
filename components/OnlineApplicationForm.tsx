'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Save, Send, AlertCircle } from 'lucide-react'

interface OnlineApplicationFormProps {
  isOpen: boolean
  onClose: () => void
}

const OnlineApplicationForm = ({ isOpen, onClose }: OnlineApplicationFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    company: '',
    position: '',
    phone: '',
    email: '',
    address: '',
    education: '',
    career: '',
    motivation: ''
  })
  
  const [isSaving, setIsSaving] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')

  // 로컬 스토리지에 임시 저장
  const handleSave = () => {
    localStorage.setItem('applicationDraft', JSON.stringify(formData))
    setSaveMessage('임시 저장되었습니다')
    setTimeout(() => setSaveMessage(''), 3000)
  }

  // 불러오기
  const handleLoad = () => {
    const saved = localStorage.getItem('applicationDraft')
    if (saved) {
      setFormData(JSON.parse(saved))
      setSaveMessage('저장된 내용을 불러왔습니다')
      setTimeout(() => setSaveMessage(''), 3000)
    }
  }

  // 제출
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    
    try {
      // 여기에 실제 제출 로직 구현 (API 호출 등)
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        alert('지원서가 성공적으로 제출되었습니다!')
        localStorage.removeItem('applicationDraft')
        onClose()
      }
    } catch (error) {
      alert('제출 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsSaving(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Form Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">온라인 입학원서</h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <p className="text-white/90 text-sm mt-1">
              부산 디지털금융·블록체인 아카데미 제1기
            </p>
          </div>

          {/* Action Buttons */}
          <div className="px-6 py-3 bg-gray-50 border-b flex items-center justify-between">
            <button
              onClick={handleLoad}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              임시저장 불러오기
            </button>
            <div className="flex items-center gap-3">
              {saveMessage && (
                <span className="text-sm text-green-600 animate-fade-in">
                  {saveMessage}
                </span>
              )}
              <button
                onClick={handleSave}
                className="flex items-center gap-1 px-3 py-1.5 bg-gray-600 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors"
              >
                <Save size={16} />
                임시저장
              </button>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
            <div className="space-y-6">
              {/* 기본 정보 */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">기본 정보</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      성명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      생년월일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* 소속 정보 */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">소속 정보</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      회사/기관명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      직책 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* 연락처 */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">연락처</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      휴대전화 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="010-0000-0000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    주소
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* 학력 및 경력 */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">학력 및 경력</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      최종학력
                    </label>
                    <input
                      type="text"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      placeholder="예: ○○대학교 ○○학과 졸업"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      주요 경력
                    </label>
                    <textarea
                      name="career"
                      value={formData.career}
                      onChange={handleChange}
                      rows={3}
                      placeholder="주요 경력사항을 입력해주세요"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* 지원동기 */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">지원동기</h3>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={4}
                  placeholder="아카데미 지원동기를 작성해주세요"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 안내사항 */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={18} />
                  <div className="text-sm text-gray-700">
                    <p className="font-medium mb-1">제출 전 확인사항</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• 모든 필수 항목(*)을 입력했는지 확인해주세요</li>
                      <li>• 제출 후에는 수정이 불가능합니다</li>
                      <li>• 증명사진은 별도로 이메일로 제출해주세요</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                취소
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send size={18} />
                {isSaving ? '제출 중...' : '지원서 제출'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default OnlineApplicationForm