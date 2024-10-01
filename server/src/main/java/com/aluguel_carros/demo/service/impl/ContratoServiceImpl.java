package com.aluguel_carros.demo.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aluguel_carros.demo.dto.ContratoDTO;
import com.aluguel_carros.demo.model.Contrato;
import com.aluguel_carros.demo.repository.ContratoRepository;
import com.aluguel_carros.demo.service.AgenteService;
import com.aluguel_carros.demo.service.AutomovelService;
import com.aluguel_carros.demo.service.ClienteService;
import com.aluguel_carros.demo.service.ContratoService;

@Service
public class ContratoServiceImpl implements ContratoService {

    @Autowired
    private ContratoRepository contratoRepository;

    @Autowired
    private AgenteService agenteService;

    @Autowired
    private AutomovelService automovelService;

    @Autowired
    private ClienteService clienteService;

    @Override
    public void addContrato(Contrato contrato) {
        contratoRepository.save(contrato);
    }

    @Override
    public List<Contrato> getAllContratos() {
        return contratoRepository.findAll();
    }

    @Override
    public Contrato getContratoById(Integer id) {
        return contratoRepository.findById(id).orElse(null);
    }

    @Override
    public void updateContrato(Integer id, Contrato contrato) {
        if (contratoRepository.existsById(id)) {
            contrato.setId(id);
            contratoRepository.save(contrato);
        }
    }

    @Override
    public void deleteContrato(Integer id) {
        contratoRepository.deleteById(id);
    }

    @Override
    public ContratoDTO convertToDTO(Contrato contrato) {
        ContratoDTO dto = new ContratoDTO();
        dto.setId(contrato.getId());
        dto.setTipoRegistro(contrato.getTipoRegistro());
        dto.setAssociadoCredito(contrato.isAssociadoCredito());
        dto.setAgenteId(contrato.getAgente().getId());
        dto.setAutomovelId(contrato.getAutomovel().getId());
        dto.setClienteId(contrato.getCliente().getId());
        return dto;
    }

    @Override
    public Contrato convertToEntity(ContratoDTO dto) {
        Contrato contrato = new Contrato();
        contrato.setId(dto.getId());
        contrato.setTipoRegistro(dto.getTipoRegistro());
        contrato.setAssociadoCredito(dto.isAssociadoCredito());
        contrato.setAgente(agenteService.getAgenteById(dto.getAgenteId()));
        contrato.setAutomovel(automovelService.getAutomovelById(dto.getAutomovelId()));
        contrato.setCliente(clienteService.getClienteById(dto.getClienteId()));
        return contrato;
    }
}
