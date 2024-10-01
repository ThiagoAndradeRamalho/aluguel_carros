package com.aluguel_carros.demo.dto;

import java.util.HashSet;
import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClienteDTO {

    private Integer id;
    private String nome;
    private String rg;
    private String cpf;
    private String endereco;
    private String profissao;

    private Set<Integer> empregadorasIds = new HashSet<>();
    private Set<Integer> pedidosIds = new HashSet<>();
    private Set<Integer> contratosIds = new HashSet<>();
}
