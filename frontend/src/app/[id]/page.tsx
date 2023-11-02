'use client'

import { useEffect, useState } from "react"
import { IdContainer, IdContent } from "./style";
import { CardProps } from "../components/Card";
import Circle from "../components/Avaliacao";
import CircleRating from "../components/Avaliacao";
import { List } from "@mui/material";
import { HeartBreak, ListChecks, MarkerCircle, Star } from "phosphor-react";
import Indicacao from "../components/Indicacao";

export default function Cardpage({ params }: { params: { id: string } }) {
  const { id } = params
  const [data, setData] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fectData = await fetch(`http://127.0.0.1:8000/api/filmes/${id}/`,
        );
        const jsonData = await fectData.json();
        setData(jsonData);
      } catch (e) {
        console.log(`${e} deu Ruim Ai fera`);
      }
    };

    fetchData();
  }, [id]);

  const { titulo, url_imagem, descricao, avaliacao, tema, estreia, atores_principais, indicacao } = data as CardProps
  return (
    <IdContainer>
      <IdContent>
        <img src={url_imagem} width={250} height={400} alt="" />

        <div className="container">
          <h2>{titulo} ({estreia && estreia.slice(0, 4)})</h2>
          <div className="info">
            <Indicacao indicacao={indicacao}/>
            <p>{tema}...</p>
          </div>
          <div className="options">
            <CircleRating rating={95} tamanho={70} />
            <div className="class">
              <p>Classificação</p>
              <p>Geral</p>
              <p>dos</p>
              <p>Utilizadores</p>
            </div>
            <button className="circle"><ListChecks size={30} /></button>
            <button className="circle"><HeartBreak size={30} /></button>
            <button className="circle"><MarkerCircle size={30} /></button>
            <button className="circle"><Star size={30} /></button>

          </div>



          <p>{descricao}</p>
        </div>

      </IdContent>
    </IdContainer>
  )
}