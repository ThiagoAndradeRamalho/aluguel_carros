package com.aluguel_carros.demo.service;

import java.util.List;

import com.aluguel_carros.demo.model.Agente;

public interface AgenteService {

    void addAgente(Agente agente);

    List<Agente> getAllAgentes();

    Agente getAgenteById(Integer id);

    void updateAgente(Integer id, Agente agente);

    void deleteAgente(Integer id);

}
