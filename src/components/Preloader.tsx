import { useEffect, useState } from 'react';

const basketballLogo = '/lovable-uploads/5a56fe8b-6168-4009-bee4-03118fb72592.png';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader = ({ onLoadingComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showThrow, setShowThrow] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setShowThrow(true);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => onLoadingComplete(), 1000);
          }, 1500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-1000 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      {showThrow ? (
        // Basketball throwing animation scene
        <div className="relative w-full h-full overflow-hidden">
          {/* Basketball Hoop */}
          <div className="absolute top-20 right-1/4 transform translate-x-1/2">
            <div className="relative">
              {/* Hoop rim */}
              <div className="w-24 h-4 border-4 border-orange-500 rounded-full bg-orange-500/20"></div>
              {/* Net */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-12 border-l-2 border-r-2 border-b-2 border-orange-300 rounded-b-xl opacity-60"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i} 
                      className="absolute top-0 w-0.5 h-8 bg-orange-300 opacity-40"
                      style={{ left: `${12.5 * i}%`, transform: 'rotate(0deg)' }}
                    />
                  ))}
                </div>
              </div>
              {/* Backboard */}
              <div className="absolute -top-8 -left-8 w-40 h-24 bg-white border-4 border-gray-300 rounded-lg shadow-lg">
                <div className="absolute top-12 left-16 w-8 h-6 border-2 border-red-500"></div>
              </div>
            </div>
          </div>

          {/* Basketball with throwing animation */}
          <div className={`absolute bottom-1/4 left-1/4 transition-all duration-1500 ease-in-out ${showThrow ? 'transform -translate-y-96 translate-x-96 scale-50' : ''}`}>
            <img
              src={basketballLogo}
              alt="Basketball"
              className="w-20 h-20 animate-spin"
            />
          </div>

          {/* Brand text during animation */}
          <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-2">HoopCraft</h1>
            <p className="text-2xl text-muted-foreground">Perfect Shot Every Time</p>
          </div>
        </div>
      ) : (
        // Loading progress scene
        <div className={`text-center transition-all duration-500 ${isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
          <div className="mb-8">
            <img
              src={basketballLogo}
              alt="Basketball Logo"
              className="w-32 h-32 mx-auto basketball-bounce"
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
      )}
    </div>
  );
};

export default Preloader;