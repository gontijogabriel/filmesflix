'use client'
import { useEffect, useState } from "react";

import { Card } from "../components/Card";
import { MovieContent, MoviesContainer } from "./styled";
export default function Movies() {
  const [movieData, setMovieData] = useState([]);

  const fetchData = async () => {
    try {
      const req = await fetch('http://127.0.0.1:8000/api/filmes/');
      const reqJson = await req.json();
      setMovieData(reqJson);
      console.log(reqJson)
    } catch (error) {

      console.error('Erro ao buscar os filmes:', error);
    }
  };
  useEffect(() => {
    fetchData();


  }, []);
  return (
    <MoviesContainer>
      <MovieContent>

        {movieData.length > 0 ? movieData.map(({ id, titulo, descricao, tema, indicacao, estreia, url_imagem }) => {
          return (
            <Card
              atores_principais='none'
              key={id}
              id={id}
              descricao={descricao}
              titulo={titulo}
              tema={tema}
              indicacao={indicacao}
              estreia={estreia}
              url_imagem={url_imagem}
              reload={fetchData}
            />
          )
        }) : <h2>
          nenhum filme cadastrado
        </h2>}
      </MovieContent>
    </MoviesContainer>
  )
}