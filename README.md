# Sistema de Aluguel de Carro

### Contextualização
Este projeto tem como objetivo desenvolver um sistema de apoio à **gestão de aluguéis de automóveis**, oferecendo funcionalidades como a capacidade de **efetuar, cancelar e modificar pedidos de aluguel** diretamente pela Internet.

O sistema foi concebido como parte da disciplina de **Laboratório de Desenvolvimento de Software**, lecionada pelo professor [João Paulo Aramuni](https://github.com/joaopauloaramuni/joaopauloaramuni), no curso de **Engenharia de Software da PUC Minas**.

### Descrição do Sistema
O **Sistema de Aluguel de Carros** é dividido em dois subsistemas principais:
1. **Gestão de Pedidos e Contratos:** responsável por registrar, modificar e avaliar os pedidos de aluguel de automóveis.
2. **Construção Dinâmica de Páginas Web:** gerencia a interface do usuário para interação com o sistema.

#### Funcionalidades do Sistema:
- **Cadastro:** O sistema é acessível somente após o cadastro prévio do usuário.
- **Clientes Individuais:** Podem **inserir, modificar, consultar e cancelar pedidos de aluguel**.
- **Agentes (empresas e bancos):** Podem **modificar e avaliar pedidos**, sendo responsáveis pela análise financeira dos pedidos antes da aprovação do contrato.
- **Contratos de Aluguel:** Podem ser estabelecidos diretamente entre clientes e empresas ou estar associados a um **contrato de crédito** concedido por um banco agente.

#### Informações Armazenadas:
- **Clientes:** Dados de identificação (RG, CPF, Nome, Endereço), profissão, entidade empregadora, e até 3 rendimentos diferentes.
- **Automóveis:** Matrícula, ano, marca, modelo e placa dos veículos disponíveis para aluguel.
- **Contratos de Aluguel:** A locação pode envolver contratos de crédito, com detalhes financeiros armazenados para avaliação dos agentes.

#### Interconectividade:
O servidor central do sistema está conectado via Internet aos **computadores locais dos clientes** e aos **diversos agentes (empresas e bancos)** aderentes ao sistema.

***

### Participantes
* [Arthur Freitas Jardim](https://github.com/ArthurFreitasJardim)
* [Thiago Andrade Ramalho](https://github.com/ThiagoAndradeRamalho)
* [Wilken Henrique Moreira](https://github.com/Wilkennn)

***

### Tecnologias Utilizadas
O sistema foi desenvolvido utilizando uma combinação de **tecnologias modernas** que garantem um sistema eficiente, escalável e responsivo. As principais tecnologias empregadas são:

* **Backend:**
  * Java
  * SpringBoot
* **Frontend:**
  * HTML
  * CSS
  * React

***

### Diagramas

#### Diagrama de Caso de Uso
Representa a interação dos diferentes atores do sistema (clientes e agentes) com as funcionalidades disponíveis.

<div>
  <embed src="docs/Diagrama%20de%20Caso%20de%20Uso.pdf" width="76%" height="500px" type="application/pdf">
</div>

#### Diagrama de Classe
Modela as principais entidades do sistema, suas propriedades e relacionamentos.

<div>
 <img src="docs/Diagrama%20de%20Classe.png" width="76%">
</div>
