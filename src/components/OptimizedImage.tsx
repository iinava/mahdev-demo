import React, { useState } from 'react';
import { getOptimizedUnsplashUrl, getUnsplashSrcSet } from '../utils/image';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string; // e.g. "aspect-[16/9]"
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  aspectRatio = "aspect-auto",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const optimizedSrc = getOptimizedUnsplashUrl(src);
  const srcSet = getUnsplashSrcSet(src);

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {/* Background color for placeholder */}
      <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover relative z-10 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
