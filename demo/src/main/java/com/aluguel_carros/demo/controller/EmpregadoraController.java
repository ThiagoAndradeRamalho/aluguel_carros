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

import com.aluguel_carros.demo.model.Empregadora;
import com.aluguel_carros.demo.service.EmpregadoraService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/empregadora")
public class EmpregadoraController {
    
    @Autowired
    private EmpregadoraService empregadoraService;

    @PostMapping("/add")
    public ResponseEntity<String> addEmpregadora(@RequestBody Empregadora empregadora) {
        try {
            empregadoraService.addEmpregadora(empregadora);
             return ResponseEntity.status(HttpStatus.CREATED).body("Empregadora criado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao criar emoregadora: " + e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<List<Empregadora>> getEmpregadoras() {
        try {
            List<Empregadora> empregadoras = empregadoraService.getAllEmpregadoras();
    
            if (empregadoras.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
            } else {
                return ResponseEntity.status(HttpStatus.OK).body(empregadoras);
            }
    
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Empregadora> getEmpregadora(@PathVariable Integer id) {
        try {
            Empregadora empregadora = empregadoraService.getEmpregadoraById(id);

            if(empregadora == null){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }else{
                return ResponseEntity.status(HttpStatus.OK).body(empregadora);
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateEmpregadora(@PathVariable Integer id, @RequestBody Empregadora empregadora) {
        try {
            empregadoraService.updateEmpregadora(id,empregadora);
             return ResponseEntity.status(HttpStatus.CREATED).body("Empregadora atualizado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao atualizar empregadora: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmpregadora(@PathVariable Integer id){

        try {
            empregadoraService.deleteEmpregadora(id);
             return ResponseEntity.status(HttpStatus.CREATED).body("Empregadora deleatdo com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao deletar empregadora: " + e.getMessage());
        }

    }  


}
