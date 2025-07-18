const API_URL = import.meta.env.VITE_API_URL;

// Enhanced fetch wrapper
const apiFetch = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API call failed: ${endpoint}`, error);
    throw error; // Re-throw for components to handle
  }
};

// Auth methods
export const login = async (credentials) => {
  return apiFetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials)
  });
};

// New stats endpoint
export const getStats = async () => {
  return apiFetch('/stats');
};