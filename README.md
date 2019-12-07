
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

 - `domain`: contém algumas classes de domínio para guia-lo na implementação, sinta-se a vontade para modifica-las.
 - `events`: 
	 - `listeners`: contém funções que recebem os eventos do nosso ecossistema. **Precisamos que você as implemente**.
	 - `publishers`: contém funções que permitem publicar eventos no nosso ecossistema para obter dados ou aprovar e rejeitar usuários.
 - `middlewareMocks`: simulam nosso ecossistema de integrações com fornecedores, **não modificar!** 
 - `repository`: contém a implementação de um banco de dados em memória que você usará para persistência.

Sinta-se a vontade para criar diretórios e arquivos como achar melhor. Esperamos uma solução final clara e elegante, mas não tema iniciar com soluções brutas.

A utilização de pacotes públicos é permitida. 

Para iniciar o fluxo de aprovação basta rodar o comando  `npm start` ou `node index.js` na raiz do projeto, caso não tenha um gerenciador de pacotes do node instalado.

## Submissão
Após clonar o repositório, resolva as tarefas em ordem crescente e faça commits pelo menos uma vez a cada tarefa. Ao final, envie seu projeto compactado (**não esqueça o .git**)

## Tarefas
//CHECK
 1. Validar data de nascimento 

 2. Validar dados OCR CNH

 3. Validar dados restrição CNH e reconhecimento facial