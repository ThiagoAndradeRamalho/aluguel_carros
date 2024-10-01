package com.aluguel_carros.demo.dto;

import lombok.Data;

@Data
public class ContratoDTO {
    private Integer id;
    private String tipoRegistro;
    private boolean associadoCredito;
    private Integer agenteId;
    private Integer automovelId;
    private Integer clienteId;
}
