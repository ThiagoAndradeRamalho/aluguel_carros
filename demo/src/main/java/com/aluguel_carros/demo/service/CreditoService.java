package com.aluguel_carros.demo.service;

import java.util.List;

import com.aluguel_carros.demo.entity.Credito;

public interface CreditoService {

    void addCredito(Credito credito);

    List<Credito> getAllCreditos();

    Credito getCreditoById(Integer id);

    void updateCredito(Integer id, Credito credito);

    void deleteCredito(Integer id);

}
