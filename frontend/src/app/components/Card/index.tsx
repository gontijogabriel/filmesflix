/* eslint-disable @next/next/no-img-element */
import { CardContainer, CardContent } from "./styled";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useMyContext } from "@/app/context/MyContext";
import Link from "next/link";
import Indicacao from "../Indicacao";

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



  return (
    <CardContainer variable={variable}>
      <img src={`${url_imagem}`} alt="imagem Filme" />
      <CardContent variable={variable}>
        <h2>{titulo}</h2>

        <h3>{tema}</h3>
        <div>
        <Indicacao indicacao={indicacao} />

          <span>

            {estreia}
          </span>
        </div>
        <div>


          <Link href={`${id}`}>
            <button className="linkpage">
             Visualizar 

            </button>
          </Link>


        </div>
      </CardContent>

    </CardContainer >
  )
}