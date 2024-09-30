import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // URL base da API
});

// Exemplo de uma chamada GET
export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Exemplo de uma chamada POST
export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
