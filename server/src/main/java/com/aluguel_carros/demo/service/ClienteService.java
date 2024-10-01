package com.aluguel_carros.demo.service;

import java.util.List;

import com.aluguel_carros.demo.dto.ClienteDTO;
import com.aluguel_carros.demo.model.Cliente;

public interface ClienteService {
    void addCliente(Cliente cliente);
    List<Cliente> getAllClientes();
    Cliente getClienteById(Integer id);
    void updateCliente(Integer id, Cliente cliente);
    void deleteCliente(Integer id);
    ClienteDTO convertToDTO(Cliente cliente);
    Cliente convertToEntity(ClienteDTO dto);
}
