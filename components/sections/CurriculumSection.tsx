'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, BookOpen } from 'lucide-react'
import { useState } from 'react'

const CurriculumSection = () => {
  const [selectedWeek, setSelectedWeek] = useState(0)

  const curriculum = [
    {
      week: 1,
      date: '9월 16일',
      title: '디지털 금융의 미래와 블록체인',
      speaker: '박종훈',
      position: '지식경제연구소 소장',
      description: '금융 산업의 디지털 전환과 블록체인 기술의 융합 전략',
      topics: ['디지털 금융 개요', '블록체인 기초', '금융 혁신 사례']
    },
    {
      week: 2,
      date: '9월 23일',
      title: 'DeFi와 새로운 금융 생태계',
      speaker: '김용우',
      position: '부산창조경제혁신센터 대표이사',
      description: '탈중앙화 금융(DeFi)의 이해와 실제 적용 방안',
      topics: ['DeFi 프로토콜', '스마트 컨트랙트', '유동성 풀']
    },
    {
      week: 3,
      date: '9월 30일',
      title: 'CBDC와 디지털 화폐의 미래',
      speaker: '서종군',
      position: '(재)부산기술창업투자원 원장',
      description: '중앙은행 디지털화폐(CBDC)와 금융 시스템의 변화',
      topics: ['CBDC 동향', '디지털 원화', '국제 결제 시스템']
    },
    {
      week: 4,
      date: '10월 7일',
      title: 'NFT와 디지털 자산',
      speaker: '김학수',
      position: '소셜빈 대표',
      description: 'NFT 기술의 이해와 비즈니스 활용 전략',
      topics: ['NFT 마켓플레이스', '디지털 아트', '메타버스 경제']
    },
    {
      week: 5,
      date: '10월 14일',
      title: '블록체인과 공급망 관리',
      speaker: '박훈기',
      position: '(주)부산연합기술지주 대표이사',
      description: '블록체인을 활용한 공급망 투명성과 효율성 증대',
      topics: ['스마트 물류', '추적 시스템', '신뢰 네트워크']
    },
    {
      week: 6,
      date: '10월 21일',
      title: 'Web3와 탈중앙화 인터넷',
      speaker: '장남준',
      position: '한국벤처투자 지역균형발전실 실장',
      description: 'Web3 생태계의 이해와 비즈니스 기회',
      topics: ['Web3 인프라', 'DAO', '토큰 이코노미']
    },
    {
      week: 7,
      date: '10월 28일',
      title: '메타버스와 가상경제',
      speaker: '특별 초청 강사',
      position: '글로벌 IT 기업 임원',
      description: '메타버스 플랫폼과 새로운 경제 모델',
      topics: ['가상 부동산', '디지털 경제', '크리에이터 이코노미']
    },
    {
      week: 8,
      date: '11월 4일',
      title: 'AI와 블록체인의 융합',
      speaker: '특별 초청 강사',
      position: 'AI 연구소 수석연구원',
      description: 'AI와 블록체인 기술의 시너지 효과',
      topics: ['AI 금융', '자동화 거래', '예측 분석']
    },
    {
      week: 9,
      date: '11월 11일',
      title: '규제와 컴플라이언스',
      speaker: '금융위원회 관계자',
      position: '정책 담당관',
      description: '디지털 자산 규제 현황과 대응 전략',
      topics: ['규제 동향', '컴플라이언스', '리스크 관리']
    },
    {
      week: 10,
      date: '11월 18일',
      title: '글로벌 시장과 투자 전략',
      speaker: '해외 초청 연사',
      position: '글로벌 투자사 파트너',
      description: '글로벌 디지털 자산 시장 분석과 투자 기회',
      topics: ['시장 분석', '포트폴리오 전략', '리스크 헤징']
    },
    {
      week: 11,
      date: '11월 25일',
      title: '스타트업과 블록체인',
      speaker: '벤처캐피털 대표',
      position: 'VC 파트너',
      description: '블록체인 스타트업 생태계와 투자 동향',
      topics: ['스타트업 사례', '펀딩 전략', '성장 전략']
    },
    {
      week: 12,
      date: '12월 2일',
      title: '부산의 디지털 금융 허브 전략',
      speaker: '부산시 관계자',
      position: '금융도시추진실장',
      description: '부산의 금융 중심지 발전 전략과 비전',
      topics: ['도시 전략', '정책 지원', '인프라 구축']
    },
    {
      week: 13,
      date: '12월 9일',
      title: '종합 토론 및 수료식',
      speaker: '전체 강사진',
      position: '패널 토론',
      description: '과정 총정리 및 네트워킹 세션',
      topics: ['종합 토론', '네트워킹', '수료식']
    }
  ]

  return (
    <section id="curriculum" className="py-20 bg-white">
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
            커리큘럼 안내
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            13주간의 체계적인 교육 과정으로 디지털 금융과 블록체인 전문가로 성장합니다
          </p>
        </motion.div>

        {/* Curriculum Timeline */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Week Selector */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">주차별 강의</h3>
              <div className="space-y-2">
                {curriculum.map((item, index) => (
                  <button
                    key={item.week}
                    onClick={() => setSelectedWeek(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedWeek === index
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{item.week}주차</p>
                        <p className="text-sm opacity-80">{item.date}</p>
                      </div>
                      {selectedWeek === index && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Selected Week Details */}
          <motion.div
            className="lg:col-span-2"
            key={selectedWeek}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              {/* Week Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {curriculum[selectedWeek].week}주차
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  <span className="text-sm">{curriculum[selectedWeek].date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={16} />
                  <span className="text-sm">18:00 - 21:00</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {curriculum[selectedWeek].title}
              </h3>

              {/* Speaker Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                  <User className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {curriculum[selectedWeek].speaker}
                  </p>
                  <p className="text-gray-600">{curriculum[selectedWeek].position}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 text-lg">
                {curriculum[selectedWeek].description}
              </p>

              {/* Topics */}
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <BookOpen size={20} className="text-blue-600" />
                  주요 학습 내용
                </h4>
                <ul className="space-y-2">
                  {curriculum[selectedWeek].topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">특별 혜택:</span> 매 강의 후 고급 만찬과 
                  네트워킹 시간 제공
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">수료 기준:</span> 전체 강의의 80% 이상 출석 시 
                  수료증 발급
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CurriculumSection