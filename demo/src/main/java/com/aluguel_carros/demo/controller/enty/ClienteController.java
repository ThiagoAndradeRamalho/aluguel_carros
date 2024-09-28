package com.aluguel_carros.demo.controller.enty;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.aluguel_carros.demo.model.Cliente;
import com.aluguel_carros.demo.service.ClienteService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @PostMapping("/add")
    public ResponseEntity<String> addCliente(@RequestBody Cliente cliente) {
        try {
            clienteService.addCliente(cliente);
             return ResponseEntity.status(HttpStatus.CREATED).body("Cliente criado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao criar cliente: " + e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<List<Cliente>> getClientes() {
        try {
            List<Cliente> clientes = clienteService.getAllClientes();
    
            if (clientes.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
            } else {
                return ResponseEntity.status(HttpStatus.OK).body(clientes);
            }
    
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> getCliente(@PathVariable Integer id) {
        try {
            Cliente cliente = clienteService.getClienteById(id);

            if(cliente == null){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }else{
                return ResponseEntity.status(HttpStatus.OK).body(cliente);
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateCliente(@PathVariable Integer id, @RequestBody Cliente cliente) {
        try {
            clienteService.updateCliente(id,cliente);
             return ResponseEntity.status(HttpStatus.CREATED).body("Cliente atualizado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao atualizar cliente: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCliente(@PathVariable Integer id){

        try {
            clienteService.deleteCliente(id);
             return ResponseEntity.status(HttpStatus.CREATED).body("Cliente deleatdo com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao deletar cliente: " + e.getMessage());
        }

    }    
    
}
