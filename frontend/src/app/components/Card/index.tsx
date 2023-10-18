import { title } from "process";
import { CardContainer, CardContent } from "./styled";

export interface CardProps{
  img:string;
  titulo:string;
  descricao:string;
  tema:string;
  estreia:string;
  indicacao:string;
}


export const Card =({img,titulo,descricao,tema,estreia, indicacao}:CardProps)=>{
  return(
    <CardContainer>
      <img src={img}  />
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
      </CardContent>

    </CardContainer>
  )
}