'use client'
import { SyntheticEvent } from "react";
import { PageContainer, PageContent } from "../styles/PageStyles";
interface FormState {
  titulo: string;
  descricao: string;
  temas: string;
  indicacao:string;
  estreia: string;
  atores_principais: string;
  imagem: string;
}

export default function Register() {
  const initialFormState: FormState ={
    titulo:"",
    descricao:"",
    temas: "",
    indicacao:"",
    estreia:"",
    atores_principais:"",
    imagem: "",
  }
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const jsonData : FormState = {} as FormState;
    formData.forEach((value, key) => {
      jsonData[key as keyof FormState] = value as string;
    });
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/filmes/', requestOptions);
      console.log(form.data)
      if (response.ok) {
        <h2>Card Criado Com Sucesso</h2>
      } else {
        <h2>Deu RUin</h2>
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
          <textarea name="descricao" id="descricao" cols={30} rows={10}>
            digita aqui
          </textarea>
          <label htmlFor="tema">Escola um tema:</label>
          <select name="tema" id="tema">
            <option value="Acao">Ação</option>
            <option value="Aventura">Aventura</option>
            <option value="Comedia">Comédia</option>
            <option value="Drama">Drama</option>
            <option value="Ficcao Cientifica">Ficção Cienífica</option>
            <option value="Guerra">Guerra</option>
            <option value="Romance">Romance</option>
            <option value="Terror">Terror</option>
            <option value="Animacao">Animação</option>
            <option value="Musical">Musical</option>
            <option value="Crime">Crime</option>
            <option value="Historia Real">História Real</option>

          </select>
          <label htmlFor="indicacao">Escolha uma indicação:</label>
          <select name="indicacao" id="indicacao">
            <option value="Livre">Livre</option>
            <option value="10+">10+</option>
            <option value="12+">12+</option>
            <option value="14+">14+</option>
            <option value="16+">16+</option>
            <option value="18+">18+</option>
          </select>
          <label htmlFor="estreia">Relese</label>
          <input type="date" id="estreia" name="estreia" />
          <label htmlFor="atores_principais">Main actors</label>
          <input type="text" id="atores_principais" name="atores_principais" />
          <label htmlFor="url_imagem">Link imagem para o filme </label>
          <input type="text" id="url_imagem" name="url_imagem" />


          <button type="submit">
            send the form
          </button>
        </form>

      </PageContent>
    </PageContainer>
  );
}
