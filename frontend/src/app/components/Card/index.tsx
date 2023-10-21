import { title } from "process";
import { CardContainer, CardContent } from "./styled";
import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  img: string;
  titulo: string;
  descricao: string;
  tema: string;
  estreia: string;
  indicacao: string;
}


export const Card = ({ id,img, titulo, descricao, tema, estreia, indicacao }: CardProps) => {
  return (
    <CardContainer>
      <img src={`${img}`} alt="nada" />
      <CardContent>
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <h3>{tema}</h3>
        <div>
          {indicacao}
          <span>

            {estreia}
          </span>
        </div>
        <Link href={`/edit${id}`}>
        <button>Edit Card</button>
        </Link>
      </CardContent>

    </CardContainer>
  )
}