// Environment Configuration
const getApiUrl = () => {
  // In production, this will be set by Vercel environment variable
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  
  // Default to localhost for development
  return 'http://localhost:5000';
};

export const config = {
  API_URL: getApiUrl(),
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development'
};

export default config; 