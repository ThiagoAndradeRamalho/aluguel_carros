package com.aluguel_carros.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aluguel_carros.demo.model.Agente;

public interface AgenteRepository extends JpaRepository<Agente, Integer>{
    
}
