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

import com.aluguel_carros.demo.entity.Automovel;
import com.aluguel_carros.demo.service.AutomovelService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/automovel")
public class AutomovelController {

    @Autowired
    private AutomovelService automovelService;

    @PostMapping("/add")
    public ResponseEntity<String> addAutomovel(@RequestBody Automovel automovel) {
        try {
            automovelService.addAutomovel(automovel);
             return ResponseEntity.status(HttpStatus.CREATED).body("Automovel criado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao criar Automovel: " + e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<List<Automovel>> getAutomoveis() {
        try {
            List<Automovel> automoveis = automovelService.getAllAutomoveis();
    
            if (automoveis.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
            } else {
                return ResponseEntity.status(HttpStatus.OK).body(automoveis);
            }
    
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Automovel> getAutomovel(@PathVariable Integer id) {
        try {
            Automovel automovel = automovelService.getAutomovelById(id);

            if(automovel == null){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }else{
                return ResponseEntity.status(HttpStatus.OK).body(automovel);
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateAutomovel(@PathVariable Integer id, @RequestBody Automovel automovel) {
        try {
            automovelService.updateAutomovel(id,automovel);
             return ResponseEntity.status(HttpStatus.CREATED).body("Automovel atualizado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao atualizar Automovel: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAutomovel(@PathVariable Integer id){

        try {
            automovelService.deleteAutomovel(id);
             return ResponseEntity.status(HttpStatus.CREATED).body("Automovel deleatdo com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao deletar Automovel: " + e.getMessage());
        }

    }   
}
