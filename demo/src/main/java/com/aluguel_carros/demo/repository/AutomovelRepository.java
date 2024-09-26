package com.aluguel_carros.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aluguel_carros.demo.entity.Automovel;

public interface AutomovelRepository extends JpaRepository<Automovel, Integer>{

}
