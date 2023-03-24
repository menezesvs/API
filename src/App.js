import React from "react";
import axios from "axios";
import styled from "styled-components";

const API = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #9b247d;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  h1 {
    font-size: 50px;
  }
`;

const Box = styled.div`
  width: 20vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #bbec00;
  border-radius: 30px;
  margin: 10px;
  color: black;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);
  img {
    border: solid black 1px;
    border-radius: 30px;
  }
  img:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 1s;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
      0 6px 30px 0 rgba(0, 0, 0, 0.19);
  }
`;

const Seconde = styled.div`
  width: 100vw;
  height: 300vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.9rem;
  Button {
    font-size: 15px;
    margin: 10px;
    width: 50px;
    height: 35px;
    border-radius: 30px;
    background-color: white;
  }
  Button:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.4s;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
      0 6px 30px 0 rgba(0, 0, 0, 0.19);
  }
`;

export default class App extends React.Component {
  state = {
    info: []
  };

  //FUNÇÃO- PEGAR API, RETORNAR COMO UMA PROMESSA E MAPEAR A NOSSA API E ATUALIZAR O ESTADO
  //async assincrono - await
  pegarPersonagens = async () => {
    const resposta = await API.get();
    console.log(resposta);
    //Map da API para pegar os itens
    const itensApi = resposta.data.results.map((item) => {
      return {
        ...item //spread - acesso a toda a array results
      };
    });

    this.setState({
      info: itensApi
    });
  };

  // pré-montando a função que pega a API
  componentDidMount() {
    this.pegarPersonagens();
  }

  render() {
    return (
      <Container>
        <h1>API RICKY AND MORTY</h1>
        <Seconde>
          {this.state.info.map((item) => (
            <Box>
              <h2>{item.name}</h2>
              <img src={item.image} alt="" />
              <p>{item.species}</p>
            </Box>
          ))}
        </Seconde>
        <Footer>
          <p>Produzido por Alinne Menezes. &hearts;</p>
          <a href="#">
            <button class="buttonTop">Topo</button>
          </a>
        </Footer>
      </Container>
    );
  }
}
