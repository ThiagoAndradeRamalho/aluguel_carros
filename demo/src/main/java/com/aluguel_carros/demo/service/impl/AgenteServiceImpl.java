package com.aluguel_carros.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.aluguel_carros.demo.service.AgenteService;
import com.aluguel_carros.demo.repository.AgenteRepository;
import com.aluguel_carros.demo.entity.Agente;


@Service
public class AgenteServiceImpl implements AgenteService{
@Autowired
    private AgenteRepository agenteRepository;

    @Override
    public void addAgente(Agente agente) {
        try {
            agenteRepository.save(agente);
        } catch (Exception e) {
            throw new Error(e);
        }        
    }

    @Override
    public List<Agente> getAllAgentes() {
        try {
            return agenteRepository.findAll();
        } catch (Exception e) {
            throw new IllegalStateException("Error while "+e);
        }
    }

    @Override
    public Agente getAgenteById(Integer id) {
        try {
            Agente agente = agenteRepository
            .findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ID Invalido"));

           return agente;
        } catch (Exception e) {
            throw new IllegalStateException("Error while getting Agente by id "+id);
        }
    }

    @Override
    public void updateAgente(Integer id, Agente agente) {
        try {

            if(!getAgenteById(id).equals(agente)) {
                agente.setId(id);
                agenteRepository.save(agente);
            }

        } catch (Exception e) {
            throw new IllegalStateException("Error while updating Agente "+agente);
        }
    }

    @Override
    public void deleteAgente(Integer id){
        try {

            Agente agente = getAgenteById(id);

            if(agente != null){
                agenteRepository.delete(agente);
            }

        } catch (Exception e) {
            throw new IllegalStateException("Error while deleting id "+id);
        }
    }
}
