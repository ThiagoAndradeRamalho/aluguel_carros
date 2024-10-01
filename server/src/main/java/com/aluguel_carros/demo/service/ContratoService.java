package com.aluguel_carros.demo.service;

import java.util.List;

import com.aluguel_carros.demo.dto.ContratoDTO;
import com.aluguel_carros.demo.model.Contrato;

public interface ContratoService {
    void addContrato(Contrato contrato);
    List<Contrato> getAllContratos();
    Contrato getContratoById(Integer id);
    void updateContrato(Integer id, Contrato contrato);
    void deleteContrato(Integer id);
    ContratoDTO convertToDTO(Contrato contrato);
    Contrato convertToEntity(ContratoDTO dto);
}
