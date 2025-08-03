// API Configuration
import { config } from './environment';

const API_BASE_URL = config.API_URL;

export const API_ENDPOINTS = {
  INTERN: `${API_BASE_URL}/api/intern`,
  LEADERBOARD: `${API_BASE_URL}/api/leaderboard`,
  HEALTH: `${API_BASE_URL}/api/health`
};

export default API_BASE_URL; 