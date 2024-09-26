package com.aluguel_carros.demo.service;

import java.util.List;

import com.aluguel_carros.demo.entity.Empregadora;

public interface EmpregadoraService {

    void addEmpregadora(Empregadora empregadora);

    List<Empregadora> getAllEmpregadoras();

    Empregadora getEmpregadoraById(Integer id);

    void updateEmpregadora(Integer id, Empregadora empregadora);

    void deleteEmpregadora(Integer id);
    
}
