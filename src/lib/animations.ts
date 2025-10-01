import ButtonHover from "@/components/animations/ButtonHover";
import WaveText from "@/components/animations/WaveText";
import LoadingSpinner from "@/components/animations/LoadingSpinner";
import CardFlip from "@/components/animations/CardFlip";
import ProgressBar from "@/components/animations/ProgressBar";
import FloatingHearts from "@/components/animations/FloatingHearts";
import MorphingShapes from "@/components/animations/MorphingShapes";
import ParticleSystem from "@/components/animations/ParticleSystem";
import ScrollReveal from "@/components/animations/ScrollReveal";

export interface AnimationData {
    id: number;
    title: string;
    description: string;
    category: string;
    technologies: string[];
    component: React.ComponentType;
    featured?: boolean;
    demoUrl?: string;
    githubUrl?: string;
}

export const animations: AnimationData[] = [
    {
        id: 1,
        title: "Button Hover Effect",
        description: "마우스 호버 시 그라데이션과 글로우 효과가 적용되는 버튼 애니메이션입니다.",
        category: "interaction",
        technologies: ["CSS", "React"],
        component: ButtonHover,
        featured: true
    },
    {
        id: 2,
        title: "Wave Text Animation",
        description: "각 글자가 순차적으로 바운스하는 타이포그래피 애니메이션입니다.",
        category: "typography",
        technologies: ["CSS", "React"],
        component: WaveText,
        featured: true
    },
    {
        id: 3,
        title: "Loading Spinner",
        description: "이중 회전 효과를 가진 로딩 스피너 애니메이션입니다.",
        category: "loading",
        technologies: ["CSS"],
        component: LoadingSpinner
    },
    {
        id: 4,
        title: "3D Card Flip",
        description: "3D 변환을 활용한 카드 플립 애니메이션입니다.",
        category: "3d",
        technologies: ["CSS", "3D Transform"],
        component: CardFlip
    },
    {
        id: 5,
        title: "Progress Bar",
        description: "인터랙티브한 프로그레스 바 애니메이션입니다.",
        category: "interaction",
        technologies: ["CSS", "React"],
        component: ProgressBar
    },
    {
        id: 6,
        title: "Floating Hearts",
        description: "하트 이모지가 떠오르는 로맨틱한 애니메이션입니다.",
        category: "particle",
        technologies: ["CSS"],
        component: FloatingHearts
    },
    {
        id: 7,
        title: "Morphing Shapes",
        description: "SVG를 활용한 도형 변형 애니메이션입니다.",
        category: "svg",
        technologies: ["SVG", "CSS"],
        component: MorphingShapes,
        featured: true
    },
    {
        id: 8,
        title: "Particle System",
        description: "Canvas를 활용한 인터랙티브 파티클 시스템입니다.",
        category: "canvas",
        technologies: ["Canvas", "JavaScript"],
        component: ParticleSystem
    },
    {
        id: 9,
        title: "Scroll Reveal",
        description: "스크롤에 반응하는 요소 등장 애니메이션입니다.",
        category: "scroll",
        technologies: ["CSS", "Intersection Observer"],
        component: ScrollReveal
    }
];

export const getAnimationById = (id: number): AnimationData | undefined => {
    return animations.find(anim => anim.id === id);
};

export const getAnimationsByCategory = (category: string): AnimationData[] => {
    if (category === "all") return animations;
    return animations.filter(anim => anim.category === category);
};

export const getFeaturedAnimations = (): AnimationData[] => {
    return animations.filter(anim => anim.featured);
};
