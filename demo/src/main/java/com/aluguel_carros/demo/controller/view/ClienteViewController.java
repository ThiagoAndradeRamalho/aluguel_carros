package com.aluguel_carros.demo.controller.view;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.aluguel_carros.demo.model.Cliente;

@Controller
@RequestMapping("/cliente")
public class ClienteViewController {

    @GetMapping("/cadastrar")
    public String exibirFormularioCadastro(Model model) {
        model.addAttribute("cliente", new Cliente());
        return "cliente"; // o nome do arquivo HTML (cliente.html)
    }
}
