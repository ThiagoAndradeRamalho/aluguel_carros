package com.aluguel_carros.demo.service;

import java.util.List;

import com.aluguel_carros.demo.entity.Automovel;

public interface AutomovelService {

    void addAutomovel(Automovel automovel);

    List<Automovel> getAllAutomoveis();

    Automovel getAutomovelById(Integer id);

    void updateAutomovel(Integer id, Automovel automovel);

    void deleteAutomovel(Integer id);




}
