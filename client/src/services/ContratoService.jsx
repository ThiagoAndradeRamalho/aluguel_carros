import axios from 'axios';

const API_URL = "http://localhost:8080/contratos";

export const ContratoService = {

    addContrato : async (contrato) => {
      try {
        const response = await axios.post(`${API_URL}/add`, contrato);
        return response.data;
      } catch (error) {
        throw new Error('Erro ao criar contrato: ' + error.message);
      }
    },
    
    getAllContratos: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error("Erro ao obter contratos:", error);
            throw error;
        }
    },
    
    getAutomovelById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar automóvel:", error);
            throw error;
        }
    },
}