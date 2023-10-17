import { PageContainer, PageContent } from "../styles/PageStyles";

export default function Register() {
  return (
    <PageContainer>
      <PageContent>
        <h2>Register</h2>
        <form action="http://127.0.0.1:8000/filmes/" method="post">
        <label htmlFor="nameMovie">Isert the name Movie</label>
          <input type="text" id="nameMovie" name="nameMovie" />
        <label htmlFor="descibre">Descibre of Movie</label>
          <input type="text" id="describe" name="describe" />
        <label htmlFor="theme">Theme of Movie</label>
          <input type="text" id="theme" name="theme" />
        <label htmlFor="indication">Indication for movie</label>
          <input type="text" id="indication" name="indication" />
        <label htmlFor="relese">Relese</label>
          <input type="text" id="relese" name="relese" />
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
