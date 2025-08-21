'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, BookOpen } from 'lucide-react'
import { useState } from 'react'

const CurriculumSection = () => {
  const curriculum = [
    {
      week: '1주차',
      date: '9/16',
      speaker: '비온미디어 심준식 대표<br/>(오리엔테이션)<br/>부산디지털자산거래소<br/>김상민 대표',
      title: '대한민국 제1경제도시, 부산의 디지털금융 허브 전략',
      badge: '오키드룸'
    },
    {
      week: '2주차',
      date: '9/24',
      speaker: '쟁글 김준우 대표',
      title: 'Web3 산업의 글로벌 트렌드와 패러다임 변화',
      badge: '오키드룸'
    },
    {
      week: '3주차',
      date: '9/30',
      speaker: '터틀캠퍼스 아이언 김 대표',
      title: '디지털 자산 투자와 리스크 관리',
      badge: '오키드룸'
    },
    {
      week: '4주차',
      date: '10/14',
      speaker: 'Hack VC Advisor<br/>Jake Choi',
      title: '극복형 Web3 VC 투자와 검토',
      badge: '소연회장 2개룸'
    },
    {
      week: '5주차',
      date: '10/21',
      speaker: '쟁글 이현욱 대표',
      title: 'Web3와 AI 발전 방향과 잠재 투자섹터',
      badge: '소연회장 2개룸'
    },
    {
      week: '6주차',
      date: '10/28',
      speaker: '유튜버/작가 강환국',
      title: '코인 분석, 시장 사이클과 투자 심리학',
      badge: '피오니룸'
    },
    {
      week: '7주차',
      date: '11/4',
      speaker: 'KAIA 이윤호 CBO',
      title: '아시아 특화 글로벌 블록체인 사업과 원화스테이블코인 사업',
      badge: '오키드룸'
    },
    {
      week: '8주차',
      date: '11/11',
      speaker: '도이치모터스<br/>차탄자 본부장',
      title: 'Web3와 AI를 활용한 모빌리티테크 사업확장',
      badge: '오키드룸'
    },
    {
      week: '9주차',
      date: '11/18',
      speaker: '쟁글 이현욱 대표',
      title: '글로벌 국가별/산업별 선두기업들의 Web3 도입 전략과 현황',
      badge: '오키드룸'
    },
    {
      week: '10주차',
      date: '11/25',
      speaker: '고려대학교 이종희 교수',
      title: '블록체인 기술의 원리와 산업 적용',
      badge: '소연회장 2개룸'
    },
    {
      week: '11주차',
      date: '12/2',
      speaker: '뱅가우 안재현 대표',
      title: '토큰증권, 블록체인과 전통산업의 융합',
      badge: '소연회장 2개룸'
    },
    {
      week: '12주차',
      date: '12/9',
      speaker: 'ATU 파트너스<br/>박정무 대표',
      title: '스타트업 투자 발굴과 성공전략',
      badge: '소연회장 2개룸'
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
            부산 디지털금융·블록체인 아카데미 강의 커리큘럼
          </p>
        </motion.div>

        {/* Curriculum Table - Desktop */}
        <motion.div
          className="hidden lg:block overflow-hidden rounded-xl shadow-2xl border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-900 to-indigo-900">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">일정</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">강사</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">주요 내용</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">비고</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {curriculum.map((item, index) => (
                  <motion.tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-900">{item.week}</span>
                        <span className="text-sm text-gray-600">{item.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div 
                        className="text-sm text-gray-900"
                        dangerouslySetInnerHTML={{ __html: item.speaker }}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900 font-medium">{item.title}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {item.badge}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Curriculum Cards - Mobile */}
        <div className="lg:hidden space-y-4">
          {curriculum.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.week}
                  </div>
                  <span className="text-gray-600 text-sm">{item.date}</span>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {item.badge}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User size={16} />
                <div dangerouslySetInnerHTML={{ __html: item.speaker.replace(/<br\/>/g, ' ') }} />
              </div>
            </motion.div>
          ))}
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