package com.aluguel_carros.demo.dto;

import lombok.Data;

@Data
public class AutomovelDTO {
    private Integer id;
    private String marca;
    private String modelo;
    private String placa;
    private String ano;
    private String cor;
    private String tipoCombustivel;
    private String tipoCarro;
    private String transmissao;
    private String numeroPortas;
    private String consumoCombustivel;
    private String quilometragemAtual;
    private String velocidadeMaxima;
    private String imagem;
    private boolean disponivel;
}
