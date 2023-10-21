/* eslint-disable @next/next/no-img-element */
import { CardContainer, CardContent } from "./styled";

export interface CardProps {
  id: string
  titulo: string;
  descricao: string;
  tema: string;
  indicacao: string;
  estreia: string;
  url_imagem: string;
  atores_principais: string;
  reload: () => void;
}


export const Card = ({ id, atores_principais, url_imagem, titulo, descricao, tema, estreia, indicacao, reload }: CardProps) => {
  const deleteCard = async () => {
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
        reload()
      } else {
        console.log('Deu Ruim Aqui meu Bom ')
      }
    } catch (error) {
      console.error('Erro ao excluir o card:', error);
    }
  }
  const updateCard = async () => {
    try {
      const updateData = {
        titulo: `${id}`,
        descricao: `${id}`,
        tema: "Acao",
        indicacao: "Livre",
        estreia: "2023-10-21",
        atores_principais: `${id}`,
        url_imagem: `${id}`,
      }

      const response = await fetch(`http://127.0.0.1:8000/api/filmes/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData)
      });

      if (response.status === 200) {
        // A exclusão foi bem-sucedida, você pode realizar alguma ação aqui
        // Por exemplo, atualizar o estado da sua aplicação para refletir a exclusão
        reload()
      } else {
        console.log('Deu Ruim Aqui meu Bom ')
      }
    } catch (error) {
      console.error('Erro ao atualizar o card o card:', error);
    }
  }
  return (
    <CardContainer>
      <img src={`${url_imagem}`} alt="imagem Filme" />
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
        <div>
          <button onClick={updateCard}>Edit Card</button>

          <button onClick={deleteCard}>Delete Card</button>


        </div>
      </CardContent>

    </CardContainer>
  )
}