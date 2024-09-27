package com.aluguel_carros.demo.entity;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Automovel")
public class Automovel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false, unique = true)
    private String matricula;

    @Column
    private String marca;

    @Column
    private String modelo;

    @Column(nullable = false, unique = true)
    private String placa;

    @Column
    private Integer ano;

    @Column
    private boolean disponivel;

    @OneToMany(mappedBy = "automovel")
    private Set<Pedido> pedidos = new HashSet<Pedido>();

    @OneToMany(mappedBy = "automovel")
    private Set<Contrato> contratos = new HashSet<Contrato>();
}
