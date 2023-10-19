'use client'
import { useEffect, useState } from "react";

import { Card } from "../components/Card";
import { MovieContent, MoviesContainer } from "./styled";
export default function Movies() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
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

    fetchData();
  }, []);
  return (
    <MoviesContainer>
      <MovieContent>

        {movieData.length > 0 ? movieData.map(({id, titulo, descricao, tema, indicacao, estreia, imagem}) => {
          return (
            <Card
              key={id}
              descricao={descricao}
              titulo={titulo}
              tema={tema}
              indicacao={indicacao}
              estreia={estreia}
              img={imagem}
            />
          )
        }) : <h2>
          nenhum filme cadastrado
        </h2>}

      </MovieContent>
    </MoviesContainer>
  )
}