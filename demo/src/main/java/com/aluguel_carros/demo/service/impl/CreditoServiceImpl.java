package com.aluguel_carros.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.aluguel_carros.demo.service.CreditoService;
import com.aluguel_carros.demo.service.CreditoService;
import com.aluguel_carros.demo.model.Credito;
import com.aluguel_carros.demo.repository.CreditoRepository;

@Service
public class CreditoServiceImpl implements CreditoService{
    
    @Autowired
    private CreditoRepository creditoRepository;

    @Override
    public void addCredito(Credito credito) {
        try {
            creditoRepository.save(credito);
        } catch (Exception e) {
            throw new Error(e);
        }        
    }

    @Override
    public List<Credito> getAllCreditos() {
        try {
            return creditoRepository.findAll();
        } catch (Exception e) {
            throw new IllegalStateException("Error while "+e);
        }
    }

    @Override
    public Credito getCreditoById(Integer id) {
        try {
            Credito credito = creditoRepository
            .findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ID Invalido"));

           return credito;
        } catch (Exception e) {
            throw new IllegalStateException("Error while getting Credito by id "+id);
        }
    }

    @Override
    public void updateCredito(Integer id, Credito credito) {
        try {

            if(!getCreditoById(id).equals(credito)) {
                credito.setId(id);
                creditoRepository.save(credito);
            }

        } catch (Exception e) {
            throw new IllegalStateException("Error while updating Credito "+credito);
        }
    }

    @Override
    public void deleteCredito(Integer id){
        try {

            Credito credito = getCreditoById(id);

            if(credito != null){
                creditoRepository.delete(credito);
            }

        } catch (Exception e) {
            throw new IllegalStateException("Error while deleting id "+id);
        }
    }
}
