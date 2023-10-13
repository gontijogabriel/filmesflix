import { EditContainer, EditContents } from "./styled";

export default function Edit() {
  return (
    <EditContainer>
    <EditContents>
    <form action="http://127.0.0.1:8000/cadastro" method="POST">       
        <input type="text" placeholder="Nome Movie"       name="name"/>
        <input type="text" placeholder="Themes"  name="last_name"/>
        <input type="text" placeholder="Indicação"        name="cpf"/>
        <button className="assine" type="submit">Continuar</button>
      </form>
      </EditContents>
  </EditContainer>
  );
}
