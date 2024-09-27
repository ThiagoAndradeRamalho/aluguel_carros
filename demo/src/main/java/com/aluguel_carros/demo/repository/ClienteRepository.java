package com.aluguel_carros.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aluguel_carros.demo.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer>{

}
