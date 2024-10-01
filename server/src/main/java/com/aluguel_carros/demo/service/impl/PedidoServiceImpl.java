package com.aluguel_carros.demo.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aluguel_carros.demo.dto.PedidoDTO;
import com.aluguel_carros.demo.model.Pedido;
import com.aluguel_carros.demo.repository.PedidoRepository;
import com.aluguel_carros.demo.service.AutomovelService;
import com.aluguel_carros.demo.service.ClienteService;
import com.aluguel_carros.demo.service.ContratoService;
import com.aluguel_carros.demo.service.PedidoService;

@Service
public class PedidoServiceImpl implements PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private ClienteService clienteService;

    @Autowired
    private ContratoService contratoService;

    @Autowired
    private AutomovelService automovelService;

    @Override
    public void addPedido(PedidoDTO pedidoDTO) {
        Pedido pedido = convertToEntity(pedidoDTO);
        pedidoRepository.save(pedido);
    }

    @Override
    public List<Pedido> getAllPedidos() {
        return pedidoRepository.findAll();
    }

    @Override
    public Pedido getPedidoById(Integer id) {
        return pedidoRepository.findById(id).orElse(null);
    }

    @Override
    public void updatePedido(Integer id, PedidoDTO pedidoDTO) {
        if (pedidoRepository.existsById(id)) {
            Pedido pedido = convertToEntity(pedidoDTO);
            pedido.setId(id); // Define o ID do pedido que está sendo atualizado
            pedidoRepository.save(pedido);
        }
    }

    @Override
    public void deletePedido(Integer id) {
        pedidoRepository.deleteById(id);
    }

    @Override
    public PedidoDTO convertToDTO(Pedido pedido) {
        PedidoDTO dto = new PedidoDTO();
        dto.setId(pedido.getId());
        dto.setStatus(pedido.getStatus());
        dto.setClienteId(pedido.getCliente() != null ? pedido.getCliente().getId() : null);
        dto.setContratoId(pedido.getContrato() != null ? pedido.getContrato().getId() : null);
        dto.setAutomovelId(pedido.getAutomovel() != null ? pedido.getAutomovel().getId() : null);
        return dto;
    }

    @Override
    public Pedido convertToEntity(PedidoDTO dto) {
        Pedido pedido = new Pedido();
        pedido.setId(dto.getId());
        pedido.setStatus(dto.getStatus());
        
        if (dto.getDataInicio() != null) {
            String dataInicioStr = dto.getDataInicio().replace("Z", "");
            pedido.setDataInicio(LocalDateTime.parse(dataInicioStr));
        }
        if (dto.getDataFim() != null) {
            String dataFimStr = dto.getDataFim().replace("Z", "");
            pedido.setDataFim(LocalDateTime.parse(dataFimStr));
        }
        
        pedido.setCliente(clienteService.getClienteById(dto.getClienteId()));
        pedido.setContrato(contratoService.getContratoById(dto.getContratoId()));
        pedido.setAutomovel(automovelService.getAutomovelById(dto.getAutomovelId()));
        return pedido;
    }
}
