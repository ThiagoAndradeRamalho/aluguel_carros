// src/services/AutomoveisService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const AutomoveisService = {
    addAutomovel: async (automovel) => {
        try {
            const response = await axios.post(`${API_URL}/automoveis/add`, automovel);
            return response.data;
        } catch (error) {
            console.error("Erro ao adicionar automóvel:", error);
            throw error;
        }
    },

    getAllautomovel: async () => {
        try {
            const response = await axios.get(`${API_URL}/automoveis`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar automóveis:", error);
            throw error;
        }
    },

    getAutomovelById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/automoveis/${id}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar automovel:", error);
            throw error;
        }
    },

    updateAutomovel: async (id, automovel) => {
        try {
            const response = await axios.put(`${API_URL}/automoveis/update/${id}`, automovel);
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar automovel:", error);
            throw error;
        }
    }
};
