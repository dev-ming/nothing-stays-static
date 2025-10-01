import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Code, Copy, Check, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getAnimationById } from "@/lib/animations";
import { extractCodeInDevelopment } from "../lib/codeExtractor";

const AnimationDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
    const [componentCode, setComponentCode] = useState<string>("");
    const [cssCode, setCssCode] = useState<string>("");
    const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

    // 페이지 로드 시 맨 위로 스크롤
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // 애니메이션 데이터 가져오기
    const animation = getAnimationById(Number(id));

    console.log(animation);

    // 컴포넌트 코드 추출
    useEffect(() => {
        if (animation) {
            const componentName = animation.component.name;
            extractCodeInDevelopment(componentName).then(({ componentCode, cssCode }) => {
                setComponentCode(componentCode);
                setCssCode(cssCode);
            });
        }
        console.log(componentCode);
        console.log(cssCode);
    }, [animation]);

    // 애니메이션을 찾을 수 없는 경우
    if (!animation) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-4">애니메이션을 찾을 수 없습니다</h1>
                    <Button onClick={() => navigate('/')}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        홈으로 돌아가기
                    </Button>
                </div>
            </div>
        );
    }

    const copyToClipboard = async (text: string, type: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedCode(type);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error('복사 실패:', err);
        }
    };

    const AnimationComponent = animation.component;

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            뒤로가기
                        </Button>
                        <div className="flex items-center gap-2">
                            {animation.demoUrl && (
                                <Button variant="outline" size="sm" asChild>
                                    <a href={animation.demoUrl} target="_blank" rel="noopener noreferrer">
                                        <Code className="w-4 h-4 mr-2" />
                                        데모
                                    </a>
                                </Button>
                            )}
                            {animation.githubUrl && (
                                <Button variant="outline" size="sm" asChild>
                                    <a href={animation.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Code className="w-4 h-4 mr-2" />
                                        GitHub
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Animation Preview */}
                    <div className="space-y-6">
                        <Card className="overflow-hidden relative">
                            <CardContent className="p-0">
                                <div className="aspect-video bg-gradient-to-br from-secondary/30 to-accent/20 relative">
                                    <AnimationComponent />
                                    {/* 전체보기 버튼 */}
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                                        onClick={() => setIsFullscreenOpen(true)}
                                    >
                                        <Maximize2 className="w-4 h-4 mr-2" />
                                        전체보기
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Animation Info */}
                        <Card>
                            <CardContent className="p-6">
                                <h1 className="text-3xl font-bold text-foreground mb-4">{animation.title}</h1>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {animation.description}
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">카테고리</h3>
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                            {animation.category}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">기술 스택</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {animation.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Code Tabs */}
                    <div className="space-y-6">
                        <Card>
                            <CardContent className="p-6">
                                <Tabs defaultValue="component" className="w-full">
                                    <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="component">컴포넌트</TabsTrigger>
                                        <TabsTrigger value="css">스타일</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="component" className="mt-4">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-semibold text-foreground">React 컴포넌트</h3>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => copyToClipboard(componentCode, 'component')}
                                                >
                                                    {copiedCode === 'component' ? (
                                                        <Check className="w-4 h-4 mr-2" />
                                                    ) : (
                                                        <Copy className="w-4 h-4 mr-2" />
                                                    )}
                                                    {copiedCode === 'component' ? '복사됨' : '복사'}
                                                </Button>
                                            </div>
                                            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                                                <code className="text-foreground">{componentCode}</code>
                                            </pre>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="css" className="mt-4">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-semibold text-foreground">CSS 스타일</h3>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => copyToClipboard(cssCode, 'css')}
                                                >
                                                    {copiedCode === 'css' ? (
                                                        <Check className="w-4 h-4 mr-2" />
                                                    ) : (
                                                        <Copy className="w-4 h-4 mr-2" />
                                                    )}
                                                    {copiedCode === 'css' ? '복사됨' : '복사'}
                                                </Button>
                                            </div>
                                            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                                                <code className="text-foreground">{cssCode}</code>
                                            </pre>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>

                        {/* Usage Instructions */}
                        <Card>
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-foreground mb-4">사용 방법</h3>
                                <div className="space-y-3 text-sm text-muted-foreground">
                                    <p>1. 위의 코드를 복사하여 프로젝트에 추가하세요.</p>
                                    <p>2. 필요한 의존성을 설치하세요 (React, CSS 등).</p>
                                    <p>3. 컴포넌트를 import하여 사용하세요.</p>
                                    <p>4. 필요에 따라 스타일을 커스터마이징하세요.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* 전체보기 모달 */}
            <Dialog open={isFullscreenOpen} onOpenChange={setIsFullscreenOpen}>
                <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0">
                    <DialogHeader className="p-6 pb-0">
                        <div className="flex items-center justify-between">
                            <DialogTitle className="text-2xl font-bold text-foreground">
                                {animation.title}
                            </DialogTitle>
                        </div>
                    </DialogHeader>
                    <div className="flex-1 p-6 pt-4">
                        <div className="w-full h-full min-h-[70vh] flex items-center justify-center">
                            <div className="w-full h-full">
                                <AnimationComponent />
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AnimationDetail;
