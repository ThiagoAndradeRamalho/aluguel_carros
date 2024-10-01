package com.aluguel_carros.demo.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aluguel_carros.demo.dto.PedidoDTO;
import com.aluguel_carros.demo.model.Pedido;
import com.aluguel_carros.demo.repository.PedidoRepository;
import com.aluguel_carros.demo.service.AutomovelService;
import com.aluguel_carros.demo.service.ClienteService;
import com.aluguel_carros.demo.service.ContratoService;
import com.aluguel_carros.demo.service.PedidoService;

import jakarta.persistence.EntityNotFoundException;

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
        // Verifica se o ID não é nulo antes de buscar
        if (id == null) {
            return null;
        }
        return pedidoRepository.findById(id).orElse(null);
    }

    @Override
    public void updatePedido(Integer id, PedidoDTO pedidoDTO) {
        // Verifica se o ID não é nulo antes de buscar
        if (id == null) {
            throw new IllegalArgumentException("ID do pedido não pode ser nulo");
        }

        Optional<Pedido> optionalPedido = pedidoRepository.findById(id);
        if (optionalPedido.isPresent()) {
            Pedido pedido = optionalPedido.get();

            // Atualiza os campos do pedido com os dados do DTO
            pedido.setStatus(pedidoDTO.getStatus());

            if (pedidoDTO.getDataInicio() != null) {
                String dataInicioStr = pedidoDTO.getDataInicio().replace("Z", "");
                pedido.setDataInicio(LocalDateTime.parse(dataInicioStr));
            }
            if (pedidoDTO.getDataFim() != null) {
                String dataFimStr = pedidoDTO.getDataFim().replace("Z", "");
                pedido.setDataFim(LocalDateTime.parse(dataFimStr));
            }

            pedido.setCliente(clienteService.getClienteById(pedidoDTO.getClienteId()));
            pedido.setContrato(contratoService.getContratoById(pedidoDTO.getContratoId()));
            pedido.setAutomovel(automovelService.getAutomovelById(pedidoDTO.getAutomovelId()));

            pedidoRepository.save(pedido);
        } else {
            throw new EntityNotFoundException("Pedido not found with id " + id);
        }
    }

    @Override
    public void deletePedido(Integer id) {
        // Verifica se o ID não é nulo antes de deletar
        if (id != null) {
            pedidoRepository.deleteById(id);
        }
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
