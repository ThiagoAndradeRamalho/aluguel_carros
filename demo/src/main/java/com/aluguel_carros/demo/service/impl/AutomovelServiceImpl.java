package com.aluguel_carros.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.aluguel_carros.demo.service.AutomovelService;
import com.aluguel_carros.demo.repository.AutomovelRepository;
import com.aluguel_carros.demo.entity.Automovel;

@Service
public class AutomovelServiceImpl implements AutomovelService{

    @Autowired
    private AutomovelRepository automovelRepository;

    @Override
    public void addAutomovel(Automovel automovel) {
        try {
            automovelRepository.save(automovel);
        } catch (Exception e) {
            throw new Error(e);
        }        
    }

    @Override
    public List<Automovel> getAllAutomoveis() {
        try {
            return automovelRepository.findAll();
        } catch (Exception e) {
            throw new IllegalStateException("Error while "+e);
        }
    }

    @Override
    public Automovel getAutomovelById(Integer id) {
        try {
            Automovel automovel = automovelRepository
            .findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ID Invalido"));

           return automovel;
        } catch (Exception e) {
            throw new IllegalStateException("Error while getting Automovel by id "+id);
        }
    }

    @Override
    public void updateAutomovel(Integer id, Automovel automovel) {
        try {

            if(!getAutomovelById(id).equals(automovel)) {
                automovel.setId(id);
                automovelRepository.save(automovel);
            }

        } catch (Exception e) {
            throw new IllegalStateException("Error while updating Automovel "+automovel);
        }
    }

    @Override
    public void deleteAutomovel(Integer id){
        try {

            Automovel automovel = getAutomovelById(id);

            if(automovel != null){
                automovelRepository.delete(automovel);
            }

        } catch (Exception e) {
            throw new IllegalStateException("Error while deleting id "+id);
        }
    }

}
