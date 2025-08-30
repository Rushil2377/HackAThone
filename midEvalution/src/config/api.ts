// Google Maps API configuration
export const GOOGLE_MAPS_API_KEY = "AIzaSyB6RjjvabBqSEbZNJBktfBVjyixeb8wpUE";

// API endpoints and configurations
export const API_CONFIG = {
  googleMaps: {
    apiKey: GOOGLE_MAPS_API_KEY,
    libraries: ['places', 'geometry'] as const,
  },
} as const;