
![Caneca com logo da moObie e fundo do escritório embaçado](https://v.fastcdn.co/u/64e312bd/47397805-0-Vitor.png)
# Desafio Backend Backoffice !
Um dos pilares da nossa operação é o rigoroso processo de aprovação de usuários na nossa plataforma. Nele, precisamos garantir que um cadastro não representa uma possível fraude de identidade, e para tanto, consultamos uma série de fornecedores e checamos o máximo de informações disponíveis para aprová-lo.

Sua missão nesse desafio é **automatizar o processo de aprovação de usuários** para conseguirmos escalar a operação da moObie! Mas não se desespere, nós já temos a base do serviço e todos os requisitos necessários, como você verá abaixo.

## Prerequisitos
 - `node.js`: de preferência versão 10.12.0 ou posterior
 - `git`: para clonar o repositório e fazer os commits

## Projeto
Esse projeto contém a implementação base do serviço responsável pela aprovação de usuários, entretanto, no estado atual todos os usuários estão sendo **reprovados**! :scream:   
Nele você encontrará os seguintes diretórios:

 - `events`: 
	 - `listeners`: contém funções que recebem os eventos do nosso ecossistema. **Precisamos que você as implemente**.
	 - `publishers`: contém funções que permitem publicar eventos no nosso ecossistema para obter dados ou aprovar e rejeitar usuários.
 - `middlewareMocks`: simulam nosso ecossistema de integrações com fornecedores, **não modificar!** 
 - `repository`: contém a implementação de um banco de dados em memória que você usará para simular a persistência.

Sinta-se a vontade para criar diretórios e arquivos como achar melhor. Esperamos uma solução final clara e elegante, mas não tema iniciar com soluções brutas.

A utilização de pacotes públicos é permitida. 

Para iniciar o fluxo de aprovação basta rodar o comando  `npm start` ou `node index.js` na raiz do projeto, caso não tenha um gerenciador de pacotes do node instalado.

## Submissão
Após clonar o repositório, resolva as tarefas em ordem crescente e faça commits pelo menos uma vez a cada tarefa. Ao final, envie seu projeto compactado (**não esqueça o .git**)

## Tarefas
 ### 1. Novo usuário cadastrado:
 Primeiramente, precisamos que você persista os dados de produto desse usuário. Não esqueça de criar sua solução utilizando a classe `/repository/InMemoryDb.js` para persistência. Além disso, precisamos que você adicione a seguinte lógica para aprovação:
- `Usuários com mais de 18 anos`

 ### 2. Dados da CNH:
 Nessa tarefa, você precisa requisitar uma nova consulta do fornecedor de OCR utilizando os métodos disponíveis em `/events/publishers/index.js`. Em seguida, precisamos persistir o retorno dessa consulta. Por fim, adicionar as seguintes condições para aprovação:
- `Condição 1` Categoria CNH
- `Condição 2` CNH não vencida
- `Condição 3`

 ### 3. Restrições:
 Assim como na tarefa anterior, precisamos que você requisite uma nova consulta, mas do fornecedor de restrições da CNH, e a persista no serviço. Entretanto, por ser uma consulta mais barata do que a do OCR, precisamos que ela seja feita antes da consulta implementada anteriormente.
 Também gostariamos que fosse possível saber, através dos campos persistidos, quais validações foram feitas para um determinado cadastro.
 Além disso, adicionar as seguintes condições para aprovação:
- `Condição 1` Pontuação
- `Condição 2` Tem restrição
- `Condição 3`

### 4. Reconhecimento facial:
Por fim, utilizando os dados dos fornecedores anteriores, precisamos requisitar uma consulta de reconhecimento facial e persisti-la. Nessa etapas, esperamos um código que seja modularizado, e permita a mudança nas ordems das consultas, mas respeitando possíveis pre-requisitos.

- `Condição 3` Pictures match


//Reescrever tarefa 3: mais clara as espectativas, e não mudar a ordem
//Melhorar o contexto do que o teste faz 
//Colocar restrições e requisitos de negócio no final (fora da tarefa - Bonus): Mudança de ordem, SLA por validação e para aprovação ou reprovação, 
//Tirar pasta domain, e descrever payload dos eventos
//Submeter independente de ter alcançado requisitos 