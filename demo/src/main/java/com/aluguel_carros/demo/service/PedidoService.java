package com.aluguel_carros.demo.service;

import java.util.List;

import com.aluguel_carros.demo.model.Pedido;

public interface PedidoService {

    void addPedido(Pedido pedido);

    List<Pedido> getAllPedidos();

    Pedido getPedidoById(Integer id);

    void updatePedido(Integer id, Pedido pedido);

    void deletePedido(Integer id);

}
