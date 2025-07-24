import { useEffect, useState } from 'react';
import basketballIcon from '@/assets/basketball-icon.png';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader = ({ onLoadingComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isSplitting, setIsSplitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(() => {
            setIsSplitting(true);
            setTimeout(() => onLoadingComplete(), 800);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Left Half */}
      <div className={`absolute inset-y-0 left-0 w-1/2 bg-background transition-transform duration-1000 ease-in-out ${isSplitting ? '-translate-x-full' : 'translate-x-0'}`}>
        <div className="flex items-center justify-end h-full pr-4">
          <div className={`text-center transition-all duration-500 ${isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
            <div className="mb-8">
              <img
                src={basketballIcon}
                alt="Basketball Icon"
                className="w-24 h-24 mx-auto animate-spin"
              />
            </div>
            
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground mb-2">HoopCraft</h1>
              <p className="text-lg text-muted-foreground">Premium Basketball</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Half */}
      <div className={`absolute inset-y-0 right-0 w-1/2 bg-background transition-transform duration-1000 ease-in-out ${isSplitting ? 'translate-x-full' : 'translate-x-0'}`}>
        <div className="flex items-center justify-start h-full pl-4">
          <div className={`text-center transition-all duration-500 ${isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
            <div className="w-64 mx-auto">
              <div className="w-full bg-muted rounded-full h-2 mb-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-muted-foreground text-sm">{progress}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;