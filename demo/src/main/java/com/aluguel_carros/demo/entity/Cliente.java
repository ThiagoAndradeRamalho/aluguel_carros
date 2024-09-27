package com.aluguel_carros.demo.entity;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
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
@Table(name = "Cliente")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, unique = true)
    private String rg;
    
    @Column(nullable = false, unique = true)
    private String cpf;

    @Column
    private String endereco;

    @Column
    private String profissao;

    @OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL)
    private Set<Empregadora> enpregadoras = new HashSet<Empregadora>();

    @OneToMany(mappedBy = "cliente")
    private Set<Pedido> pedidos = new HashSet<Pedido>();

    @OneToMany(mappedBy = "cliente")
    private Set<Contrato> contratos = new HashSet<Contrato>();

}
