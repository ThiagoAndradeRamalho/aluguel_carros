package com.aluguel_carros.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aluguel_carros.demo.model.Credito;

public interface CreditoRepository extends JpaRepository<Credito, Integer>{

}
