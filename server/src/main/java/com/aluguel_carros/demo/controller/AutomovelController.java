package com.aluguel_carros.demo.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.aluguel_carros.demo.dto.AutomovelDTO;
import com.aluguel_carros.demo.model.Automovel;
import com.aluguel_carros.demo.service.AutomovelService;

@RestController
@RequestMapping("/automoveis")
public class AutomovelController {

    @Autowired
    private AutomovelService automovelService;

    @PostMapping("/add")
    public ResponseEntity<String> addAutomovel(@RequestBody AutomovelDTO automovelDTO) {
        try {
            Automovel automovel = automovelService.convertToEntity(automovelDTO);
            automovelService.addAutomovel(automovel);
            return ResponseEntity.status(HttpStatus.CREATED).body("Automóvel criado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao criar Automóvel: " + e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<List<AutomovelDTO>> getAutomoveis() {
        try {
            List<Automovel> automoveis = automovelService.getAllAutomoveis();
            List<AutomovelDTO> automoveisDTO = automoveis.stream()
                .map(automovelService::convertToDTO)
                .collect(Collectors.toList());
            return ResponseEntity.ok(automoveisDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<AutomovelDTO> getAutomovel(@PathVariable Integer id) {
        try {
            Automovel automovel = automovelService.getAutomovelById(id);
            if (automovel == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            } else {
                return ResponseEntity.ok(automovelService.convertToDTO(automovel));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateAutomovel(@PathVariable Integer id, @RequestBody AutomovelDTO automovelDTO) {
        try {
            Automovel automovel = automovelService.convertToEntity(automovelDTO);
            automovelService.updateAutomovel(id, automovel);
            return ResponseEntity.ok("Automóvel atualizado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao atualizar Automóvel: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAutomovel(@PathVariable Integer id) {
        try {
            automovelService.deleteAutomovel(id);
            return ResponseEntity.ok("Automóvel deletado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao deletar Automóvel: " + e.getMessage());
        }
    }
}
