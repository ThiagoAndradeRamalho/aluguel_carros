package com.aluguel_carros.demo.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.aluguel_carros.demo.service.PedidoService;
import com.aluguel_carros.demo.model.Pedido;
import com.aluguel_carros.demo.repository.PedidoRepository;

@Service
public class PedidoServiceImpl implements PedidoService{

    @Autowired
    private PedidoRepository pedidoRepository;

    @Override
    public void addPedido(Pedido pedido) {
        try {
            if (pedido.getDataPedido() == null) {
                pedido.setDataPedido(LocalDateTime.now());
            }
            pedidoRepository.save(pedido);
        } catch (Exception e) {
            throw new Error(e);
        }        
    }

    @Override
    public List<Pedido> getAllPedidos() {
        try {
            return pedidoRepository.findAll();
        } catch (Exception e) {
            throw new IllegalStateException("Error while "+e);
        }
    }

    @Override
    public Pedido getPedidoById(Integer id) {
        try {
            Pedido pedido = pedidoRepository
            .findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ID Invalido"));

           return pedido;
        } catch (Exception e) {
            throw new IllegalStateException("Error while getting Pedido by id "+id);
        }
    }

    @Override
    public void updatePedido(Integer id, Pedido pedido) {
        try {

            

            if(!getPedidoById(id).equals(pedido)) {
                Pedido lastPedido = getPedidoById(id);
                pedido.setId(id);
                pedido.setDataPedido(lastPedido.getDataPedido());
                pedidoRepository.save(pedido);
            }

        } catch (Exception e) {
            throw new IllegalStateException("Error while updating Pedido "+pedido);
        }
    }

    @Override
    public void deletePedido(Integer id){
        try {

            Pedido pedido = getPedidoById(id);

            if(pedido != null){
                pedidoRepository.delete(pedido);
            }

        } catch (Exception e) {
            throw new IllegalStateException("Error while deleting id "+id);
        }
    }

}
