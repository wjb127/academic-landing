'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, BookOpen, MapPin, Building2, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const CurriculumSection = () => {
  const [selectedWeek, setSelectedWeek] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const curriculum = [
    {
      week: '1주차',
      date: '9/16',
      speakerName: '심준식 대표 / 김상민 대표',
      speakerTitle: '비온미디어 / 부산디지털자산거래소',
      speakerImage: '/speakers/speaker-1.png',
      speakerImage2: '/speakers/speaker-placeholder.jpg', // 김상민 대표 사진 (추후 업데이트)
      title: '대한민국 제1경제도시, 부산의 디지털금융 허브 전략',
      location: '오키드룸',
      isOrientation: true,
      description: '부산의 디지털금융 중심지 전략과 블록체인 산업 육성 방안에 대해 논의합니다.'
    },
    {
      week: '2주차',
      date: '9/24',
      speakerName: '김준우 대표',
      speakerTitle: '쟁글',
      speakerImage: '/speakers/speaker-2.png',
      title: 'Web3 산업의 글로벌 트렌드와 패러다임 변화',
      location: '오키드룸',
      description: 'Web3 기술의 최신 동향과 미래 전망을 살펴봅니다.'
    },
    {
      week: '3주차',
      date: '9/30',
      speakerName: '아이언 킴 대표',
      speakerTitle: '터틀캠퍼스',
      speakerImage: '/speakers/speaker-3.jpg',
      title: '디지털 자산 투자와 리스크 관리',
      location: '오키드룸',
      description: '디지털 자산 투자 전략과 효과적인 리스크 관리 방법을 학습합니다.'
    },
    {
      week: '4주차',
      date: '10/14',
      speakerName: 'Jake Choi',
      speakerTitle: 'Hack VC Advisor',
      speakerImage: '/speakers/speaker-4.jpg',
      title: '글로벌 Web3 VC 투자와 검토',
      location: '소연회장 2개룸',
      description: '글로벌 VC 관점에서의 Web3 프로젝트 평가 기준을 알아봅니다.'
    },
    {
      week: '5주차',
      date: '10/21',
      speakerName: '이현우 대표',
      speakerTitle: '쟁글',
      speakerImage: '/speakers/speaker-5.jpeg',
      title: 'Web3와 AI 발전 방향과 잠재 투자섹터',
      location: '소연회장 2개룸',
      description: 'Web3와 AI 기술의 융합과 새로운 투자 기회를 탐색합니다.'
    },
    {
      week: '6주차',
      date: '10/28',
      speakerName: '강환국',
      speakerTitle: '유튜버/작가',
      speakerImage: '/speakers/speaker-placeholder.jpg',
      title: '코인 분석, 시장 사이클과 투자 심리학',
      location: '피오니룸',
      description: '암호화폐 시장의 사이클과 투자자 심리를 분석합니다.'
    },
    {
      week: '7주차',
      date: '11/4',
      speakerName: '이윤호 CBO',
      speakerTitle: 'KAIA',
      speakerImage: '/speakers/speaker-7.jpg',
      title: '아시아 특화 글로벌 블록체인 사업과 원화스테이블코인 사업',
      location: '오키드룸',
      description: '아시아 블록체인 시장과 스테이블코인 비즈니스 전략을 다룹니다.'
    },
    {
      week: '8주차',
      date: '11/11',
      speakerName: '차란차 본부장',
      speakerTitle: '도이치모터스',
      speakerImage: '/speakers/speaker-8.jpg',
      title: 'Web3와 AI를 활용한 모빌리티테크 사업확장',
      location: '오키드룸',
      description: '모빌리티 산업에서의 Web3와 AI 활용 사례를 살펴봅니다.'
    },
    {
      week: '9주차',
      date: '11/18',
      speakerName: '이현우 대표',
      speakerTitle: '쟁글',
      speakerImage: '/speakers/speaker-5.jpeg',
      title: '글로벌 국가별/산업별 선두기업들의 Web3 도입 전략과 현황',
      location: '오키드룸',
      description: '선진 기업들의 Web3 도입 사례와 전략을 분석합니다.'
    },
    {
      week: '10주차',
      date: '11/25',
      speakerName: '이중희 교수',
      speakerTitle: '고려대학교',
      speakerImage: '/speakers/speaker-10.png',
      title: '블록체인 기술의 원리와 산업 적용',
      location: '소연회장 2개룸',
      description: '블록체인 기술의 핵심 원리와 실제 산업 적용 방안을 학습합니다.'
    },
    {
      week: '11주차',
      date: '12/2',
      speakerName: '안재현 대표',
      speakerTitle: '뱅카우',
      speakerImage: '/speakers/speaker-placeholder.jpg',
      title: '토큰증권, 블록체인과 전통산업의 융합',
      location: '소연회장 2개룸',
      description: '토큰증권과 전통 금융의 융합 가능성을 탐구합니다.'
    },
    {
      week: '12주차',
      date: '12/9',
      speakerName: '박정무 대표',
      speakerTitle: 'ATU 파트너스',
      speakerImage: '/speakers/speaker-12.jpg',
      title: '스타트업 투자 발굴과 성공전략',
      location: '소연회장 2개룸',
      description: '블록체인 스타트업 투자 전략과 성공 사례를 공유합니다.'
    }
  ]

  // 자동 재생 기능
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setSelectedWeek((prev) => (prev + 1) % curriculum.length)
    }, 8000) // 8초마다 자동 전환

    return () => clearInterval(interval)
  }, [isAutoPlaying, curriculum.length])

  const handleWeekSelect = (index: number) => {
    setSelectedWeek(index)
    setIsAutoPlaying(false) // 수동 선택 시 자동 재생 중지
  }

  const currentCurriculum = curriculum[selectedWeek]

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            커리큘럼 안내
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            국내외 최고 전문가들과 함께하는 12주 집중 과정
          </p>
        </motion.div>

        {/* Main Content Container */}
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Side - Week Selector */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 lg:sticky lg:top-24">
              <h3 className="font-semibold text-gray-900 mb-1 px-2 text-sm sm:text-base">강의 일정</h3>
              <p className="text-xs text-gray-500 mb-3 sm:mb-4 px-2">클릭하여 상세 내용 보기</p>

              <div className="space-y-1">
                {curriculum.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleWeekSelect(index)}
                    className={`group w-full text-left px-2 sm:px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer border ${
                      selectedWeek === index
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md border-transparent lg:translate-x-1'
                        : 'border-gray-200 hover:border-blue-400 hover:bg-gray-50 lg:hover:translate-x-1 hover:border-l-4'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 mr-1 sm:mr-2">
                        <div className="flex items-baseline gap-1 sm:gap-2 mb-1">
                          <span className="font-medium text-xs sm:text-sm">
                            {item.week}
                          </span>
                          <span className={`text-xs ${
                            selectedWeek === index ? 'text-white/80' : 'text-gray-500'
                          }`}>
                            {item.date}
                          </span>
                        </div>
                        <div className={`text-xs line-clamp-2 ${
                          selectedWeek === index ? 'text-white/90' : 'text-gray-600'
                        }`}>
                          {item.title}
                        </div>
                      </div>
                      <ChevronRight className={`flex-shrink-0 transition-all ${
                        selectedWeek === index 
                          ? 'text-white opacity-100' 
                          : 'text-gray-300 opacity-50 group-hover:opacity-100 group-hover:text-blue-500'
                      }`} size={16} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Detailed Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              key={selectedWeek}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="bg-white/20 backdrop-blur px-2 sm:px-3 py-1 rounded-full text-white font-semibold text-sm">
                      {currentCurriculum.week}
                    </span>
                    <span className="text-white/90 text-sm sm:text-base">
                      {currentCurriculum.date}
                    </span>
                  </div>
                  {currentCurriculum.isOrientation && (
                    <span className="bg-yellow-400 text-gray-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      오리엔테이션
                    </span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  {currentCurriculum.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 md:p-8">
                {/* Speaker Profile */}
                {/* 2명의 강사가 있는 경우 (1주차) */}
                {currentCurriculum.speakerImage2 ? (
                  <div className="space-y-4 mb-8">
                    {/* 첫 번째 강사 */}
                    <div className="flex items-start gap-4">
                      <div className="relative w-26 h-26 rounded-full overflow-hidden bg-gray-200 flex-shrink-0" style={{ width: '104px', height: '104px' }}>
                        {currentCurriculum.speakerImage === '/speakers/speaker-placeholder.jpg' ? (
                          <div className="w-full h-full flex items-center justify-center">
                            <User className="text-gray-400" size={42} />
                          </div>
                        ) : (
                          <Image
                            src={currentCurriculum.speakerImage}
                            alt={currentCurriculum.speakerName.split(' / ')[0]}
                            fill
                            className="object-contain"
                            style={{ objectPosition: 'center' }}
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {currentCurriculum.speakerName.split(' / ')[0]}
                        </h4>
                        <p className="text-gray-600">
                          {currentCurriculum.speakerTitle.split(' / ')[0]}
                        </p>
                      </div>
                    </div>
                    
                    {/* 두 번째 강사 */}
                    <div className="flex items-start gap-4">
                      <div className="relative w-26 h-26 rounded-full overflow-hidden bg-gray-200 flex-shrink-0" style={{ width: '104px', height: '104px' }}>
                        {currentCurriculum.speakerImage2 === '/speakers/speaker-placeholder.jpg' ? (
                          <div className="w-full h-full flex items-center justify-center">
                            <User className="text-gray-400" size={42} />
                          </div>
                        ) : (
                          <Image
                            src={currentCurriculum.speakerImage2}
                            alt={currentCurriculum.speakerName.split(' / ')[1]}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {currentCurriculum.speakerName.split(' / ')[1]}
                        </h4>
                        <p className="text-gray-600">
                          {currentCurriculum.speakerTitle.split(' / ')[1]}
                        </p>
                      </div>
                    </div>
                    
                    {/* 장소 정보 */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                      <MapPin size={16} />
                      <span>{currentCurriculum.location}</span>
                    </div>
                  </div>
                ) : (
                  /* 1명의 강사인 경우 */
                  <div className="flex items-start gap-6 mb-8">
                    <div className="relative rounded-full overflow-hidden bg-gray-200 flex-shrink-0" style={{ width: '125px', height: '125px' }}>
                      {currentCurriculum.speakerImage === '/speakers/speaker-placeholder.jpg' ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <User className="text-gray-400" size={52} />
                        </div>
                      ) : (
                        <Image
                          src={currentCurriculum.speakerImage}
                          alt={currentCurriculum.speakerName}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">
                        {currentCurriculum.speakerName}
                      </h4>
                      <p className="text-gray-600 mb-3">
                        {currentCurriculum.speakerTitle}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={16} />
                        <span>{currentCurriculum.location}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Description */}
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h5 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">강의 소개</h5>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {currentCurriculum.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center">
            <Calendar className="mx-auto text-blue-600 mb-3" size={32} />
            <h4 className="font-semibold text-gray-900 mb-1">교육 기간</h4>
            <p className="text-sm text-gray-600">2025년 9월 16일 ~ 12월 9일</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 text-center">
            <Clock className="mx-auto text-green-600 mb-3" size={32} />
            <h4 className="font-semibold text-gray-900 mb-1">교육 시간</h4>
            <p className="text-sm text-gray-600">매주 화요일 18:00 - 21:00</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 text-center">
            <BookOpen className="mx-auto text-yellow-600 mb-3" size={32} />
            <h4 className="font-semibold text-gray-900 mb-1">특별 혜택</h4>
            <p className="text-sm text-gray-600">매 강의 후 VIP 네트워킹 만찬</p>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 p-4 bg-blue-50 rounded-lg text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-gray-700">
            <span className="font-semibold">※ 상기 교육과정 일정 및 장소는 변경 될 수 있습니다</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CurriculumSection