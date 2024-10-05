// src/services/pedidoService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/pedido';

export const PedidoService = {

    createPedido: async (pedido) => {
        try {
            const response = await axios.post(`${API_URL}/add`, pedido);
            return response.data;
        } catch (error) {
            console.error("Erro ao criar o pedido:", error);
            throw error;
        }
    },

    getAllPedidos: async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error("Erro ao obter pedidos:", error);
            throw error;
        }
    },

    getPedidoById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao obter o pedido com ID ${id}:`, error);
            throw error;
        }
    },

    updatePedido: async (id, pedido) => {
        try {
            console.log(pedido)
            const response = await axios.put(`${API_URL}/update/${id}`, pedido);
            return response.data;
        } catch (error) {
            console.error(`Erro ao atualizar o pedido com ID ${id}:`, error);
            throw error;
        }
    },

    deletePedido: async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/delete/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao deletar o pedido com ID ${id}:`, error);
            throw error;
        }
    }
};

export default PedidoService;
