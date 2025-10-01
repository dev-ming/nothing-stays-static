import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface AnimationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  videoUrl: string;
}

const AnimationModal = ({ isOpen, onClose, title, description, videoUrl }: AnimationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 gap-0 bg-card/95 backdrop-blur-xl border-border/50">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full p-2 bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
          <div className="aspect-video bg-background/50 flex items-center justify-center">
            <video 
              src={videoUrl} 
              controls 
              autoPlay
              className="w-full h-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="p-6 space-y-3">
          <DialogTitle className="text-2xl font-bold text-foreground">
            {title}
          </DialogTitle>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnimationModal;
