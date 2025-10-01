# Nothing Stays Static

다양한 애니메이션 라이브러리와 기법을 연습하고 실험하는 갤러리입니다.

## 🎨 프로젝트 소개

이 프로젝트는 React와 CSS를 활용하여 다양한 애니메이션 효과를 구현하고 학습하는 포트폴리오 갤러리입니다. 각 애니메이션은 카테고리별로 분류되어 있으며, 인터랙티브한 미리보기와 상세 정보를 제공합니다.

## ✨ 주요 기능

- **카테고리별 필터링**: Interaction, Typography, Loading, 3D Effects, Particle, SVG, Canvas, Scroll 등
- **인터랙티브 갤러리**: 각 애니메이션의 실시간 미리보기
- **상세 페이지**: 개별 애니메이션의 상세 정보 및 코드 예제
- **반응형 디자인**: 모바일부터 데스크톱까지 최적화된 UI
- **모던 UI**: shadcn/ui 컴포넌트와 Tailwind CSS를 활용한 세련된 디자인

## 🎯 포함된 애니메이션

### Interaction
- **Button Hover Effect**: 마우스 호버 시 그라데이션과 글로우 효과
- **Progress Bar**: 인터랙티브한 프로그레스 바

### Typography
- **Wave Text Animation**: 각 글자가 순차적으로 바운스하는 타이포그래피

### Loading
- **Loading Spinner**: 이중 회전 효과를 가진 로딩 스피너

### 3D Effects
- **3D Card Flip**: 3D 변환을 활용한 카드 플립

### Particle
- **Floating Hearts**: 하트 이모지가 떠오르는 로맨틱한 애니메이션

### SVG
- **Morphing Shapes**: SVG를 활용한 도형 변형

### Canvas
- **Particle System**: Canvas를 활용한 인터랙티브 파티클 시스템

### Scroll
- **Scroll Reveal**: 스크롤에 반응하는 요소 등장 애니메이션

## 🛠️ 기술 스택

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: React Query
- **Icons**: Lucide React
- **Animation**: CSS Animations, CSS Transforms, Canvas API

## 🚀 시작하기

### 필수 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone <repository-url>
cd nothing-stays-static

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:8080`으로 접속하여 애플리케이션을 확인할 수 있습니다.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/           # 재사용 가능한 컴포넌트
│   ├── animations/      # 애니메이션 컴포넌트들
│   ├── ui/             # shadcn/ui 컴포넌트
│   ├── AnimationCard.tsx
│   ├── AnimationModal.tsx
│   ├── AnimationShowcase.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   └── Footer.tsx
├── pages/              # 페이지 컴포넌트
│   ├── Index.tsx
│   ├── AnimationDetail.tsx
│   └── NotFound.tsx
├── lib/                # 유틸리티 및 설정
│   ├── animations.ts   # 애니메이션 데이터
│   ├── utils.ts
│   └── codeExtractor.ts
├── hooks/              # 커스텀 훅
├── assets/             # 정적 자산
└── App.tsx             # 메인 앱 컴포넌트
```

## 🎨 디자인 시스템

- **컬러 팔레트**: 그라데이션 기반의 모던한 컬러 스킴
- **타이포그래피**: 나눔펜스크립트 폰트를 활용한 친근한 느낌
- **애니메이션**: 부드럽고 자연스러운 전환 효과
- **레이아웃**: 그리드 기반의 반응형 레이아웃

## 📝 라이선스

이 프로젝트는 개인 학습 및 포트폴리오 목적으로 제작되었습니다.
