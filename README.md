
![](https://scx1.b-cdn.net/csz/news/800/2019/exoplanetsca.jpg)  
API em GraphQL que consulta exoplanetas na API da Arcsecond. 



# Dependências para rodar o projeto
Tenha instalado o 'docker' e 'docker-compose'.

# Rodando o Projeto 
Clone ou baixe este repositório; ao entrar na pasta raiz('voltbras'), abrir o terminal e executar o comando: 
'docker-compose up --build --remove-orphans'. 
Espere as configurações do comando acima terminar e então acesse em seu navegador 'http://localhost:4000' para ter acesso ao Playground e realizar as operações na API. 

# Operações na API 
### query { name mass hasStation }
>*Busca na api da Arcsecond planetas que têm a massa maior que 25M_jup. Retorna nome do planeta, massa e se tem ou no estação instalada(true/false)*

### query { stations }
>*Busca no banco de dados planetas com estações instaladas. Se tiver, retorna o id da station e nome do planeta.*

### mutation { removeStation(id: "id da estação a ser deletada") }
>*Remove uma station de um planeta a partir do id passado no parâmetro. Retorna uma String "Estação deletada com sucesso".*

### mutation { removeAllStations }
>*Remove todas as stations instaladas em todos os planetas. Retorna uma String "Estações deletadas com sucesso".*

### mutation { installStation(namePlanet: "nome do planeta no qual será instalada a estação"){ id namePlanet} }
>*Instala uma station em um planeta a partir do nome do planeta. Retorna id da station e nome do planeta onde foi instalada.*

<div id='whatismarkdown'/>  
 
###### Autor: *Anderson Raphael Ferreira*.
###### Contato: *phaell.anderson09@gmail.com*.


