import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface AnimationCardProps {
  title: string;
  description: string;
  preview: ReactNode;
  onClick: () => void;
}

const AnimationCard = ({ title, description, preview, onClick }: AnimationCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden cursor-pointer border-border/50 bg-card backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[var(--shadow-glow)] animate-fade-in"
      onClick={onClick}
    >
      <div className="aspect-video relative overflow-hidden">
        {preview}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center animate-scale-in">
            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default AnimationCard;
