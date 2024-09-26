package com.aluguel_carros.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.aluguel_carros.demo.service.EmpregadoraService;
import com.aluguel_carros.demo.repository.EmpregadoraRepository;
import com.aluguel_carros.demo.entity.Empregadora;

@Service
public class EmpregadoraServiceImpl implements EmpregadoraService{

    @Autowired
    private EmpregadoraRepository empregadoraRepository;

    @Override
    public void addEmpregadora(Empregadora empregadora) {
        try {
            empregadoraRepository.save(empregadora);
        } catch (Exception e) {
            throw new Error(e);
        }        
    }

    @Override
    public List<Empregadora> getAllEmpregadoras() {
        try {
            return empregadoraRepository.findAll();
        } catch (Exception e) {
            throw new IllegalStateException("Error while "+e);
        }
    }

    @Override
    public Empregadora getEmpregadoraById(Integer id) {
        try {
            Empregadora empregadora = empregadoraRepository
            .findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ID Invalido"));

           return empregadora;
        } catch (Exception e) {
            throw new IllegalStateException("Error while getting Empregadora by id "+id);
        }
    }

    @Override
    public void updateEmpregadora(Integer id, Empregadora empregadora) {
        try {

            if(!getEmpregadoraById(id).equals(empregadora)) {
                empregadora.setId(id);
                empregadoraRepository.save(empregadora);
            }

        } catch (Exception e) {
            throw new IllegalStateException("Error while updating Empregadora "+empregadora);
        }
    }

    @Override
    public void deleteEmpregadora(Integer id){
        try {

            Empregadora empregadora = getEmpregadoraById(id);

            if(empregadora != null){
                empregadoraRepository.delete(empregadora);
            }

        } catch (Exception e) {
            throw new IllegalStateException("Error while deleting id "+id);
        }
    }

}
