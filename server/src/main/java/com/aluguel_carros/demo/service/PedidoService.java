package com.aluguel_carros.demo.service;

import java.util.List;

import com.aluguel_carros.demo.dto.PedidoDTO;
import com.aluguel_carros.demo.model.Pedido;

public interface PedidoService {

    void addPedido(PedidoDTO pedidoDTO);

    List<Pedido> getAllPedidos();

    Pedido getPedidoById(Integer id);

    void updatePedido(Integer id, PedidoDTO pedidoDTO);

    void deletePedido(Integer id);

    PedidoDTO convertToDTO(Pedido pedido);

    Pedido convertToEntity(PedidoDTO dto);
}
