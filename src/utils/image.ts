/**
 * Utility to generate optimized Unsplash URLs
 * Documentation: https://unsplash.com/documentation#dynamic-image-manipulation
 */

interface UnsplashParams {
  w?: number;
  h?: number;
  fit?: 'clip' | 'crop' | 'facearea' | 'fill' | 'fillmax' | 'max' | 'min' | 'scale';
  q?: number;
  auto?: 'format' | 'compress' | 'enhance';
}

export const getOptimizedUnsplashUrl = (url: string, params: UnsplashParams = {}) => {
  if (!url.includes('unsplash.com')) return url;

  // Remove existing query params
  const baseUrl = url.split('?')[0];
  
  const defaultParams: UnsplashParams = {
    auto: 'format',
    fit: 'crop',
    q: 80,
    w: 1200,
    ...params
  };

  const query = Object.entries(defaultParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return `${baseUrl}?${query}`;
};

export const getUnsplashSrcSet = (url: string) => {
  if (!url.includes('unsplash.com')) return undefined;

  const widths = [400, 640, 800, 1024, 1200, 1600, 2000];
  return widths
    .map(w => `${getOptimizedUnsplashUrl(url, { w })} ${w}w`)
    .join(', ');
};
