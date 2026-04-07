
import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackUrl?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  className, 
  fallbackUrl = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800',
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    if (!isError) {
      setImgSrc(fallbackUrl);
      setIsError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-neutral-800 ${className}`}>
      <img
        {...props}
        src={imgSrc}
        alt={alt}
        onError={handleError}
        loading="lazy"
        referrerPolicy="no-referrer"
        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110`}
      />
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
           <span className="text-white/50 text-xs italic uppercase tracking-widest">Premium Grill</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;
