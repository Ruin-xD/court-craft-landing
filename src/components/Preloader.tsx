import { useEffect, useState } from 'react';

const basketballLogo = '/lovable-uploads/5a56fe8b-6168-4009-bee4-03118fb72592.png';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader = ({ onLoadingComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(() => onLoadingComplete(), 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      <div className={`text-center transition-all duration-500 ${isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        <div className="mb-8">
          <img
            src={basketballLogo}
            alt="Basketball Logo"
            className="w-32 h-32 mx-auto basketball-bounce basketball-spin"
          />
        </div>
        
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">HoopCraft</h1>
          <p className="text-xl text-muted-foreground">Premium Basketball Manufacturing</p>
        </div>

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
  );
};

export default Preloader;