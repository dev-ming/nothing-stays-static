import ButtonHover from "@/components/animations/ButtonHover";
import WaveText from "@/components/animations/WaveText";
import LoadingSpinner from "@/components/animations/LoadingSpinner";
import CardFlip from "@/components/animations/CardFlip";
import ProgressBar from "@/components/animations/ProgressBar";
import FloatingHearts from "@/components/animations/FloatingHearts";
import MorphingShapes from "@/components/animations/MorphingShapes";
import ParticleSystem from "@/components/animations/ParticleSystem";
import ScrollReveal from "@/components/animations/ScrollReveal";
import i18n from "./i18n";

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

export const getAnimations = (): AnimationData[] => [
    {
        id: 1,
        title: i18n.t("animations.buttonHover.title"),
        description: i18n.t("animations.buttonHover.description"),
        category: "interaction",
        technologies: ["CSS", "React"],
        component: ButtonHover,
        featured: true
    },
    {
        id: 2,
        title: i18n.t("animations.waveText.title"),
        description: i18n.t("animations.waveText.description"),
        category: "typography",
        technologies: ["CSS", "React"],
        component: WaveText,
        featured: true
    },
    {
        id: 3,
        title: i18n.t("animations.loadingSpinner.title"),
        description: i18n.t("animations.loadingSpinner.description"),
        category: "loading",
        technologies: ["CSS"],
        component: LoadingSpinner
    },
    {
        id: 4,
        title: i18n.t("animations.cardFlip.title"),
        description: i18n.t("animations.cardFlip.description"),
        category: "3d",
        technologies: ["CSS", "3D Transform"],
        component: CardFlip
    },
    {
        id: 5,
        title: i18n.t("animations.progressBar.title"),
        description: i18n.t("animations.progressBar.description"),
        category: "interaction",
        technologies: ["CSS", "React"],
        component: ProgressBar
    },
    {
        id: 6,
        title: i18n.t("animations.floatingHearts.title"),
        description: i18n.t("animations.floatingHearts.description"),
        category: "particle",
        technologies: ["CSS"],
        component: FloatingHearts
    },
    {
        id: 7,
        title: i18n.t("animations.morphingShapes.title"),
        description: i18n.t("animations.morphingShapes.description"),
        category: "svg",
        technologies: ["SVG", "CSS"],
        component: MorphingShapes,
        featured: true
    },
    {
        id: 8,
        title: i18n.t("animations.particleSystem.title"),
        description: i18n.t("animations.particleSystem.description"),
        category: "canvas",
        technologies: ["Canvas", "JavaScript"],
        component: ParticleSystem
    },
    {
        id: 9,
        title: i18n.t("animations.scrollReveal.title"),
        description: i18n.t("animations.scrollReveal.description"),
        category: "scroll",
        technologies: ["CSS", "Intersection Observer"],
        component: ScrollReveal
    }
];

export const animations = getAnimations();

export const getAnimationById = (id: number): AnimationData | undefined => {
    return animations.find(anim => anim.id === id);
};

export const getAnimationsByCategory = (category: string, animationsList: AnimationData[] = animations): AnimationData[] => {
    if (category === "all") return animationsList;
    return animationsList.filter(anim => anim.category === category);
};

export const getFeaturedAnimations = (): AnimationData[] => {
    return animations.filter(anim => anim.featured);
};
