package com.aluguel_carros.demo.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.aluguel_carros.demo.dto.ContratoDTO;
import com.aluguel_carros.demo.model.Contrato;
import com.aluguel_carros.demo.service.ContratoService;

@RestController
@RequestMapping("/contratos")
public class ContratoController {

    @Autowired
    private ContratoService contratoService;

    @PostMapping("/add")
    public ResponseEntity<String> addContrato(@RequestBody ContratoDTO contratoDTO) {
        try {
            Contrato contrato = contratoService.convertToEntity(contratoDTO);
            contratoService.addContrato(contrato);
            return ResponseEntity.status(HttpStatus.CREATED).body("Contrato criado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao criar Contrato: " + e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<List<ContratoDTO>> getContratos() {
        try {
            List<Contrato> contratos = contratoService.getAllContratos();
            List<ContratoDTO> contratosDTO = contratos.stream()
                .map(contratoService::convertToDTO)
                .collect(Collectors.toList());
            return ResponseEntity.ok(contratosDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContratoDTO> getContrato(@PathVariable Integer id) {
        try {
            Contrato contrato = contratoService.getContratoById(id);
            if (contrato == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            } else {
                return ResponseEntity.ok(contratoService.convertToDTO(contrato));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateContrato(@PathVariable Integer id, @RequestBody ContratoDTO contratoDTO) {
        try {
            Contrato contrato = contratoService.convertToEntity(contratoDTO);
            contratoService.updateContrato(id, contrato);
            return ResponseEntity.ok("Contrato atualizado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao atualizar Contrato: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteContrato(@PathVariable Integer id) {
        try {
            contratoService.deleteContrato(id);
            return ResponseEntity.ok("Contrato deletado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao deletar Contrato: " + e.getMessage());
        }
    }
}
