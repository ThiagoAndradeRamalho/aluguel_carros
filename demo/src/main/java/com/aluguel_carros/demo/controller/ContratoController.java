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

import com.aluguel_carros.demo.entity.Contrato;
import com.aluguel_carros.demo.service.ContratoService;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/contrato")
public class ContratoController {

    @Autowired
    private ContratoService contratoService;

    @PostMapping("/add")
    public ResponseEntity<String> addContrato(@RequestBody Contrato contrato) {
        try {
            contratoService.addContrato(contrato);
             return ResponseEntity.status(HttpStatus.CREATED).body("Contrato criado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao criar Contrato: " + e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<List<Contrato>> getContratos() {
        try {
            List<Contrato> contratos = contratoService.getAllContratos();
    
            if (contratos.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
            } else {
                return ResponseEntity.status(HttpStatus.OK).body(contratos);
            }
    
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contrato> getContrato(@PathVariable Integer id) {
        try {
            Contrato contrato = contratoService.getContratoById(id);

            if(contrato == null){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }else{
                return ResponseEntity.status(HttpStatus.OK).body(contrato);
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateContrato(@PathVariable Integer id, @RequestBody Contrato contrato) {
        try {
            contratoService.updateContrato(id,contrato);
             return ResponseEntity.status(HttpStatus.CREATED).body("Contrato atualizado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao atualizar Contrato: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteContrato(@PathVariable Integer id){

        try {
            contratoService.deleteContrato(id);
             return ResponseEntity.status(HttpStatus.CREATED).body("Contrato deleatdo com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao deletar Contrato: " + e.getMessage());
        }

    }   

}
