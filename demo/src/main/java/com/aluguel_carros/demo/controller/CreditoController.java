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

import com.aluguel_carros.demo.entity.Credito;
import com.aluguel_carros.demo.service.CreditoService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/credito")
public class CreditoController {

    @Autowired
    private CreditoService creditoService;

    @PostMapping("/add")
    public ResponseEntity<String> addCredito(@RequestBody Credito credito) {
        try {
            creditoService.addCredito(credito);
             return ResponseEntity.status(HttpStatus.CREATED).body("Credito criado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao criar Credito: " + e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<List<Credito>> getCreditos() {
        try {
            List<Credito> creditos = creditoService.getAllCreditos();
    
            if (creditos.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
            } else {
                return ResponseEntity.status(HttpStatus.OK).body(creditos);
            }
    
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Credito> getCredito(@PathVariable Integer id) {
        try {
            Credito credito = creditoService.getCreditoById(id);

            if(credito == null){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }else{
                return ResponseEntity.status(HttpStatus.OK).body(credito);
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateCredito(@PathVariable Integer id, @RequestBody Credito credito) {
        try {
            creditoService.updateCredito(id,credito);
             return ResponseEntity.status(HttpStatus.CREATED).body("Credito atualizado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao atualizar Credito: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCredito(@PathVariable Integer id){

        try {
            creditoService.deleteCredito(id);
             return ResponseEntity.status(HttpStatus.CREATED).body("Credito deleatdo com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao deletar Credito: " + e.getMessage());
        }

    }    
}
