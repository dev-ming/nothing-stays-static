import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "@/assets/glass-heart.png";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Gallery", href: "#animations" },
    ];

    const socialLinks = [
        { icon: Github, href: "https://github.com/dev-ming", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/%EB%AF%BC%EC%A7%80-%EA%B9%80-8b606125a/", label: "LinkedIn" },
        { icon: Mail, href: "mailto:ruaaa1307@gmail.com", label: "Email" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-card"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <img src={logo} alt="logo" className="w-8 h-8" />
                        </div>
                        <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent nanum-pen-script-regular">
                            Nothing Stays Static
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links & Language Switcher */}
                    <div className="hidden md:flex items-center space-x-4 px-10">
                        <LanguageSwitcher />
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
                        <nav className="py-4 space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                <div className="flex items-center space-x-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                                <LanguageSwitcher />
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
