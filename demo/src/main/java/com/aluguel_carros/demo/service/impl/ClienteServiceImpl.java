package com.aluguel_carros.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.server.ResponseStatusException;

import com.aluguel_carros.demo.service.ClienteService;
import com.aluguel_carros.demo.repository.ClienteRepository;
import com.aluguel_carros.demo.entity.Cliente;

@Service
public class ClienteServiceImpl implements ClienteService{

    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public void addCliente(Cliente cliente) {
        try {
            clienteRepository.save(cliente);
        } catch (Exception e) {
            throw new Error(e);
        }        
    }

    @Override
    public List<Cliente> getAllClientes() {
        try {
            return clienteRepository.findAll();
        } catch (Exception e) {
            throw new IllegalStateException("Error while "+e);
        }
    }

    @Override
    public Cliente getClienteById(Integer id) {
        try {
            Cliente cliente = clienteRepository
            .findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ID Invalido"));

           return cliente;
        } catch (Exception e) {
            throw new IllegalStateException("Error while getting Cliente by id "+id);
        }
    }

    @Override
    public void updateCliente(Integer id, Cliente cliente) {
        try {

            if(!getClienteById(id).equals(cliente)) {
                cliente.setId(id);
                clienteRepository.save(cliente);
            }

        } catch (Exception e) {
            throw new IllegalStateException("Error while updating Cliente "+cliente);
        }
    }

    @Override
    public void deleteCliente(Integer id){
        try {

            Cliente cliente = getClienteById(id);

            if(cliente != null){
                clienteRepository.delete(cliente);
            }

        } catch (Exception e) {
            throw new IllegalStateException("Error while deleting id "+id);
        }
    }
    
}
