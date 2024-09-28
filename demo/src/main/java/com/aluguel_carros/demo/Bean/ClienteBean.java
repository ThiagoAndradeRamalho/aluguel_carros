package com.aluguel_carros.demo.Bean;

import com.aluguel_carros.demo.model.Cliente;
import com.aluguel_carros.demo.model.Empregadora;
import com.aluguel_carros.demo.model.Pedido;
import com.aluguel_carros.demo.model.Contrato;

import jakarta.annotation.ManagedBean;
import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.RequestScoped;
import jakarta.faces.view.ViewScoped;
import jakarta.inject.Named;

import java.util.Set;
import java.util.HashSet;

@Named
@RequestScoped
public class ClienteBean {

    private Integer id;
    private String nome;
    private String rg;
    private String cpf;
    private String endereco;
    private String profissao;
    private Set<Empregadora> empregadoras = new HashSet<>();
    private Set<Pedido> pedidos = new HashSet<>();
    private Set<Contrato> contratos = new HashSet<>();

    private String greeting;

    @PostConstruct
    public void init() {
        System.out.println("ClienteBean inicializado!");
    }


    public void greet() {
        greeting = "Bem-vindo, " + nome + "!";
    }

    public String getGreeting() {
        return greeting;
    }

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getProfissao() {
        return profissao;
    }

    public void setProfissao(String profissao) {
        this.profissao = profissao;
    }

    public Set<Empregadora> getEmpregadoras() {
        return empregadoras;
    }

    public void setEmpregadoras(Set<Empregadora> empregadoras) {
        this.empregadoras = empregadoras;
    }

    public Set<Pedido> getPedidos() {
        return pedidos;
    }

    public void setPedidos(Set<Pedido> pedidos) {
        this.pedidos = pedidos;
    }

    public Set<Contrato> getContratos() {
        return contratos;
    }

    public void setContratos(Set<Contrato> contratos) {
        this.contratos = contratos;
    }

    // Método de salvar (simulado)
    public void salvar() {
        System.out.println("Cliente salvo: " + this.nome);
        // Aqui você poderia chamar o serviço de persistência
    }

    // Método de limpar os dados do formulário
    public void limpar() {
        this.id = null;
        this.nome = "";
        this.rg = "";
        this.cpf = "";
        this.endereco = "";
        this.profissao = "";
    }
}
