'use client'
import { PageContainer, PageContent } from "../styles/PageStyles";

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const jsonData = {};
    formData.forEach((value, key:) => {
      jsonData[key] = value;
      console.log(jsonData)
    });
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/filmes/filmes/', requestOptions);
      if (response.ok) {
        // Lidar com a resposta bem-sucedida do Django, se necessário
      } else {
        // Lidar com erros de resposta, se necessário
      }
    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error);
    }
  };
  return (
    <PageContainer>
      <PageContent>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} method="post">

        <label htmlFor="titulo">Isert the name Movie</label>
          <input type="text" id="titulo" name="titulo" />
        <label htmlFor="descricao">Descibre of Movie</label>
          <input type="text" id="descricao" name="descricao" />
        <label htmlFor="tema">Theme of Movie</label>
          <input type="text" id="tema" name="tema" />
        <label htmlFor="indicacao">Indication for movie</label>
          <input type="text" id="indicacao" name="indicacao" />
        <label htmlFor="estreia">Relese</label>
          <input type="date" id="estreia" name="estreia" />
        <label htmlFor="atores_principais">Main actors</label>
          <input type="text" id="atores_principais" name="atores_principais" />
        <label htmlFor="likes">likes </label>
          <input type="number" id="likes" name="likes" />
        <label htmlFor="deslikes">deslikes</label>
          <input type="number" id="deslikes" name="deslikes" />

          <button type="submit">
            send the form
          </button>
        </form>
        
      </PageContent>
    </PageContainer>
  );
}
