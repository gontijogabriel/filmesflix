'use client'
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react"
import { IdContainer, IdContent } from "./style";
import { CardProps } from "../components/Card";
import Circle from "../components/Avaliacao";
import CircleRating from "../components/Avaliacao";
import { List } from "@mui/material";
import { HeartBreak, ListChecks, MarkerCircle, Star } from "phosphor-react";
import Indicacao from "../components/Indicacao";
import { useMyContext } from "../context/MyContext";
import { BasicModal } from "../components/Modal";

export default function Cardpage({ params }: { params: { id: string } }) {
  const { isActived, toogleActived } = useMyContext();
  const [idEdit, setIdEdit] = useState('');
  const router = useRouter();
  const { id } = params;
  const [dataCard, setDataCard] = useState({});

  const fetchData = async () => {
    try {
      const fectData = await fetch(`http://127.0.0.1:8000/api/filmes/${id}/`);
      const jsonData = await fectData.json();
      setDataCard(jsonData);
    } catch (e) {
      console.log(`${e} deu Ruim Ai fera`);
    }
  };

  useEffect(() => {
    fetchData(); // Chama fetchData uma vez quando o componente é montado
  }, []);

  const editCard = () => {
    setIdEdit(id);
    toogleActived(true);
  };

  const updateCard = async (idEdit: string, dataCard = {}, numberFild: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/filmes/${idEdit}/`, {
        method: numberFild === '7' ? 'PUT' : 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataCard)
      });

      if (response.status === 200) {
        // A atualização foi bem-sucedida, agora busque os dados atualizados
        fetchData();
        toogleActived(false); // Fecha o modal de edição
      } else {
        console.log('Algo deu errado durante a atualização.');
      }
    } catch (error) {
      console.error('Erro ao atualizar o card:', error);
    }
  };

  const deleteCard = async (id: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/filmes/${id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 204) {
        // A exclusão foi bem-sucedida, você pode realizar alguma ação aqui
        // Por exemplo, atualizar o estado da sua aplicação para refletir a exclusão
        // fetchData()
        router.push('/'); 
      } else {
        console.log('Deu Ruim Aqui meu Bom');
      }
    } catch (error) {
      console.error('Erro ao excluir o card:', error);
    }
  };

  const { titulo, url_imagem, descricao, avaliacao, tema, estreia, atores_principais, indicacao } = dataCard as CardProps
  return (
    <IdContainer>
      <IdContent>
        <img src={url_imagem} width={250} height={400} alt="" />

        <div className="container">
          <h2>{titulo} ({estreia && estreia.slice(0, 4)})</h2>
          <div className="info">
            <Indicacao indicacao={indicacao} />
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
          <div>
            <button onClick={() => editCard()}>Update Card</button>
            <button onClick={() => deleteCard(id)}>Delete Card</button>
          </div>
        </div>
        {isActived && <BasicModal updateCard={updateCard} idEdit={idEdit} />}

      </IdContent>
    </IdContainer>
  )
}