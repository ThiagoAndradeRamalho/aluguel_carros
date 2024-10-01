package com.aluguel_carros.demo.model;

import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"pedido", "cliente", "automovel"})
@Table(name = "Contrato")
public class Contrato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String tipoRegistro;

    @Column
    private boolean associadoCredito;

    @OneToOne(mappedBy = "contrato")
    private Pedido pedido;

    @ManyToOne
    @JoinColumn(name = "agente_id", nullable = false)
    private Agente agente;

    @ManyToOne
    @JoinColumn(name = "automovel_id", nullable = false)
    private Automovel automovel;

    @ManyToOne
    @JoinColumn(name = "cliente_id", nullable = false)
    private Cliente cliente;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof Contrato))
            return false;
        Contrato contrato = (Contrato) o;
        return Objects.equals(id, contrato.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
