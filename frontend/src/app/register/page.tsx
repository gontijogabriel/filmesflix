'use client'
import { PageContainer, PageContent } from "../styles/PageStyles";

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const jsonData = {};
    formData.forEach((value, key) => {
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
        <label htmlFor="nameMovie">Isert the name Movie</label>
          <input type="text" id="nameMovie" name="nameMovie" />
        <label htmlFor="descibre">Descibre of Movie</label>
          <input type="text" id="describe" name="describe" />
        <label htmlFor="theme">Theme of Movie</label>
          <input type="text" id="theme" name="theme" />
        <label htmlFor="indication">Indication for movie</label>
          <input type="text" id="indication" name="indication" />
        <label htmlFor="relese">Relese</label>
          <input type="date" id="relese" name="relese" />
        <label htmlFor="main">Main actors </label>
          <input type="text" id="main" name="main" />
          <button type="submit">
            send the form
          </button>
        </form>
        
      </PageContent>
    </PageContainer>
  );
}
