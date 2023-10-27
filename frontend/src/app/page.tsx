'use client'
import React, { ChangeEvent, useEffect, useState } from "react";
import { PageContainer, PageContent } from "./styles/PageStyles";
import { Card, CardProps } from "./components/Card";
import { useMyContext } from "./context/MyContext";
import { BasicModal } from "./components/Modal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';
import { MagnifyingGlass } from "phosphor-react";


export default function Home() {
  const { isActived, data, toogleActived, updateData } = useMyContext();
  const [movieDataone, setMovieDataone] = useState([]);
  const [dataCarrosel, setDataCarrosel] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [movieData, setMovieData] = useState([]);
  const [idEdit, setIdEdit] = useState('')

  const fetchDataForCarrosel = async () => {
    try {
      const req = await fetch('http://127.0.0.1:8000/api/filmes/');
      const reqJson = await req.json();
      const firstThreeMovies = reqJson.slice(0, 4); // Alterado para pegar os primeiros 3 objetos.
      setDataCarrosel(firstThreeMovies);
    } catch (error) {
      console.error('Erro ao buscar os filmes para o carrossel:', error);
    }
  };
  useEffect(() => {
    fetchDataForCarrosel()
  }, [])
  console.log(dataCarrosel)
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
  }, [movieData]);
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchfetch();
    }
  }

  return (
    <PageContainer>
      <PageContent>
        <div className="input">
          <button className="pesquisa" onClick={handleSearchfetch}>
            <MagnifyingGlass size={25} color="#756e6e" />
          </button>
          <input type="text" placeholder="Search you Movie" name="search" id="search" onChange={handleSearchValue} onKeyDown={handleEnterKey} />

        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, EffectCreative, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          allowSlideNext={true}
          // effect={'coverflow'}
          // effect={'creative'}
          // coverflowEffect={{
          //   rotate: 50,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   slideShadows: true,

          // }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          loop={true}
          direction={"horizontal"}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          {dataCarrosel.map(({ id, titulo, descricao, tema, indicacao, estreia, url_imagem }: CardProps) => (
            <SwiperSlide key={id}>
              <Card
                variable="modal"
                atores_principais='none'
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
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="cards-content">





          {movieData ? movieData.map(({ id, titulo, descricao, tema, indicacao, estreia, url_imagem }: CardProps) => (
            <Card
              variable="default"
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
                variable="default"
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
        </div>

      </PageContent>
    </PageContainer >
  );
}
