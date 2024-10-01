package com.aluguel_carros.demo.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aluguel_carros.demo.dto.AutomovelDTO;
import com.aluguel_carros.demo.model.Automovel;
import com.aluguel_carros.demo.repository.AutomovelRepository;
import com.aluguel_carros.demo.service.AutomovelService;

@Service
public class AutomovelServiceImpl implements AutomovelService {

    @Autowired
    private AutomovelRepository automovelRepository;

    @Override
    public void addAutomovel(Automovel automovel) {
        automovelRepository.save(automovel);
    }

    @Override
    public List<Automovel> getAllAutomoveis() {
        return automovelRepository.findAll();
    }

    @Override
    public Automovel getAutomovelById(Integer id) {
        return automovelRepository.findById(id).orElse(null);
    }

    @Override
    public void updateAutomovel(Integer id, Automovel automovel) {
        if (automovelRepository.existsById(id)) {
            automovel.setId(id);
            automovelRepository.save(automovel);
        }
    }

    @Override
    public void deleteAutomovel(Integer id) {
        automovelRepository.deleteById(id);
    }

    @Override
    public AutomovelDTO convertToDTO(Automovel automovel) {
        AutomovelDTO dto = new AutomovelDTO();
        dto.setId(automovel.getId());
        dto.setMarca(automovel.getMarca());
        dto.setModelo(automovel.getModelo());
        dto.setPlaca(automovel.getPlaca());
        dto.setAno(automovel.getAno());
        dto.setCor(automovel.getCor());
        dto.setTipoCombustivel(automovel.getTipoCombustivel());
        dto.setTipoCarro(automovel.getTipoCarro());
        dto.setTransmissao(automovel.getTransmissao());
        dto.setNumeroPortas(automovel.getNumeroPortas());
        dto.setConsumoCombustivel(automovel.getConsumoCombustivel());
        dto.setQuilometragemAtual(automovel.getQuilometragemAtual());
        dto.setVelocidadeMaxima(automovel.getVelocidadeMaxima());
        dto.setImagem(automovel.getImagem());
        dto.setDisponivel(automovel.isDisponivel());
        return dto;
    }

    @Override
    public Automovel convertToEntity(AutomovelDTO dto) {
        Automovel automovel = new Automovel();
        automovel.setId(dto.getId());
        automovel.setMarca(dto.getMarca());
        automovel.setModelo(dto.getModelo());
        automovel.setPlaca(dto.getPlaca());
        automovel.setAno(dto.getAno());
        automovel.setCor(dto.getCor());
        automovel.setTipoCombustivel(dto.getTipoCombustivel());
        automovel.setTipoCarro(dto.getTipoCarro());
        automovel.setTransmissao(dto.getTransmissao());
        automovel.setNumeroPortas(dto.getNumeroPortas());
        automovel.setConsumoCombustivel(dto.getConsumoCombustivel());
        automovel.setQuilometragemAtual(dto.getQuilometragemAtual());
        automovel.setVelocidadeMaxima(dto.getVelocidadeMaxima());
        automovel.setImagem(dto.getImagem());
        automovel.setDisponivel(dto.isDisponivel());
        return automovel;
    }
}
