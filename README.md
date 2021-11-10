#  ![logo (1)](https://user-images.githubusercontent.com/84210050/141192520-19499946-ae4a-4f67-8b0e-d42fccee7c03.png) To Do

> desafio pela escola mais



☰ <a href="https://github.com/Marincor/todo_escola_mais/#-responsividade"> Responsividade </a> | <a href="https://github.com/Marincor/todo_escola_mais/#-sobre"> Sobre </a> | <a href="https://github.com/Marincor/todo_escola_mais/#-funcionalidades"> Funcionalidades </a> | <a href="https://github.com/Marincor/todo_escola_mais/#-tecnologias-usadas"> Tecnologias usadas </a>

<hr/>

![image](https://user-images.githubusercontent.com/84210050/141193011-d57ff5a4-69e8-4853-a683-270c81b717c8.png)

![image](https://user-images.githubusercontent.com/84210050/141192809-66118dbc-22e6-485a-8a45-b519d9640607.png)

![image](https://user-images.githubusercontent.com/84210050/141192949-d497d884-7597-4c8a-8f94-137e0856b636.png)

![image](https://user-images.githubusercontent.com/84210050/141193112-f3b9b15f-a522-448c-8f93-e157f1b2e31f.png)


#  📱 Responsividade


![todo tour](https://user-images.githubusercontent.com/84210050/141193621-5c6da59f-134b-4a38-9573-8339868894c9.gif)



# 🛈 Sobre

Pagina inicial com lista de todos os usuários, ao clicar em "tarefas do usuário" é salvo o id do mesmo em um estado e utilizado no parametro do component Link do "react-router-dom", direcionando para uma página específica. É possível acessar diretamento o endereço das tarefas do usuário, como por ex: "http://localhost:3000/user/1". Caso o endereço acessado pertença a um usuário inexistente ou o endereço não possua uma rota configurada, o usuário é redirecionado para uma página 404 customizada.
Alguns pontos:

- Requisições Api: Fetch;
- Animações de loading e erro: React-Lottie;
- CSS: Styled-Components;
- Gerenciamento de estado global: Context-Api;
 
 Acessando a página do usuário, constará um formulário, onde é possível criar uma nova tarefa, informando o título e a descrição da mesma. Como é uma FakeApi, não persiste os dados para que ocorra a renderização, mas é possível visualizar os dados salvos como retorno do método POST através do console. Um alerta também é exibido ao usuário para lembrá-lô de verificar. 
 
 Para marcar a tarefa como concluída ou pendente, foi utilizada a lógica de inclusão e exclusão de classes, nesse caso a classe "undoneButton", a qual carrega um novo botão visual e de conteudo, mudando para amarelo sua cor e alterando o conteúdo de 'concluir' para 'pendenciar'; clicando novamente a classe é retirada e o botão retorna sua forma original. A mesma lógica das classes foi aplicada para mostrar a descrição e sublinhar as tarefas feitas (as classes "showTask" e "done" respectivamente).
 
 Já no formulário que cria uma nova tarefa tem seus inputs controlados por um estado, que está guardado no context "newTask" como "task" (um objeto com title, body e id).



# 💡 Funcionalidades

- Listagem de usuários;
- Listagem de tarefas;
- Marcação de tarefas concluídas e pendentes;
- Criação de novas tarefas;
- Rotas dinâmicas.

# 🚀 Tecnologias usadas

> Base:

 <img  width='50px'  src='https://user-images.githubusercontent.com/84210050/132043336-d48a162f-c7f0-42a2-825d-96d0d3cf1998.png' alt='html5-logo' /> <img  width='50px'  src='https://user-images.githubusercontent.com/84210050/132043720-b43a7f9f-a5d3-4f31-99d8-28405783bd6b.png' alt='css3-logo' /> <img  width='42px'  src='https://cdn.worldvectorlogo.com/logos/logo-javascript.svg' alt='javascript-logo' />  <img  width='42px'  src="https://camo.githubusercontent.com/accac71d5d4e61a129dc89eaac39d1c4c5437c44e18e085c2834a4297613ef50/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f72656163742d322e737667" alt='React-logo' /> 


- HTML5 / CSS3 /  JavaScript  / ReactJs


> Complementar:

 <img  width='50px'  src='https://cdn.worldvectorlogo.com/logos/styled-components-1.svg' alt='styledComponents-logo'/>   <img  width='80px' src='https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png'  alt='reactRouter-logo' />     <img  width='100px' src='https://user-images.githubusercontent.com/84210050/132045800-c876540d-b0ce-495f-9898-7bf26963b111.png' alt='reactLottie-logo'/>
   
   - Styled Components  -  React Router Dom -  React Lottie 

# 🗺️ Estrutura 


![Mind Map - Frame 1 (1)](https://user-images.githubusercontent.com/84210050/141203549-9d500250-f7be-4c4f-ab3e-3b81334ce034.jpg)


# <img src="https://user-images.githubusercontent.com/84210050/141196999-85230390-c3dd-4e69-b0e0-05d1a07cfbed.png" alt="instruction-icon" width="30px" /> Instruções

1 - clone o repositório em sua maquina com o comando: <code>git clone https://github.com/Marincor/todo_escola_mais.git</code>

2 - caminhe para o repositório com o comando: <code>cd todo_escola_mais</code>

3 - instale as dependências do projeto - com npm: <code>npm install</code> ou com yarn: <code>yarn install</code>

 -  3.1 - yarn e npm são gerenciadores de pacotes que vêm acompanhados da instalação do node, que é um ambiente de execução do javascript, entre outras coisas. É possível baixá-lo por aqui: <a href="https://nodejs.org/en/">Node Js </a>

4 - execute a aplicação com o comando: <code>npm start</code> ou <code>yarn start</code>

5 - caso a aplicação não abra automaticamente, entre no endereço a seguir: http://localhost:3000/
