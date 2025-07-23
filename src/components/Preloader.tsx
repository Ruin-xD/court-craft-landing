import { useEffect, useState } from 'react';
import basketballLogo from '@/assets/basketball-logo.png';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader = ({ onLoadingComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero">
      <div className="text-center">
        <div className="mb-8">
          <img
            src={basketballLogo}
            alt="Basketball Logo"
            className="w-32 h-32 mx-auto basketball-bounce basketball-spin"
          />
        </div>
        
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-white mb-2">HoopCraft</h1>
          <p className="text-xl text-white/80">Premium Basketball Manufacturing</p>
        </div>

        <div className="w-64 mx-auto">
          <div className="w-full bg-white/20 rounded-full h-2 mb-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/60 text-sm">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;