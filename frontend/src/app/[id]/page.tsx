'use client'

import { useEffect, useState } from "react"
import { IdContainer, IdContent } from "./style";

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

  console.log(data);
  const { titulo, url_imagem, descricao } = data
  return (
    <IdContainer>
      <IdContent>
        <img src={url_imagem} width={400} height={400} alt="" />
        <div>

        {`Numero do Card e: ${id}`}
        <h2>{titulo}</h2>
        <p>{descricao}</p>
        </div>

      </IdContent>
    </IdContainer>
  )
}