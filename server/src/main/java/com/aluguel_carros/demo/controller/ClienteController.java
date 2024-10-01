package com.aluguel_carros.demo.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.aluguel_carros.demo.dto.ClienteDTO;
import com.aluguel_carros.demo.model.Cliente;
import com.aluguel_carros.demo.service.ClienteService;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @PostMapping("/add")
    public ResponseEntity<String> addCliente(@RequestBody ClienteDTO clienteDTO) {
        try {
            Cliente cliente = clienteService.convertToEntity(clienteDTO);
            clienteService.addCliente(cliente);
            return ResponseEntity.status(HttpStatus.CREATED).body("Cliente criado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao criar Cliente: " + e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<List<ClienteDTO>> getClientes() {
        try {
            List<Cliente> clientes = clienteService.getAllClientes();
            List<ClienteDTO> clientesDTO = clientes.stream()
                .map(clienteService::convertToDTO)
                .collect(Collectors.toList());
            return ResponseEntity.ok(clientesDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteDTO> getCliente(@PathVariable Integer id) {
        try {
            Cliente cliente = clienteService.getClienteById(id);
            if (cliente == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            } else {
                return ResponseEntity.ok(clienteService.convertToDTO(cliente));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateCliente(@PathVariable Integer id, @RequestBody ClienteDTO clienteDTO) {
        try {
            Cliente cliente = clienteService.convertToEntity(clienteDTO);
            clienteService.updateCliente(id, cliente);
            return ResponseEntity.ok("Cliente atualizado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao atualizar Cliente: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCliente(@PathVariable Integer id) {
        try {
            clienteService.deleteCliente(id);
            return ResponseEntity.ok("Cliente deletado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao deletar Cliente: " + e.getMessage());
        }
    }
}
