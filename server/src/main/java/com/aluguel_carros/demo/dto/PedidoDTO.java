package com.aluguel_carros.demo.dto;

import lombok.Data;

@Data
public class PedidoDTO {
    private Integer id;
    private String status;
    private String dataInicio;
    private String dataFim;
    private Integer clienteId;
    private Integer contratoId;
    private Integer automovelId;

    @Override
    public String toString() {
        return "PedidoDTO{" +
                "id=" + id +
                ", status='" + status + '\'' +
                ", dataInicio='" + dataInicio + '\'' +
                ", dataFim='" + dataFim + '\'' +
                ", clienteId=" + clienteId +
                ", contratoId=" + contratoId +
                ", automovelId=" + automovelId +
                '}';
    }
}
