import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/glass-heart.png";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/50 bg-gradient-secondary">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <img src={logo} alt="logo" className="w-8 h-8" />
                            </div>
                            <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent nanum-pen-script-regular">
                                Nothing Stays Static
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            다양한 애니메이션 라이브러리와 기법을 연습하고 실험하는 갤러리입니다.
                            CSS, SVG, Canvas, JavaScript, Motion를 활용한 인터랙티브한 애니메이션 작품들을 모아두었습니다.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Quick Links</h3>
                        <div className="space-y-2">
                            {[
                                { name: "Gallery", href: "#animations" }
                            ].map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Contact</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>Seoul, South Korea</p>
                            <p>ruaaa1307@gmail.com</p>
                            {/* <p>+82 10-1234-5678</p> */}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>© {currentYear} Nothing Stays Static. Made with</span>
                        <Heart className="w-4 h-4 text-primary fill-current" />
                        <span>for learning & practice</span>
                    </div>

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={scrollToTop}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                        <ArrowUp className="w-4 h-4 mr-2" />
                        Back to Top
                    </Button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
