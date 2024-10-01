package com.aluguel_carros.demo.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aluguel_carros.demo.dto.ClienteDTO;
import com.aluguel_carros.demo.model.Cliente;
import com.aluguel_carros.demo.model.Contrato;
import com.aluguel_carros.demo.model.Empregadora;
import com.aluguel_carros.demo.model.Pedido;
import com.aluguel_carros.demo.repository.ClienteRepository;
import com.aluguel_carros.demo.service.ClienteService;

@Service
public class ClienteServiceImpl implements ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public void addCliente(Cliente cliente) {
        clienteRepository.save(cliente);
    }

    @Override
    public List<Cliente> getAllClientes() {
        return clienteRepository.findAll();
    }

    @Override
    public Cliente getClienteById(Integer id) {
        return clienteRepository.findById(id).orElse(null);
    }

    @Override
    public void updateCliente(Integer id, Cliente cliente) {
        if (clienteRepository.existsById(id)) {
            cliente.setId(id);
            clienteRepository.save(cliente);
        }
    }

    @Override
    public void deleteCliente(Integer id) {
        clienteRepository.deleteById(id);
    }

    @Override
    public ClienteDTO convertToDTO(Cliente cliente) {
        ClienteDTO dto = new ClienteDTO();
        dto.setId(cliente.getId());
        dto.setNome(cliente.getNome());
        dto.setRg(cliente.getRg());
        dto.setCpf(cliente.getCpf());
        dto.setEndereco(cliente.getEndereco());
        dto.setProfissao(cliente.getProfissao());

        // Adiciona IDs das empregadoras, pedidos e contratos
        for (Empregadora empregadora : cliente.getEnpregadoras()) {
            dto.getEmpregadorasIds().add(empregadora.getId());
        }
        for (Pedido pedido : cliente.getPedidos()) {
            dto.getPedidosIds().add(pedido.getId());
        }
        for (Contrato contrato : cliente.getContratos()) {
            dto.getContratosIds().add(contrato.getId());
        }

        return dto;
    }

    @Override
    public Cliente convertToEntity(ClienteDTO dto) {
        // Implementação do método convertToEntity
        Cliente cliente = new Cliente();
        cliente.setId(dto.getId());
        cliente.setNome(dto.getNome());
        cliente.setRg(dto.getRg());
        cliente.setCpf(dto.getCpf());
        cliente.setEndereco(dto.getEndereco());
        cliente.setProfissao(dto.getProfissao());
        return cliente;
    }
}
