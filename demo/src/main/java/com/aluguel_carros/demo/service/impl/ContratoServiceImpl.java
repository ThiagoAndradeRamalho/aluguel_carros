package com.aluguel_carros.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.aluguel_carros.demo.service.ContratoService;
import com.aluguel_carros.demo.model.Contrato;
import com.aluguel_carros.demo.repository.ContratoRepository;

@Service
public class ContratoServiceImpl implements ContratoService{

    @Autowired
    private ContratoRepository contratoRepository;

    @Override
    public void addContrato(Contrato contrato) {
        try {
            contratoRepository.save(contrato);
        } catch (Exception e) {
            throw new Error(e);
        }        
    }

    @Override
    public List<Contrato> getAllContratos() {
        try {
            return contratoRepository.findAll();
        } catch (Exception e) {
            throw new IllegalStateException("Error while "+e);
        }
    }

    @Override
    public Contrato getContratoById(Integer id) {
        try {
            Contrato contrato = contratoRepository
            .findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ID Invalido"));

           return contrato;
        } catch (Exception e) {
            throw new IllegalStateException("Error while getting Contrato by id "+id);
        }
    }

    @Override
    public void updateContrato(Integer id, Contrato contrato) {
        try {

            if(!getContratoById(id).equals(contrato)) {
                contrato.setId(id);
                contratoRepository.save(contrato);
            }

        } catch (Exception e) {
            throw new IllegalStateException("Error while updating Contrato "+contrato);
        }
    }

    @Override
    public void deleteContrato(Integer id){
        try {

            Contrato contrato = getContratoById(id);

            if(contrato != null){
                contratoRepository.delete(contrato);
            }

        } catch (Exception e) {
            throw new IllegalStateException("Error while deleting id "+id);
        }
    }
}
