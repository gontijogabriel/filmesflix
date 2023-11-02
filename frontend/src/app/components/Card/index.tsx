/* eslint-disable @next/next/no-img-element */
import { CardContainer, CardContent } from "./styled";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useMyContext } from "@/app/context/MyContext";
import Link from "next/link";

export interface CardProps {
  id: string
  titulo: string;
  descricao: string;
  tema: string;
  indicacao: string;
  estreia: string;
  url_imagem: string;
  atores_principais: string;
  avaliacao?: string;
  deletedCard: (id: string) => void
  setId: (id: string) => void
  variable: 'modal' | 'default'
}


export const Card = ({ id, atores_principais, url_imagem, titulo, descricao, tema, estreia, indicacao, deletedCard, setId, variable }: CardProps) => {
  const { isActived, data, toogleActived, updateData } = useMyContext();
  const editCard = () => {
    setId(id)
    toogleActived(true)
  }


  return (
    <CardContainer variable={variable}>
      <img src={`${url_imagem}`} alt="imagem Filme" />
      <CardContent variable={variable}>
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <h3>{tema}</h3>
        <div>
          {indicacao}
          <span>

            {estreia}
          </span>
        </div>
        <div>
          <button onClick={editCard}>Edit Card</button>


          {/* <button onClick={() => deletedCard(id)}>Delete Card</button> */}
          <Link href={`${id}`}>
            <button className="linkpage">
              teste page

            </button>
          </Link>


        </div>
      </CardContent>

    </CardContainer >
  )
}