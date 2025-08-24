'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Edit3 } from 'lucide-react'

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
}

const ApplicationModal = ({ isOpen, onClose }: ApplicationModalProps) => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/부산+디지털금융·블록체인+아카데미+안내문+및+입학원서.hwp'
    link.download = '부산 디지털금융·블록체인 아카데미 안내문 및 입학원서.hwp'
    link.click()
    onClose()
  }

  const handleOnlineApplication = () => {
    // Google Docs 템플릿 URL - 실제 문서 ID로 교체 필요
    // /copy를 붙이면 자동으로 사용자의 구글 드라이브에 복사본 생성
    // 부산 디지털금융·블록체인 아카데미 입학원서 템플릿
    window.open('https://docs.google.com/document/d/1uNLX--bq9q64eNbFXoXrAOGksd_ngQXUvfw0kbF7mLE/copy', '_blank')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">지원 방법 선택</h3>
                  <button
                    onClick={onClose}
                    className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-white/90 text-sm">
                  편리한 방법을 선택하여 지원해주세요
                </p>
              </div>
              
              {/* Options */}
              <div className="p-6 space-y-4">
                {/* Online Application */}
                <button
                  onClick={handleOnlineApplication}
                  className="w-full group bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-xl p-5 text-left transition-all duration-200 border-2 border-green-200 hover:border-green-400"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-lg text-white">
                      <Edit3 size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        온라인 지원서 작성
                      </h4>
                      <p className="text-sm text-gray-600">
                        Google Docs에서 양식 복사 후 작성
                      </p>
                      <p className="text-xs text-green-600 mt-2 font-medium">
                        추천 ✓ 자동 저장 · 편리한 작성
                      </p>
                    </div>
                  </div>
                </button>
                
                {/* Download Application */}
                <button
                  onClick={handleDownload}
                  className="w-full group bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl p-5 text-left transition-all duration-200 border-2 border-blue-200 hover:border-blue-400"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-lg text-white">
                      <Download size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        입학원서 다운로드
                      </h4>
                      <p className="text-sm text-gray-600">
                        HWP 파일 다운로드 후 작성하여 이메일/우편 제출
                      </p>
                    </div>
                  </div>
                </button>
              </div>
              
              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4">
                <p className="text-xs text-gray-500 text-center">
                  문의: 051-461-4513, 4273 | jswon@busan.com
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ApplicationModal