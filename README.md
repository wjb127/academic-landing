# 부산 디지털금융·블록체인 아카데미 랜딩페이지

부산일보, 비온미디어, 쟁글이 공동 주관하는 디지털금융·블록체인 전문가 양성 프로그램의 공식 랜딩페이지입니다.

## 🚀 기술 스택

- **Framework**: Next.js 15.5.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase (준비됨)

## 📦 설치 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 🔧 환경 설정

`.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## 📱 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 부드러운 스크롤 애니메이션
- ✅ 인터랙티브 커리큘럼 뷰어
- ✅ 입학원서 다운로드
- ✅ 문의 폼 제출
- ✅ 네비게이션 스크롤 효과

## 📂 프로젝트 구조

```
academic-landing/
├── app/
│   ├── api/           # API 라우트
│   ├── globals.css    # 전역 스타일
│   ├── layout.tsx     # 루트 레이아웃
│   └── page.tsx       # 메인 페이지
├── components/
│   ├── Navigation.tsx # 네비게이션 바
│   └── sections/      # 페이지 섹션들
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── CurriculumSection.tsx
│       ├── FeaturesSection.tsx
│       └── ApplicationSection.tsx
├── lib/
│   ├── supabase.ts    # Supabase 클라이언트
│   └── utils.ts       # 유틸리티 함수
└── public/            # 정적 파일
```

## 🎨 페이지 섹션

1. **Hero Section**: 메인 비주얼과 핵심 정보
2. **About Section**: 아카데미 소개 및 지원 자격
3. **Curriculum Section**: 13주 교육 과정 상세
4. **Features Section**: 차별화된 혜택
5. **Application Section**: 지원 방법 및 문의

## 📞 문의

부산일보 전략기획부
- 📧 Email: jswon@busan.com
- ☎️ Tel: 051-461-4513, 4273

## 🗓️ 교육 일정

- **모집 기간**: 선착순 50명
- **교육 기간**: 2025년 9월 16일 ~ 12월 9일
- **교육 시간**: 매주 화요일 18:00 - 21:00 (만찬 포함)
- **수강료**: 550만원 (부가세 포함)