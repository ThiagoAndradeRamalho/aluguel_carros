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

import com.aluguel_carros.demo.model.Agente;
import com.aluguel_carros.demo.service.AgenteService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/agente")
public class AgenteController {

    @Autowired
    private AgenteService agenteService;

    @PostMapping("/add")
    public ResponseEntity<String> addAgente(@RequestBody Agente agente) {
        try {
            agenteService.addAgente(agente);
             return ResponseEntity.status(HttpStatus.CREATED).body("Agente criado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao criar Agente: " + e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<List<Agente>> getAgentes() {
        try {
            List<Agente> agentes = agenteService.getAllAgentes();
    
            if (agentes.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
            } else {
                return ResponseEntity.status(HttpStatus.OK).body(agentes);
            }
    
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Agente> getAgente(@PathVariable Integer id) {
        try {
            Agente agente = agenteService.getAgenteById(id);

            if(agente == null){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }else{
                return ResponseEntity.status(HttpStatus.OK).body(agente);
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateAgente(@PathVariable Integer id, @RequestBody Agente agente) {
        try {
            agenteService.updateAgente(id,agente);
             return ResponseEntity.status(HttpStatus.CREATED).body("Agente atualizado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao atualizar Agente: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAgente(@PathVariable Integer id){

        try {
            agenteService.deleteAgente(id);
             return ResponseEntity.status(HttpStatus.CREATED).body("Agente deleatdo com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao deletar Agente: " + e.getMessage());
        }

    }    

}
