'use client'
import React, { ChangeEvent, useEffect, useState } from "react";
import { PageContainer, PageContent } from "./styles/PageStyles";
import { Card, CardProps } from "./components/Card";
import { useMyContext } from "./context/MyContext";
import { BasicModal } from "./components/Modal";



export default function Home() {
  const { isActived, data, toogleActived, updateData } = useMyContext();

  const [movieDataone, setMovieDataone] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [movieData, setMovieData] = useState([]);
  const [idEdit, setIdEdit] = useState('')


  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }
  const fetchData = async () => {
    try {
      const req = await fetch('http://127.0.0.1:8000/api/filmes/');
      const reqJson = await req.json();
      setMovieData(reqJson);
    } catch (error) {

      console.error('Erro ao buscar os filmes:', error);
    }
  };

  const handleSearchfetch = async () => {
    try {
      const req = await fetch(`http://127.0.0.1:8000/api/filmes/search/?search=${searchValue}`);
      const reqJson = await req.json();
      setMovieData(reqJson);
    } catch (error) {
      console.log(`${error} deu ruim aqui parceiro`);
    }
  }

  const updateCard = async (idEdit: string, data = {}, numberFild: string) => {

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/filmes/${idEdit}/`, {
        method: numberFild === '7' ? 'PUT' : 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.status === 200) {
        // A atualização foi bem-sucedida, agora busque os dados atualizados
        await fetchData();
      } else {
        console.log('Algo deu errado durante a atualização.');
      }
    } catch (error) {
      console.error('Erro ao atualizar o card:', error);
    }
  }
  const deleteCard = async (id: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/filmes/${id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const fetchData = async () => {
        try {
          const req = await fetch('http://127.0.0.1:8000/api/filmes/');
          const reqJson = await req.json();
          setMovieData(reqJson);
        } catch (error) {

          console.error('Erro ao buscar os filmes:', error);
        }
      };

      if (response.status === 204) {
        // A exclusão foi bem-sucedida, você pode realizar alguma ação aqui
        // Por exemplo, atualizar o estado da sua aplicação para refletir a exclusão
        fetchData()
      } else {
        console.log('Deu Ruim Aqui meu Bom ')
      }
    } catch (error) {
      console.error('Erro ao excluir o card:', error);
    }
  }

  useEffect(() => {
    console.log(movieData);
  }, [movieData]);
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchfetch();
    }
  }

  return (
    <PageContainer>
      <PageContent>
        <button onClick={handleSearchfetch}>
          click me
        </button>
        <input type="text" name="search" id="search" onChange={handleSearchValue} onKeyDown={handleEnterKey} />

        {movieData ? movieData.map(({ id, titulo, descricao, tema, indicacao, estreia, url_imagem }: CardProps) => (
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
            deletedCard={() => deleteCard(id)}
            setId={setIdEdit}
          />
        )) : (
          movieDataone.map(({ id, titulo, descricao, tema, indicacao, estreia, url_imagem }) => (
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
              deletedCard={() => deleteCard(id)}
              setId={setIdEdit}

            />
          ))
        )}
        {isActived && <BasicModal updateCard={updateCard} idEdit={idEdit} />}
      </PageContent>
    </PageContainer>
  );
}
