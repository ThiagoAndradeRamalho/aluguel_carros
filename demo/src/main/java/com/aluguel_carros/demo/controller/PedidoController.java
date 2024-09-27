package com.aluguel_carros.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.aluguel_carros.demo.model.Pedido;
import com.aluguel_carros.demo.service.PedidoService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/pedido")
public class PedidoController {
    @Autowired
    private PedidoService pedidoService;

    @PostMapping("/add")
    public ResponseEntity<String> addPedido(@RequestBody Pedido pedido) {
        try {
            pedidoService.addPedido(pedido);
             return ResponseEntity.status(HttpStatus.CREATED).body("Pedido criado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao criar Pedido: " + e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<List<Pedido>> getPedidos() {
        try {
            List<Pedido> pedidos = pedidoService.getAllPedidos();
    
            if (pedidos.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
            } else {
                return ResponseEntity.status(HttpStatus.OK).body(pedidos);
            }
    
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pedido> getPedido(@PathVariable Integer id) {
        try {
            Pedido pedido = pedidoService.getPedidoById(id);

            if(pedido == null){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }else{
                return ResponseEntity.status(HttpStatus.OK).body(pedido);
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updatePedido(@PathVariable Integer id, @RequestBody Pedido pedido) {
        try {
            pedidoService.updatePedido(id,pedido);
             return ResponseEntity.status(HttpStatus.CREATED).body("Pedido atualizado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao atualizar Pedido: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePedido(@PathVariable Integer id){

        try {
            pedidoService.deletePedido(id);
             return ResponseEntity.status(HttpStatus.CREATED).body("Pedido deleatdo com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao deletar Pedido: " + e.getMessage());
        }

    }  
}
