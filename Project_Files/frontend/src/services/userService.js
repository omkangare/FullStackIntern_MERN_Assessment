import apiClient from './api';

// Get all users with pagination and search
export const getUsers = async (page = 1, limit = 10, search = '', status = '') => {
  const response = await apiClient.get('/users', {
    params: { page, limit, search, status }
  });
  return response.data;
};

// Get user by ID
export const getUserById = async (id) => {
  const response = await apiClient.get(`/users/${id}`);
  return response.data;
};

// Create user
export const createUser = async (userData) => {
  const formData = new FormData();
  Object.keys(userData).forEach(key => {
    if (userData[key] !== null && userData[key] !== undefined) {
      formData.append(key, userData[key]);
    }
  });

  const response = await apiClient.post('/users', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// Update user
export const updateUser = async (id, userData) => {
  const formData = new FormData();
  Object.keys(userData).forEach(key => {
    if (userData[key] !== null && userData[key] !== undefined) {
      formData.append(key, userData[key]);
    }
  });

  const response = await apiClient.put(`/users/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// Update user status
export const updateUserStatus = async (id, status) => {
  const response = await apiClient.patch(`/users/${id}/status`, { status });
  return response.data;
};

// Delete user
export const deleteUser = async (id) => {
  const response = await apiClient.delete(`/users/${id}`);
  return response.data;
};

// Export to CSV
export const exportToCSV = async (search = '', status = '') => {
  const response = await apiClient.get('/users/export/csv', {
    params: { search, status },
    responseType: 'blob'
  });
  
  // Create download link
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `users_${new Date().getTime()}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
};
