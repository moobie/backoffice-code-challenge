
![Caneca com logo da moObie e fundo do escritório embaçado](https://v.fastcdn.co/u/64e312bd/47397805-0-Vitor.png)
# Desafio Backend Backoffice !
Um dos pilares da nossa operação é o rigoroso processo de aprovação de usuários na nossa plataforma. Nele, precisamos garantir que um cadastro não representa uma possível fraude de identidade, e para tanto, consultamos uma série de fornecedores e checamos o máximo de informações disponíveis para aprová-lo.

Sua missão nesse desafio é **automatizar o processo de aprovação de usuários** para conseguirmos escalar a operação da moObie; só que num escopo reduzido para caber nesse teste! Então não se desespere, nós já temos a base do serviço e todos os requisitos necessários, como você verá abaixo.

## Prerequisitos
 - `node.js`: de preferência versão 10.12.0 ou posterior
 - `git`: para clonar o repositório e fazer os commits

## Projeto
O fluxo de aprovação inicia com o evento `newUser` que trás os dados inseridos no app pelo usuário. Em seguida precisamos executar uma série de validações e consultas como especificado nas tarefas abaixo. Caso o usuário não passe em alguma validação ele deve ser **rejeitado**, mas se esse passar por todas deverá ser **aprovado**.

Esse projeto contém a implementação base do serviço responsável pela aprovação de usuários, entretanto, no estado atual todos os usuários estão sendo **reprovados**! :scream:

Nele você encontrará os seguintes diretórios:

 - `events`: 
	 - `listeners`: contém funções que recebem os eventos do nosso ecossistema. **Precisamos que você as implemente**.
	 - `publishers`: contém funções que permitem publicar eventos no nosso ecossistema para obter dados ou aprovar e rejeitar usuários.
 - `middlewareMocks`: simulam nosso ecossistema de integrações com fornecedores, **não modificar!** 
 - `repository`: contém a implementação de um banco de dados em memória que você usará para simular a persistência.

Sinta-se a vontade para criar diretórios e arquivos como achar melhor. Esperamos uma solução final clara e elegante, mas não tema iniciar com soluções brutas.

A utilização de pacotes públicos é permitida. 

O arquivo `index.js` na raiz do projeto contém inicialização das dependências e emite uma série de eventos de `newUser` com dados para serem validados. **Esse arquivo não deve ser modificado.**

Para iniciar o fluxo de aprovação basta rodar o comando  `npm start` ou `node index.js` na raiz do projeto, caso não tenha um gerenciador de pacotes do node instalado.

## Submissão
Após clonar o repositório, resolva as tarefas em ordem crescente e faça commits pelo menos uma vez a cada tarefa.

Submeta sua solução independente de ter conseguido terminar todas as tarefas ou alcançado todos os requisitos.

Ao final, envie seu projeto compactado **(não esqueça o .git)**.

## Tarefas
 ### 1. Novo usuário cadastrado:

 Primeiramente, precisamos que você persista os dados de produto dos usuários recebidos nos eventos `newUser`. Não esqueça de criar sua solução utilizando a classe `/repository/InMemoryDb.js` para persistência. 

 ```js
//Payload do evento "newUser"
{ 
	userId: '00001',
	fullName: 'SILVA DANILO',
    cnhPictureUrl: 'cnhPicture-00001',
	profilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/profilePicture-00001',
	birthDate: '1990-06-20T21:50:26.030Z'
}
```
 
 Além disso, precisamos que você adicione a primeira regra para aprovação:
- `Usuários com mais de 18 anos`

 ### 2. Dados da CNH:

 Nessa tarefa, você precisa requisitar novas consultas do fornecedor de OCR utilizando o método disponível em `/events/publishers/index.js`. 
 
 ```js
//Payload do evento "cnhOcr"
{ 
  userId: '00001',
  cnhPictureUrl: 'cnhPicture-00001',
  cnhFullName: 'Silva Danilo',
  cnhCategory: 'B',
  cnhNumber: '000000000001',
  cnhExpiryDate: '3000-01-01T02:00:00.000Z',
  cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00001' 
}
```

 Em seguida, precisamos persistir os retornos dessas consultas. 
 
 Por fim, adicionar as seguintes condições para aprovação:
- `Categoria da CNH diferente de 'A'`
- `Data de vencimento da CNH menor que a data atual`
- `Nome da CNH bate com o fornecido no produto`

 ### 3. Restrições:

 Assim como na tarefa anterior, precisamos que você requisite uma nova consulta, mas do fornecedor de restrições da CNH, e a persista no serviço. 

 ```js
//Payload do evento "cnhRestrictions"
{ 
	userId: '00001',
    cnhNumber: '000000000001',
    score: '29',
	hasRestriction: false 
}
```

 Além disso, adicionar as seguintes condições para aprovação:
- `Pontuação da CNH menor do que 21 pontos` 
- `Não ter restrição`

### 4. Reconhecimento facial:

Por fim, utilizando os dados dos fornecedores anteriores, precisamos requisitar uma consulta de reconhecimento facial e persisti-la.

```js
//Payload do evento "faceRecognition"
{
	userId: '00001', 
	profilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/profilePicture-00001', 
	cnhProfilePictureUrl: 'https://image-service.moobie.com.br/api/v1/images/cnhProfilePicture-00001',
	picturesMatch: true
}
```

Para finalizar, precisamos adicionar a condição de aprovação:
- `Fotos de perfil e perfil da CNH são da mesma pessoa`

### Bonus

Caso tenha conseguido terminar todas as tarefas anteriores, vamos deixar algumas perguntas que gostariamos de conseguir responder com base nos valores persistidos nas suas soluções:

- `Taxa de aprovação`

- `Quais validações foram executadas para um determinado cadastro`

- `SLA (tempo de duração entre a requisição e o fim da validação) de cada etapa`

- `SLA (tempo de duração entre a requisição e o fim da validação) de aprovação e reprovação`

Além disso, deixamos abaixo alguns pontos que gostariamos de encontrar na sua solução final:

- `Possibilidade de executar uma requisição e validação do fluxo de aprovação sem desencadear as demais`

- `Facilidade em mudar a ordem, adicionar e remover as requisições e validações, respeitando possíveis pre-requisitos de requisições`