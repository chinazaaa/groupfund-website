// Admin API service
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://groupfund-backend.onrender.com/api';

// Get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('adminToken') || localStorage.getItem('token');
};

// Make authenticated API request
const apiRequest = async (endpoint, options = {}) => {
  const token = getAuthToken();
  
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : '',
      ...options.headers,
    },
  });

  if (response.status === 401 || response.status === 403) {
    // Unauthorized or forbidden - redirect to login
    localStorage.removeItem('adminToken');
    localStorage.removeItem('token');
    window.location.href = '/admin/login';
    throw new Error('Unauthorized');
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Server error' }));
    throw new Error(error.error || 'Request failed');
  }

  return response.json();
};

export const adminApi = {
  // Users
  getUsers: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/users${queryString ? `?${queryString}` : ''}`);
  },

  getUser: (userId) => {
    return apiRequest(`/admin/users/${userId}`);
  },

  updateUser: (userId, data) => {
    return apiRequest(`/admin/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  deactivateUser: (userId) => {
    return apiRequest(`/admin/users/${userId}/deactivate`, {
      method: 'PUT',
    });
  },

  // Groups
  getGroups: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/groups${queryString ? `?${queryString}` : ''}`);
  },

  getGroupMembers: (groupId) => {
    return apiRequest(`/admin/groups/${groupId}/members`);
  },

  closeGroup: (groupId) => {
    return apiRequest(`/admin/groups/${groupId}/close`, {
      method: 'PUT',
    });
  },

  reopenGroup: (groupId) => {
    return apiRequest(`/groups/${groupId}/reopen`, {
      method: 'PUT',
    });
  },

  // Transactions
  getTransactions: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/transactions${queryString ? `?${queryString}` : ''}`);
  },

  // Contributions
  getContributions: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/contributions${queryString ? `?${queryString}` : ''}`);
  },

  // Notifications
  getNotifications: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/notifications${queryString ? `?${queryString}` : ''}`);
  },

  // Statistics
  getStats: () => {
    return apiRequest('/admin/stats');
  },

  // Contact Submissions
  getContactSubmissions: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/contact-submissions${queryString ? `?${queryString}` : ''}`);
  },

  markContactSubmissionRead: (id, is_read) => {
    return apiRequest(`/admin/contact-submissions/${id}/read`, {
      method: 'PUT',
      body: JSON.stringify({ is_read }),
    });
  },

  deleteContactSubmission: (id) => {
    return apiRequest(`/admin/contact-submissions/${id}`, {
      method: 'DELETE',
    });
  },

  // Waitlist
  getWaitlistEntries: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/waitlist${queryString ? `?${queryString}` : ''}`);
  },

  getWaitlistEntry: (id) => {
    return apiRequest(`/admin/waitlist/${id}`);
  },

  deleteWaitlistEntry: (id) => {
    return apiRequest(`/admin/waitlist/${id}`, {
      method: 'DELETE',
    });
  },

  // Birthdays
  getTodayBirthdays: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/admin/birthdays/today${queryString ? `?${queryString}` : ''}`);
  },

  triggerReminders: () => {
    return apiRequest('/admin/contributions/trigger-reminders', {
      method: 'POST',
    });
  },

  triggerBirthdayWishes: () => {
    return apiRequest('/admin/birthdays/trigger-birthday-wishes', {
      method: 'POST',
    });
  },

  sendMonthlyNewsletter: () => {
    return apiRequest('/admin/birthdays/send-monthly-newsletter', {
      method: 'POST',
    });
  },

  triggerOverdueReminders: () => {
    return apiRequest('/admin/contributions/trigger-overdue-reminders', {
      method: 'POST',
    });
  },

  sendNotifications: (userId) => {
    return apiRequest(`/admin/birthdays/${userId}/send-notifications`, {
      method: 'POST',
    });
  },

  // Waitlist Actions
  sendBetaInvitations: () => {
    return apiRequest('/admin/waitlist/send-beta-invitations', {
      method: 'POST',
    });
  },

  testBetaInvitation: (data) => {
    return apiRequest('/admin/waitlist/test-beta-invitation', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

