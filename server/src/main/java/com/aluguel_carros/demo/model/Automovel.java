package com.aluguel_carros.demo.model;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
@JsonIgnoreProperties({"pedidos", "contratos"})
@Table(name = "Automovel")
public class Automovel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String marca;

    @Column
    private String modelo;

    @Column(nullable = false, unique = true)
    private String placa;

    @Column
    private String ano;

    @Column
    private String cor;

    @Column
    private String tipoCombustivel;

    @Column
    private String tipoCarro;

    @Column
    private String transmissao;

    @Column
    private String numeroPortas;

    @Column
    private String consumoCombustivel;

    @Column
    private String quilometragemAtual;

    @Column
    private String velocidadeMaxima;

    @Column
    private String imagem;

    @Column
    private boolean disponivel;

    @OneToMany(mappedBy = "automovel")
    private Set<Pedido> pedidos = new HashSet<Pedido>();

    @OneToMany(mappedBy = "automovel")
    private Set<Contrato> contratos = new HashSet<Contrato>();
}
