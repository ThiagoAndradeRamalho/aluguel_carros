package com.aluguel_carros.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aluguel_carros.demo.entity.Contrato;

public interface ContratoRepository extends JpaRepository<Contrato, Integer>{

}
